import { useEffect, useState } from 'react'
import { forgerockInit, getCompaniesAssociatedWithUser } from './forgerock'
import { TokenManager, UserManager } from '@forgerock/javascript-sdk'
import { useRouter } from 'next/router'
import log from '../services/log'
import { generateQueryUrl } from './queryString'
import { CH_EWF_AUTHENTICATED_ENTRY_URL } from './environment'

export const extendCompaniesData = (companiesData) => {
  return companiesData.map((company) => {
    const authorisePath = generateQueryUrl('/account/authorise/_start/', { companyNumber: company.number, companyName: company.name })
    const filePath = generateQueryUrl(CH_EWF_AUTHENTICATED_ENTRY_URL, { companyNo: company.number, jurisdiction: company.jurisdiction })

    company.users.forEach((user) => {
      user.detailsPath = generateQueryUrl('/account/your-companies/authorised-person', { companyNumber: company.number, userId: user._refResourceId })
    })

    return { ...company, authorisePath, filePath }
  })
}

/**
 * React hook to provide authentication parameters for pages outwith the regular FR flow.
 * Also validates an active session and authToken and handles the exceptions with redirect.
 *
 * @returns {{profile: object, accessToken: object}}
 */
const useFRAuth = (config = {}) => {
  const { fetchCompanyData } = config
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
      getCompaniesAssociatedWithUser(accessToken, sub).then((response) => {
        setCompanyData({
          count: response.confirmedCount,
          companies: extendCompaniesData(response.confirmedCompanies)
        })
        setLoading(false)
      })
    }
  }, [sub, accessToken, fetchCompanyData])

  return { accessToken, profile, companyData, loading }
}

export default useFRAuth
