import { useEffect, useState } from 'react'
import { forgerockInit, getCompaniesAssociatedWithUser } from './forgerock'
import { TokenManager, UserManager } from '@forgerock/javascript-sdk'
import { useRouter } from 'next/router'
import log from '../services/log'

/**
 * React hook to provide authentication parameters for pages outwith the regular FR flow.
 * Also validates an active session and authToken and handles the exceptions with redirect.
 *
 * @returns {{profile: object, accessToken: object}}
 */
const useFRAuth = (config = {}) => {
  const [errors, setErrors] = useState([])
  const { fetchCompanyData, companySearch, companyStatus } = config
  const [loading, setLoading] = useState(true)
  const { push } = useRouter()
  const [accessToken, setAccessToken] = useState()
  const [profile, setProfile] = useState()
  const [companyData, setCompanyData] = useState({ count: '0', companies: [] })

  const extendProfile = (profile) => ({ ...profile, display_name: profile?.given_name || profile?.email })
  const sub = profile?.sub

  useEffect(() => {
    forgerockInit()
    const getAuth = async () => {
      setLoading(true)
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
      setProfile(extendProfile(user))

      if (!fetchCompanyData) {
        setLoading(false)
      }
    }
    getAuth()
  }, [fetchCompanyData, push])

  useEffect(() => {
    if (sub && accessToken && fetchCompanyData) {
      if (!loading) {
        setLoading(true)
      }
      setErrors([])
      getCompaniesAssociatedWithUser(accessToken, sub, companySearch, companyStatus).then((data) => {
        setCompanyData({
          companies: data.companies
        })
        setLoading(false)
      }).catch((err) => {
        setErrors([{
          errData: err, // Add the errData key to pass along the original error info
          token: 'ERROR_UNKNOWN', // We don't know the error
          stage: 'GENERIC_ERROR' // Switch the UI to show the GENERIC_ERROR stage features
        }])
        setLoading(false)
      }
      )
    }
  }, [sub, accessToken, fetchCompanyData, companySearch, companyStatus, loading])

  return { accessToken, profile, companyData, loading, errors }
}

export default useFRAuth
