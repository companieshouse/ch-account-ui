import React, { useEffect, useState } from 'react'
import useFRAuth from '../../services/useFRAuth'

const WithCompanyInfo = (WrappedComponent) => function WithCompanyInfo (props) {
  const [messageCount, setMessageCount] = useState()

  const { companyData } = useFRAuth({ fetchCompanyData: true })

  useEffect(() => {
    const pendingCompanies = companyData.companies.filter((company) => company.membershipStatus === 'pending')
    setMessageCount(pendingCompanies.length)
  }, [companyData.companies])

  return <WrappedComponent {...props} messageCount={messageCount} />
}

export default WithCompanyInfo
