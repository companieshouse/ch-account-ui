import React from 'react'
import HeadingText from '../general-ui/typeography/HeadingText'
import BodyText from '../general-ui/typeography/BodyText'

const AccountOverview = () => {
  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-third block">
        <HeadingText type="h2" size="m">0</HeadingText>
        <HeadingText type="h3" size="m">Your companies</HeadingText>
        <BodyText>View and manage your companies and the people authorised to file on behalf of a company.</BodyText>
      </div>
      <div className="govuk-grid-column-one-third block">
        <HeadingText type="h2" size="m">0</HeadingText>
        <HeadingText type="h3" size="m">Companies you follow</HeadingText>
        <BodyText>To receive notifications about a company, search for a company on the Companies House register and use the &apos;Follow a company&apos; service.</BodyText>
      </div>
      <div className="govuk-grid-column-one-third block">
        <HeadingText type="h2" size="m">0</HeadingText>
        <HeadingText type="h3" size="m">Notifications</HeadingText>
        <BodyText>Requests for authorised people to file on behalf of a company will appear here.</BodyText>
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

export default AccountOverview
