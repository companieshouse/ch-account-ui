import { Config, FRAuth, TokenManager, StepType, SessionManager, UserManager } from '@forgerock/javascript-sdk'
import {
  FORGEROCK_AM,
  FORGEROCK_CLIENT_ID,
  FORGEROCK_REALM,
  FORGEROCK_REDIRECT,
  FORGEROCK_SCOPE
} from './environment'
export { CallbackType } from '@forgerock/javascript-sdk'

export const forgerockFlow = ({
  onSuccess,
  onFailure,
  onUpdateUi,
  journeyName,
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
    onFailure(err)
  }

  const nextStep = (step, stepOptions) => {
    console.log('ForgeRock calling next step', step, stepOptions)
    FRAuth.next(step, stepOptions).then(handleStep).catch(handleFatalError)
  }

  const handleStep = (step) => {
    console.log('Forgerock step, handleStep(step) got', step)
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
      return onFailure(step)
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
    })
  }

  // Start the login process
  nextStep(undefined, stepOptions)
}

export const loginFlow = ({
  onSuccess,
  onFailure,
  onUpdateUi,
  journeyName
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
    onFailure(err)
  }

  const nextStep = (step) => {
    console.log('ForgeRock calling next step', step)
    FRAuth.next(step).then(handleStep).catch(handleFatalError)
  }

  const handleStep = (step) => {
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
      return onFailure(step)
    }

    console.log('Stepping', step)
    onUpdateUi(step, (formData) => {
      // Fill in the step input data from form data
      step.callbacks.forEach((callback) => {
        const payload = callback?.payload
        const inputs = payload?.input || []

        inputs.forEach((input) => {
          input.value = formData[input.name]
        })
      })

      nextStep(step)
    })
  }

  // Start the login process
  nextStep()
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

  SessionManager.logout().then(onSuccess).catch(onFailure)
}

export const getCallbackElementData = (callbackData) => {
  const { input, output } = callbackData

  // Find the field id
  const fieldId = input[0].name
  const label = output.find((outputItem) => outputItem.name === 'prompt')?.value || ''
  const value = output.find((outputItem) => outputItem.name === 'value')?.value || ''
  const required = output.find((outputItem) => outputItem.name === 'required')?.value || false
  const testId = output.find((outputItem) => outputItem.name === 'name')?.value || 'unknownFieldName'

  return {
    fieldId,
    label,
    value,
    required,
    testId,
    input,
    output
  }
}
