import React, { useEffect, useState } from 'react'
import useFRAuth from '../../services/useFRAuth'

const WithCompanyInfo = (WrappedComponent) => function WithCompanyInfo (props) {
  const [messageCount, setMessageCount] = useState()

  const { companyData, profile } = useFRAuth({ fetchCompanyData: true })

  useEffect(() => {
    // const pendingCompanies = companyData.filter((company) => company.membershipStatus === 'pending')
    // setMessageCount(pendingCompanies.length)
    setMessageCount(2)
  }, [companyData])

  return <WrappedComponent {...props} messageCount={messageCount} profile={profile}/>
}

export default WithCompanyInfo
