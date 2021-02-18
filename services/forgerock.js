import { Config, FRAuth, TokenManager, StepType, SessionManager } from '@forgerock/javascript-sdk'
import {
  FORGEROCK_AM,
  FORGEROCK_CLIENT_ID,
  FORGEROCK_REALM,
  FORGEROCK_REDIRECT,
  FORGEROCK_SCOPE,
  FORGEROCK_TREE_LOGIN
} from './environment'

export const loginFlow = ({
  onSuccess,
  onFailure,
  onUpdateUi
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
    tree: FORGEROCK_TREE_LOGIN
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
        console.log('ForgeRock getTokens returned', tokens)
        return onSuccess({
          sessionToken,
          tokens
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

export const getCallbackElementData = (callbackData, matchFunc) => {
  const { input, output } = callbackData

  for (let i = 0; i < output.length; i++) {
    if (matchFunc(output[i], i) === true) {
      return {
        input: input[i],
        output: output[i]
      }
    }
  }

  return null
}
