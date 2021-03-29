import React from 'react'
import HeadingText from '../general-ui/typeography/HeadingText'
import BodyText from '../general-ui/typeography/BodyText'
import LinkText from '../general-ui/interaction/LinkText'

const AccountServices = () => {
  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-third block">
        <HeadingText type="h2" size="m">0</HeadingText>
        <HeadingText type="h3" size="m">Search the register</HeadingText>
        <BodyText>Search for company information on the Companies House register.</BodyText>
      </div>
      <div className="govuk-grid-column-one-third block">
        <HeadingText type="h2" size="m">0</HeadingText>
        <HeadingText type="h3" size="m">Follow a company</HeadingText>
        <BodyText>Receive email alerts about a company&apos;s activity.</BodyText>
      </div>
      <div className="govuk-grid-column-one-third block">
        <HeadingText type="h2" size="m">0</HeadingText>
        <HeadingText type="h3" size="m">File accounts</HeadingText>
        <BodyText>File abridged or full accounts.</BodyText>
        <BodyText><LinkText href="https://www.google.com" testId="fileYourAccountsLink">File your accounts</LinkText>.</BodyText>
      </div>
      <style jsx>{`
        .block {
          padding: 2em;
          height: 300px;
          width: 310px;
          margin-right: 10px;
          background-color: #f3f2f1;
        }
      `}</style>
    </div>
  )
}

export default AccountServices
