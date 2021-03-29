import React from 'react'
import HeadingText from '../general-ui/typeography/HeadingText'
import BodyText from '../general-ui/typeography/BodyText'

const AccountOverview = (props) => {
  const { headingCount } = props
  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-third block">
        <HeadingText type="h2" size="m">0</HeadingText>
        <HeadingText type="h3" size="m">Your companies</HeadingText>
        <BodyText>View and manage your companies and the people authorised top file n behalf of a company.</BodyText>
      </div>
      <div className="govuk-grid-column-one-third block">
        <HeadingText type="h2" size="m">0</HeadingText>
        <HeadingText type="h3" size="m">Your companies</HeadingText>
        <BodyText>View and manage your companies and the people authorised top file n behalf of a company.</BodyText>
      </div>
      <div className="govuk-grid-column-one-third block">
        <HeadingText type="h2" size="m">0</HeadingText>
        <HeadingText type="h3" size="m">Your companies</HeadingText>
        <BodyText>View and manage your companies and the people authorised top file n behalf of a company.</BodyText>
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
