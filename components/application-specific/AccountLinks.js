import PropTypes from 'prop-types'
import React from 'react'
import Row from '../general-ui/layout/Row'
import LinkText from '../general-ui/interaction/LinkText'
import Column from '../general-ui/layout/Column'
import SectionBreak from '../general-ui/typeography/SectionBreak'
import SpanText from '../general-ui/typeography/SpanText'
import { translate } from '../../services/translate'
import withLang from '../../services/lang/withLang'
import withProfile from '../../services/withProfile'

const AccountLinks = (props) => {
  const { lang, profile = {} } = props
  const { email } = profile

  return (
    <Column width='full'>
      <Row className="govuk-!-margin-top-4">
        <Column width='two-thirds'>
          <Row>
            <LinkText href={'/account/home'} className="govuk-!-margin-right-4" testId="accountHomeLink">Home</LinkText>
            <LinkText href={'/account/your-companies'} className="govuk-!-margin-right-4" testId="accountYourCompaniesLink">Your companies</LinkText>
            <LinkText href={'/account/your-filings'} className="govuk-!-margin-right-4" testId="accountYourFilingsLink">Your filings</LinkText>
            <LinkText href={'/account/companies-you-follow'} className="govuk-!-margin-right-4" testId="accountCompaniesYouFollowLink">Companies you follow</LinkText>
            <LinkText href={'/account/manage'} className="govuk-!-margin-right-4" testId="accountManageAccountLink">{translate(lang, 'ACCOUNT_LINKS_MANAGE_ACCOUNT')}</LinkText>
          </Row>
        </Column>
        <Column width='one-third' className="alignRight">
          <Row>
            <SpanText className="govuk-!-margin-right-4 govuk-body-s" testId="accountEmailAddressText">{email}</SpanText>
          </Row>
        </Column>
      </Row>
      <Row><SectionBreak/></Row>
    </Column>
  )
}

export default withProfile(withLang(AccountLinks))

AccountLinks.propTypes = {
  profile: PropTypes.object,
  lang: PropTypes.string.isRequired
}

AccountLinks.defaultProps = {
  profile: {}
}
