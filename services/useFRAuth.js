import { useEffect, useState } from 'react'
import { forgerockInit } from './forgerock'
import { TokenManager, UserManager } from '@forgerock/javascript-sdk'
import { useRouter } from 'next/router'
import log from '../services/log'

/**
 * React hook to provide authentication parameters for pages outwith the regular FR flow.
 * Also validates an active session and authToken and handles the exceptions with redirect.
 *
 * @returns {{profile: object, accessToken: object}}
 */
const useFRAuth = () => {
  const { push } = useRouter()
  const [accessToken, setAccessToken] = useState()
  const [profile, setProfile] = useState()

  useEffect(() => {
    forgerockInit()
    const getAuth = async () => {
      const accessTokens = await TokenManager.getTokens({ forceRenew: false, support: 'modern' }).catch((err) => {
        log.debug('FR Auth: Failed to get tokens: ' + err)
        push('/account/login/')
      })
      if (!accessTokens) {
        return
      }
      setAccessToken(accessTokens.accessToken)

      const user = await UserManager.getCurrentUser().catch((err) => {
        log.debug('FR Auth: Failed to get user details: ' + err)
        push('/account/login/')
      })
      setProfile(user)
    }
    getAuth()
  }, [push])

  return { accessToken, profile }
}

export default useFRAuth
