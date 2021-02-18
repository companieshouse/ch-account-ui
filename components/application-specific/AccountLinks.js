import PropTypes from 'prop-types'
import React from 'react'
import Row from '../general-ui/layout/Row'
import LinkText from '../general-ui/interaction/LinkText'
import Column from '../general-ui/layout/Column'
import SectionBreak from '../general-ui/typeography/SectionBreak'
import SpanText from '../general-ui/typeography/SpanText'

const AccountLinks = ({ userDetails = {} }) => {
  const { emailAddress } = userDetails
  return (
    <Column width='full'>
      <Row className="govuk-!-margin-top-4">
        <Column width='two-thirds'>
          <Row>
            <LinkText href={'/account/home'} className="govuk-!-margin-right-4">Home</LinkText>
            <LinkText href={'/account/home'} className="govuk-!-margin-right-4">Your details</LinkText>
            <LinkText href={'/account/home'} className="govuk-!-margin-right-4">Manage account</LinkText>
            <LinkText href={'/account/home'} className="govuk-!-margin-right-4">Messages</LinkText>
            <LinkText href={'/account/home'} className="govuk-!-margin-right-4">Companies you follow</LinkText>
          </Row>
        </Column>
        <Column width='one-third' className="alignRight">
          <Row>
            <SpanText className="govuk-!-margin-right-4 govuk-body-s">{emailAddress}</SpanText>
            <LinkText href={'/account/logout'}>Sign out</LinkText>
          </Row>
        </Column>
      </Row>
      <Row><SectionBreak/></Row>
    </Column>
  )
}

export default AccountLinks

AccountLinks.propTypes = {
  userDetails: PropTypes.object
}

AccountLinks.defaultProps = {
  userDetails: {}
}
