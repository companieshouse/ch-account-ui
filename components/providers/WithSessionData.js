import React, { useState, useEffect } from 'react'

const WithSessionData = (WrappedComponent) => function WithSessionData (props) {
  const [companyData, setCompanyData] = useState()
  const [profile, setProfile] = useState()

  useEffect(() => {
    if (sessionStorage.getItem('profile')) {
      setProfile(sessionStorage.getItem('profile'))
    }

    if (sessionStorage.getItem('companyData')) {
      setCompanyData(sessionStorage.getItem('companyData'))
    }
  }, [profile, companyData])

  return <WrappedComponent {...props} sessionProfile={profile} sessionCompanyData={companyData} />
}

export default WithSessionData
