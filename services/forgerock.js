import { Config, FRAuth, FRUser, TokenManager, StepType, UserManager } from '@forgerock/javascript-sdk'
import {
  FORGEROCK_AM,
  FORGEROCK_CLIENT_ID,
  FORGEROCK_REALM,
  FORGEROCK_REDIRECT,
  FORGEROCK_SCOPE
} from './environment'
export { CallbackType } from '@forgerock/javascript-sdk'

const normaliseErrors = (step, journeyNamespace = 'UNKNOWN', oneErrorPerField = true) => {
  const errors = []
  const fieldsWithErrors = []

  if (!step) return errors

  if (step.type === StepType.LoginFailure) {
    errors.push({
      errData: step, // Add the errData key to pass along the original error info
      token: `${journeyNamespace}_ERROR_LOGIN_FAILURE`
    })
  }

  if (!step.callbacks) return errors

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
          token: `${journeyNamespace}_${json.policyRequirement}`,
          anchor: (inputs && inputs[0] && inputs[0].name) || undefined,
          fieldName
        })

        fieldsWithErrors.push(fieldName)
      } catch (err) {
        // Couldn't parse JSON
      }
    })
  })

  return errors
}

export const forgerockFlow = ({
  onSuccess,
  onFailure,
  onUpdateUi,
  journeyName,
  journeyNamespace,
  stepOptions
}) => {
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

  const nextStep = (step, stepOptions) => {
    console.log('ForgeRock calling next step', step, stepOptions)
    FRAuth.next(step, stepOptions).then(handleStep).catch(handleFatalError)
  }

  const handleStep = (step) => {
    console.log('Forgerock step, handleStep(step) got', step)

    // Find any validation errors and convert them to an errors array
    // that our front-end can use. This normalises the errors across
    // different calls and steps etc to ensure we don't have to manually
    // code different error handling methods for different pages.
    const errors = normaliseErrors(step, journeyNamespace)

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

    if (step.type === StepType.LoginFailure) {
      console.log('ForgeRock login failure', step)
      return onFailure(step, errors)
    }

    console.log('Stepping', step)
    onUpdateUi(step, (formData, stepOptions) => {
      // Fill in the step input data from form data
      step.callbacks.forEach((callback) => {
        const payload = callback?.payload
        const inputs = payload?.input || []

        inputs.forEach((input) => {
          input.value = formData[input.name]
        })
      })

      nextStep(step, stepOptions)
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
