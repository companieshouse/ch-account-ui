import { useEffect, useState } from 'react'
import { forgerockInit, getCompaniesAssociatedWithUser } from './forgerock'
import { TokenManager, UserManager } from '@forgerock/javascript-sdk'
import { useRouter } from 'next/router'
import log from '../services/log'

/**
 * React custom hook to provide authentication parameters for pages out with the regular FR flow.
 * This also validates an active session and authToken and handles the exceptions with redirect.
 * @param {Object} config - Config options
 * @param {boolean=} config.fetchCompanyData - Get company data for the current user
 * @param {string=} config.companySearch - Optional query on company number and name
 * @param {string=} config.companyStatus - Optional filter on company status
 * @returns {{profile: object, accessToken: string, companyData: {companies: *[], count: string}, loading: boolean, errors: *[]}}
 */
const useFRAuth = (config = {}) => {
  const [errors, setErrors] = useState([])
  const { fetchCompanyData, companySearch, companyStatus, refresh = false } = config
  const [loading, setLoading] = useState(true)
  const { push } = useRouter()
  const [accessToken, setAccessToken] = useState()
  const [profile, setProfile] = useState()
  const [companyData, setCompanyData] = useState([])

  const extendProfile = (profile) => ({ ...profile, display_name: profile?.given_name || profile?.email })
  const sub = profile?.sub

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    forgerockInit()

    const getAuth = async () => {
      setLoading(true)

      if (!accessToken) {
        const accessTokens = await TokenManager.getTokens({ forceRenew: false, support: 'modern' }).catch((err) => {
          log.debug('FR Auth: Failed to get tokens: ' + err)
          push('/error/no-session') // Redirect the user on time out
        })
        if (!accessTokens) {
          return
        }
        setAccessToken(accessTokens.accessToken)
        // add it to a session here
        sessionStorage.setItem('token', JSON.stringify(accessToken))
      }

      if (!profile) {
        // check the session for a profile
        if (sessionStorage.getItem('profile')) {
          setProfile(extendProfile(JSON.parse(sessionStorage.getItem('profile'))))
        } else {
          await UserManager.getCurrentUser().then((user) => {
            setProfile(extendProfile(user))
            sessionStorage.setItem('profile', JSON.stringify(extendProfile(user)))
          }).catch((err) => {
            log.debug(err)
            push('/account/login/')
          })
        }
      }

      // if (!fetchCompanyData) {
      //   setLoading(false)
      // }

      setLoading(false)
    }
    if (!accessToken) {
      getAuth()
    }
  }, [])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (sub && accessToken && fetchCompanyData) {
      setLoading(true)
      setErrors([])
      // check the session for company data
      if (sessionStorage.getItem('companyData') && refresh === false && !sessionStorage.getItem('refresh')) {
        log.debug('We have company data in the session')
        const companiesSessionData = JSON.parse(sessionStorage.getItem('companyData'))
        setCompanyData(JSON.parse(sessionStorage.getItem('companyData')))
        setLoading(false)
        if (companySearch) {
          const searchResults = companiesSessionData.filter((company) => {
            const searchTerm = companySearch.toUpperCase()
            const name = company.name
            const number = company.number
            if (name.includes(searchTerm)) {
              return true
            }

            if (number.includes(searchTerm)) {
              return true
            }

            return false
          })
          setCompanyData(searchResults)
        }
      } else {
        // if no session data - call the endpoint
        log.debug('calling endpoint to retrieve company data')
        getCompaniesAssociatedWithUser(accessToken, sub, companySearch, companyStatus).then((data) => {
          setCompanyData(data.companies)
          sessionStorage.setItem('companyData', JSON.stringify(data.companies))
          sessionStorage.setItem('refresh', false)
        }).catch((err) => {
          setErrors([{
            errData: err, // Add the errData key to pass along the original error info
            token: 'ERROR_UNKNOWN', // We don't know the error
            stage: 'GENERIC_ERROR' // Switch the UI to show the GENERIC_ERROR stage features
          }]).finally(() => {
            setLoading(false)
          })
        }
        )
      }
    }
  }, [sub, accessToken, fetchCompanyData, companySearch, companyStatus, profile])
  return { accessToken, profile, companyData, loading, errors }
}

export default useFRAuth
