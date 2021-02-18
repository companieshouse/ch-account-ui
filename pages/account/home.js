import React from 'react'
import AccountHomeView from '../../components/views/account/Home'
import HeadingCount from '../../services/HeadingCount'

const AccountHome = () => {
  const headingCount = new HeadingCount()

  React.useEffect(() => {
    headingCount.reset()
  }, [])

  const data = {
    errors: [],
    userDetails: {
      fullName: 'Test User',
      emailAddress: 'test@user.com'
    },
    companies: [{
      name: 'Test Company',
      number: '0123456789',
      address: '2nd Floor Red House, 17 London Road, London, SA73 8PH',
      personsAuthorisedToFile: [{
        name: 'Test User',
        emailAddress: 'test@user.com',
        permissions: ['FILE_ACCOUNTS', 'FILE_CONFIRMATION_STATEMENTS', 'MAKE_CHANGES_TO_THE_COMPANY'],
        canAuthOthers: true
      }]
    }]
  }

  return (
    <AccountHomeView headingCount={headingCount} errors={data.errors} companies={data.companies} userDetails={data.userDetails} />
  )
}

export default AccountHome
