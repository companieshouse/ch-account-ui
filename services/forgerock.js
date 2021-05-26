import './forgerock-polyfills'
import { Config, FRAuth, FRUser, StepType, TokenManager, UserManager, CallbackType } from '@forgerock/javascript-sdk'
import {
  FORGEROCK_AM,
  FORGEROCK_CLIENT_ID,
  FORGEROCK_COMPANY_ENDPOINT,
  FORGEROCK_REALM,
  FORGEROCK_REDIRECT,
  FORGEROCK_SCOPE,
  FORGEROCK_USER_ENDPOINT
} from './environment'
import { translateErrors } from './errors'

export { CallbackType }

const normaliseErrors = (step, journeyNamespace = 'UNKNOWN', oneErrorPerField = true) => {
  const errors = []
  const fieldsWithErrors = []

  if (!step) return errors

  // TODO Move logic to the specific page handlers
  if (step.type === StepType.LoginFailure) {
    errors.push({
      errData: step, // Add the errData key to pass along the original error info
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

export const findCustomPageProps = (step) => {
  for (let i = 0; i < step.payload.callbacks.length; i++) {
    const callback = step.payload.callbacks[i]

    if (!callback) continue
    if (callback.type !== 'HiddenValueCallback') continue
    if (!callback.output.find((output) => output.name === 'id' && output.value === 'pagePropsJSON')) continue

    try {
      const jsonString = callback.output.find((output) => output.name === 'value')?.value || ''

      if (!jsonString) {
        console.warn('Developer warning: pagePropsJSON was sent back in the callback data from the API but it was a blank string.')
        continue
      }

      const customPropsObject = JSON.parse(jsonString)

      return customPropsObject
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

  return {}
}

export const forgerockFlow = ({
  onSuccess,
  onFailure,
  onUpdateUi,
  onUpdateUser,
  journeyName,
  journeyNamespace,
  stepOptions,
  lang
}) => {
  if (!lang) {
    console.error('You must pass lang to forgerockFlow() so that errors are correctly translated!')
    return null
  }
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

  const handleFatalError = (err) => {
    console.log('ForgeRock fatal error', err)
    onFailure(err, [{
      errData: err, // Add the errData key to pass along the original error info
      token: 'ERROR_UNKNOWN', // We don't know the error
      stage: 'GENERIC_ERROR' // Switch the UI to show the GENERIC_ERROR stage features
    }])
  }

  const nextStep = (step, nextStepOptions) => {
    console.log('ForgeRock calling next step', step, nextStepOptions)
    FRAuth.next(step, nextStepOptions).then(handleStep).catch(handleFatalError)
  }

  const handleStep = (step) => {
    console.log('Forgerock step, handleStep(step) got', step)

    // Find any validation errors and convert them to an errors array
    // that our front-end can use. This normalises the errors across
    // different calls and steps etc to ensure we don't have to manually
    // code different error handling methods for different pages.
    const errors = translateErrors(normaliseErrors(step, journeyNamespace), lang)

    if (step.type === StepType.LoginSuccess) {
      console.log('ForgeRock login success', step)
      console.log('ForgeRock getting session token...')
      const sessionToken = step.getSessionToken()

      TokenManager.getTokens({ forceRenew: true }).then((tokens) => {
        return Promise.all([tokens, UserManager.getCurrentUser()])
      }).then(([tokens, currentUser]) => {
        console.log('ForgeRock getTokens returned', tokens)
        console.log('Resolving promise with', {
          sessionToken,
          tokens,
          currentUser
        })

        return onSuccess({
          sessionToken,
          tokens,
          currentUser
        })
      })

      return
    }

    if (onUpdateUser) {
      UserManager.getCurrentUser().then((user) => {
        onUpdateUser(user)
      })
    }

    if (step.type === StepType.LoginFailure) {
      console.log('ForgeRock login failure', step)
      return onFailure(step, errors)
    }

    console.log('Stepping', step)
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

export const getUsersAssociatedWithCompany = async (accessToken, companyId) => {
  if (!companyId) {
    console.error('getUsersAssociatedWithCompany(accessToken, companyId): No userId provided!')
    return
  }

  const queryFields = 'userName,givenName,mail'
  const url = `${FORGEROCK_COMPANY_ENDPOINT}${companyId}/members?_queryFilter=true&_fields=${queryFields}`

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
    let users = []
    let count = 0

    if (status === 200) {
      count = body.resultCount
      users = body.result || []
    }

    return {
      count,
      users,
      status,
      body,
      headers
    }
  }

  return res
}

export const getCompaniesAssociatedWithUser = async (accessToken, userId, company) => {
  if (!userId) {
    console.error('getCompaniesAssociatedWithUser(accessToken, userId): No userId provided!')
    return
  }
  const queryFilter = company ? `number+eq+"${company}"` : 'true'
  const queryFields = 'users,name,number,addressLine1,addressLine2,locality,region,postalCode'
  const url = `${FORGEROCK_USER_ENDPOINT}${userId}/memberOfOrg?_queryFilter=${queryFilter}&_fields=${queryFields}`

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
      count = body.resultCount
      companies = body.result || []

      // Loop each company and get reverse associations
      await Promise.all(companies.map(async (company) => {
        const {
          users
        } = await getUsersAssociatedWithCompany(accessToken, company._refResourceId)

        company.users = users || []
      }))
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
