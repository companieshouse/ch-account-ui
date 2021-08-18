import './forgerock-polyfills'
import { Config, FRAuth, FRUser, StepType, TokenManager, UserManager, CallbackType } from '@forgerock/javascript-sdk'
import {
  CH_EWF_AUTHENTICATED_ENTRY_URL,
  FORGEROCK_AM,
  FORGEROCK_CLIENT_ID,
  FORGEROCK_IDM_COMPANY_ENDPOINT,
  FORGEROCK_REALM,
  FORGEROCK_REDIRECT,
  FORGEROCK_SCOPE,
  FORGEROCK_USER_ENDPOINT
} from './environment'
import { translateErrors } from './errors'
import log from './log'
import { generateQueryUrl } from './queryString'

export { CallbackType }

const normaliseErrors = (step, journeyNamespace = 'UNKNOWN', oneErrorPerField = true) => {
  const errors = []
  const fieldsWithErrors = []

  if (!step) return errors

  // TODO Move logic to the specific page handlers
  if (step.type === StepType.LoginFailure) {
    log.debug(step)
    errors.push({
      errData: step, // Add the errData key to pass along the original error info
      stage: 'NO_SESSION_ERROR',
      token: `${journeyNamespace}_ERROR_LOGIN_FAILURE`,
      tokenNoNamespace: 'ERROR_LOGIN_FAILURE',
      anchor: 'IDToken1'
    })
  }

  if (!step.callbacks) return errors

  const customPageProps = findCustomPageProps(step)

  if (customPageProps.errors instanceof Array && customPageProps.errors.length > 0) {
    // Custom page props has errors in it
    customPageProps.errors.forEach((error) => {
      errors.push({
        errData: error,
        tokenNoNamespace: error.token,
        token: `${journeyNamespace}_${error.token}`,
        label: !error.token ? error.label : undefined,
        anchor: error.anchor || undefined,
        fieldName: error.fieldName
      })
    })
  }

  // Scan the step callbacks for failedPolicies data
  step.callbacks.forEach((callback) => {
    const payload = callback?.payload
    const inputs = payload?.input || []
    const outputs = payload?.output || []

    const fieldName = (outputs.find((output) => output.name === 'name') || {}).value || ''
    if (oneErrorPerField === true && fieldsWithErrors.indexOf(fieldName) > -1) return

    const failedPolicies = outputs.find((output) => output.name === 'failedPolicies')

    // Loop the failed policies
    failedPolicies?.value?.forEach((failedPolicy) => {
      if (oneErrorPerField === true && fieldsWithErrors.indexOf(fieldName) > -1) return

      try {
        const json = JSON.parse(failedPolicy)
        if (!json || !json.policyRequirement) return

        errors.push({
          errData: json,
          tokenNoNamespace: json.policyRequirement,
          token: `${journeyNamespace}_${json.policyRequirement}`,
          anchor: (inputs && inputs[0] && inputs[0].name) || undefined,
          fieldName
        })

        fieldsWithErrors.push(fieldName)
      } catch (err) {
        // Couldn't parse JSON - fail silently as this is an API issue
      }
    })
  })

  return errors
}

export const findCustomStage = (step) => {
  for (let i = 0; i < step.payload.callbacks.length; i++) {
    const callback = step.payload.callbacks[i]

    if (!callback) continue
    if (callback.type !== 'HiddenValueCallback') continue
    if (!callback.output.find((output) => output.name === 'id' && output.value === 'stage')) continue

    return callback.output.find((output) => output.name === 'value')?.value || ''
  }

  return ''
}

export const findCallback = (step, callbackId) => {
  for (let i = 0; i < step.payload.callbacks.length; i++) {
    const callback = step.payload.callbacks[i]

    if (!callback) continue
    if (callback.type !== 'HiddenValueCallback') continue

    if (!callback.output.find((output) => output.name === 'id' && output.value === callbackId)) continue

    return callback.output.find((output) => output.name === 'value')?.value || ''
  }
}

export const findNotificationId = (step) => {
  return findCallback(step, 'notificationId')
}

export const findCustomPageProps = (step) => {
  try {
    const jsonString = findCallback(step, 'pagePropsJSON')

    if (!jsonString) {
      log.warn('Developer warning: pagePropsJSON was sent back in the callback data from the API but it was a blank string.')
      return {}
    }

    return JSON.parse(jsonString)
  } catch (err) {
    return {
      apiError: {
        errors: [{
          error: 'JSONParseError',
          message: 'API returned invalid JSON string in \'pagePropsJSON\' callback data: ' + err
        }]
      }
    }
  }
}

export const forgerockInit = (journeyName) => {
  try {
    Config.get()
  } catch {
    Config.set({
      clientId: FORGEROCK_CLIENT_ID,
      realmPath: FORGEROCK_REALM,
      redirectUri: FORGEROCK_REDIRECT,
      scope: FORGEROCK_SCOPE,
      serverConfig: {
        baseUrl: FORGEROCK_AM,
        timeout: 30000
      },
      tree: journeyName
    })
  }
}

export const forgerockFlow = ({
  onSuccess,
  onFailure,
  onUpdateUi,
  journeyName,
  journeyNamespace,
  stepOptions,
  lang,
  getLang,
  isAuthOnly
}) => {
  if (!lang && !getLang) {
    log.error('You must pass lang to forgerockFlow() so that errors are correctly translated!')
    return null
  }

  if (!getLang) {
    getLang = () => lang
  }

  const langMiddleware = (req, action, next) => {
    if (req.init.headers) {
      req.init.headers['Chosen-Language'] = getLang() === 'cy' ? 'CY' : 'EN'
    }
    next()
  }

  Config.set({
    clientId: FORGEROCK_CLIENT_ID,
    middleware: [langMiddleware],
    realmPath: FORGEROCK_REALM,
    redirectUri: FORGEROCK_REDIRECT,
    scope: FORGEROCK_SCOPE,
    serverConfig: {
      baseUrl: FORGEROCK_AM,
      timeout: 30000
    },
    tree: journeyName
  })

  const handleFatalError = (err) => {
    log.debug('ForgeRock fatal error', err)
    onFailure(err, [{
      errData: err, // Add the errData key to pass along the original error info
      token: 'ERROR_UNKNOWN', // We don't know the error
      stage: 'GENERIC_ERROR' // Switch the UI to show the GENERIC_ERROR stage features
    }])
  }

  const nextStep = (step, nextStepOptions) => {
    log.debug('ForgeRock calling next step', step, nextStepOptions)
    FRAuth.next(step, nextStepOptions).then(handleStep).catch(handleFatalError)
  }

  const handleStep = async (step) => {
    log.debug('Forgerock step, handleStep(step) got', step)

    // Find any validation errors and convert them to an errors array
    // that our front-end can use. This normalises the errors across
    // different calls and steps etc to ensure we don't have to manually
    // code different error handling methods for different pages.
    const errors = translateErrors(normaliseErrors(step, journeyNamespace), getLang())

    if (step.type === StepType.LoginSuccess) {
      log.debug('ForgeRock login success', step)

      if (!isAuthOnly) {
        const tokens = await TokenManager.getTokens({ forceRenew: true })
        const user = await UserManager.getCurrentUser()
        return onSuccess(tokens, user)
      }

      return onSuccess()
    }

    if (step.type === StepType.LoginFailure) {
      log.debug('ForgeRock login failure', step)
      return onFailure(step, errors)
    }

    log.debug('Stepping', step)
    onUpdateUi(step, (formData, uiStepOptions) => {
      // Fill in the step input data from form data
      step.callbacks.forEach((callback) => {
        const payload = callback?.payload
        const inputs = payload?.input || []

        inputs.forEach((input) => {
          input.value = formData[input.name]
        })
      })

      nextStep(step, uiStepOptions)
    }, errors)
  }

  // Start the login process
  nextStep(undefined, stepOptions)
}

export const logoutFlow = ({
  onSuccess,
  onFailure
}) => {
  Config.set({
    clientId: FORGEROCK_CLIENT_ID,
    realmPath: FORGEROCK_REALM,
    redirectUri: FORGEROCK_REDIRECT,
    scope: FORGEROCK_SCOPE,
    serverConfig: {
      baseUrl: FORGEROCK_AM,
      timeout: 30000
    }
  })
  FRUser.logout().then(onSuccess).catch(onFailure)
  // SessionManager.logout().then(onSuccess).catch(onFailure)
}

export const getUserFields = async (accessToken, userId, fields) => {
  const url = `${FORGEROCK_USER_ENDPOINT}${userId}?_fields=${fields}`

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    init: {
      credentials: 'include'
    }
  })

  const { status, headers } = res

  if (res.headers && res.headers.get('Content-Type') && res.headers.get('Content-Type').indexOf('application/json') > -1) {
    const body = await res.json()

    return {
      status,
      body,
      headers
    }
  }

  return res
}

export const getCompaniesAssociatedWithUser = async (accessToken, userId, companySearch, companyStatus) => {
  if (!userId) {
    log.error('getCompaniesAssociatedWithUser(accessToken, userId): No userId provided!')
    return
  }

  const url = generateQueryUrl(FORGEROCK_IDM_COMPANY_ENDPOINT, { currentPage: 1, pageSize: 9999, maxPages: 10, searchTerm: companySearch, status: companyStatus })

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    init: {
      credentials: 'include'
    }
  })
  const { status, headers } = res

  if (res.headers && res.headers.get('Content-Type') && res.headers.get('Content-Type').indexOf('application/json') > -1) {
    const body = await res.json()
    let companies = []
    let count = 0

    if (status === 200) {
      const companiesData = body.results || []
      count = companiesData.count

      companies = companiesData.map((company) => {
        return {
          ...company,
          authorisePath: generateQueryUrl('/account/authorise/_start/', { companyNumber: company.number, companyName: company.name }),
          filePath: generateQueryUrl(CH_EWF_AUTHENTICATED_ENTRY_URL, { companyNo: company.number, jurisdiction: company.jurisdiction }),
          acceptPath: generateQueryUrl('/account/authorise/_start/', { companyNumber: company.number, companyName: company.name, action: 'accept' }),
          declinePath: generateQueryUrl('/account/authorise/_start/', { companyNumber: company.number, companyName: company.name, action: 'decline' }),
          members: company.members?.map((member) => ({
            ...member,
            currentUser: member._id === userId,
            detailsPath: generateQueryUrl('/account/your-companies/authorised-person', { companyNumber: company.number, userId: member._id })
          })
          )
        }
      })
    }

    return {
      count,
      companies,
      status,
      body,
      headers
    }
  }

  return res
}
