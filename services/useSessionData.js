import { useEffect, useState } from 'react'

const useSessionData = () => {
  const [companyData, setCompanyData] = useState([])
  const [pendingCompanies, setPendingCompanies] = useState([])
  const [sessionUpdated, setSessionUpdated] = useState(false)
  const [updateSession, setUpdateSession] = useState(false)

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (sessionStorage.getItem('companyData') === null) {
      // we dont have data in the session - retry
      setUpdateSession(true)
    } else {
      // we have data - stop checking
      setUpdateSession(false)
    }
  })

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (sessionStorage.getItem('companyData')) {
      setSessionUpdated(true)
      setUpdateSession(false)
    }

    if (sessionStorage.getItem('companyData') && companyData.length === 0) {
      setCompanyData(JSON.parse(sessionStorage.getItem('companyData')))
      setSessionUpdated(true)
    }

    if (companyData.length > 0 && pendingCompanies.length === 0) {
      // we have companies, checking pending membership status
      const pendingCompanies = companyData.filter((company) => company.membershipStatus === 'pending')
      setPendingCompanies(pendingCompanies)
    }
  }, [companyData, pendingCompanies, sessionUpdated, updateSession])

  return { companyData, pendingCompanies }
}

export default useSessionData
