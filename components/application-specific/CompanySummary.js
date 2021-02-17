import HeadingText from '../typeography/HeadingText'
import React from 'react'

const CompanySummary = ({
  headingCount,
  company = {
    name: 'Test Company',
    number: '0123456789',
    address: '2nd Floor Red House, 17 London Road, London, SA73 8PH',
    personsAuthorisedToFile: [{
      name: 'Test User',
      emailAddress: 'test@user.com',
      permissions: ['FILE_ACCOUNTS', 'FILE_CONFIRMATION_STATEMENTS', 'MAKE_CHANGES_TO_THE_COMPANY'],
      canAuthOthers: true
    }]
  }
}) => {
  const { name, number, address, personsAuthorisedToFile } = company

  return (
    <>
      <HeadingText headingCount={headingCount} size="m">{name}</HeadingText>
      <HeadingText headingCount={headingCount} size="s" weight="regular">Company number</HeadingText>
    </>
  )
}

export default CompanySummary
