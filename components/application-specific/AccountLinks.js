import PropTypes from 'prop-types'
import React from 'react'
import Row from '../general-ui/layout/Row'
import LinkText from '../general-ui/interaction/LinkText'
import Column from '../general-ui/layout/Column'
import SectionBreak from '../general-ui/typeography/SectionBreak'
import SpanText from '../general-ui/typeography/SpanText'
import { translate } from '../../services/translate'
import withLang from '../../services/lang/withLang'

const AccountLinks = (props) => {
  const { lang, userDetails = {} } = props
  const { emailAddress } = userDetails

  return (
    <Column width='full'>
      <Row className="govuk-!-margin-top-4">
        <Column width='two-thirds'>
          <Row>
            <LinkText href={'/account/home'} className="govuk-!-margin-right-4" testId="accountHomeLink">Home</LinkText>
            <LinkText href={'/account/home'} className="govuk-!-margin-right-4" testId="accountYourDetailsLink">Your details</LinkText>
            <LinkText href={'/account/manage'} className="govuk-!-margin-right-4" testId="accountManageAccountLink">{translate(lang, 'ACCOUNT_LINKS_MANAGE_ACCOUNT')}</LinkText>
            <LinkText href={'/account/home'} className="govuk-!-margin-right-4" testId="accountMessagesLink">Messages</LinkText>
            <LinkText href={'/account/home'} className="govuk-!-margin-right-4" testId="accountCompaniesYouFollowLink">Companies you follow</LinkText>
          </Row>
        </Column>
        <Column width='one-third' className="alignRight">
          <Row>
            <SpanText className="govuk-!-margin-right-4 govuk-body-s" testId="accountEmailAddressText">{emailAddress}</SpanText>
          </Row>
        </Column>
      </Row>
      <Row><SectionBreak/></Row>
    </Column>
  )
}

export default withLang(AccountLinks)

AccountLinks.propTypes = {
  userDetails: PropTypes.object,
  lang: PropTypes.string.isRequired
}

AccountLinks.defaultProps = {
  userDetails: {}
}
