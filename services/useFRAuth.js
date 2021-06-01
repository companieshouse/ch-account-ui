import { useEffect, useState } from 'react'
import { forgerockInit } from './forgerock'
import { TokenManager, UserManager } from '@forgerock/javascript-sdk'
import { useRouter } from 'next/router'

const useFRAuth = () => {
  const { push } = useRouter()
  const [accessToken, setAccessToken] = useState()
  const [profile, setProfile] = useState()

  useEffect(() => {
    forgerockInit()
    const getAuth = async () => {
      const accessTokens = await TokenManager.getTokens({ forceRenew: false, support: 'modern' }).catch((err) => {
        console.log('FR Auth: Failed to get tokens: ' + err)
        push('/account/login')
      })
      if (!accessTokens) {
        return
      }
      setAccessToken(accessTokens.accessToken)

      const user = await UserManager.getCurrentUser()
      setProfile(user)
    }
    getAuth()
  }, [push])

  return { accessToken, profile }
}

export default useFRAuth
