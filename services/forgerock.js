import { Config, FRAuth, TokenManager, UserManager, StepType } from '@forgerock/javascript-sdk'
import {
  FORGEROCK_AM,
  FORGEROCK_CLIENT_ID,
  FORGEROCK_REALM,
  FORGEROCK_REDIRECT,
  FORGEROCK_SCOPE,
  FORGEROCK_TREE_LOGIN
} from './environment'

export const login = (loginDetails) => {
  return new Promise((resolve, reject) => {
    Config.set({
      clientId: FORGEROCK_CLIENT_ID,
      realmPath: FORGEROCK_REALM,
      redirectUri: FORGEROCK_REDIRECT,
      scope: FORGEROCK_SCOPE,
      serverConfig: {
        baseUrl: FORGEROCK_AM,
        timeout: 10000
      },
      tree: FORGEROCK_TREE_LOGIN
    })

    const handleFatalError = (err) => {
      reject(err)
    }

    const nextStep = (step) => {
      FRAuth.next(step).then(handleStep).catch(handleFatalError)
    }

    const handleStep = (step) => {
      if (step.type === StepType.LoginSuccess) {
        const sessionToken = step.getSessionToken()
        TokenManager.getTokens({ forceRenew: false }).then((tokens) => {
          return [tokens, UserManager.getCurrentUser()]
        }).then(([tokens, user]) => {
          return resolve({
            sessionToken,
            tokens,
            user
          })
        })
      }

      if (step.type === StepType.LoginFailure) {
        return reject(step)
      }

      console.log('Stepping', step)
      // This is not a failure or success step so figure out what data the step
      // needs and fill it, then call nextStep with it
      const usernameCallbacks = step.getCallbacksOfType('NameCallback')
      const passwordCallbacks = step.getCallbacksOfType('PasswordCallback')

      if (!usernameCallbacks.length || !passwordCallbacks.length) return console.log('Error, do not recognise step')

      const nameCallback = step.getCallbackOfType('NameCallback')
      const passwordCallback = step.getCallbackOfType('PasswordCallback')

      nameCallback.setName(loginDetails.username)
      passwordCallback.setPassword(loginDetails.password)

      nextStep(step)
    }

    // Start the login process
    nextStep()
  })
}
