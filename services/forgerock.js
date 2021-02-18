import { Config, FRAuth, TokenManager, UserManager, StepType } from '@forgerock/javascript-sdk'
import {
  FORGEROCK_AM,
  FORGEROCK_CLIENT_ID,
  FORGEROCK_REALM,
  FORGEROCK_REDIRECT,
  FORGEROCK_SCOPE,
  FORGEROCK_TREE_LOGIN
} from './environment'

export const login = ({ username, password }) => {
  return new Promise((resolve, reject) => {
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
      reject(err)
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
        TokenManager.getTokens({ forceRenew: false }).then((tokens) => {
          console.log('ForgeRock getTokens returned', tokens)
          console.log('ForgeRock getting current user...')
          return Promise.all([tokens, UserManager.getCurrentUser()])
        }).then(([tokens, user]) => {
          console.log('ForgeRock getCurrentUser returned', user)
          console.log('Resolving login() promise', {
            sessionToken,
            tokens,
            user
          })
          return resolve({
            sessionToken,
            tokens,
            user
          })
        })

        return
      }

      if (step.type === StepType.LoginFailure) {
        console.log('ForgeRock login failure', step)
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

      nameCallback.setName(username)
      passwordCallback.setPassword(password)

      nextStep(step)
    }

    // Start the login process
    nextStep()
  })
}

export const loginFlow = () => {
  const submitData = () => {}
  return submitData
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
