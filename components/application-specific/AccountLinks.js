import PropTypes from 'prop-types'
import React from 'react'
import Row from '../general-ui/layout/Row'
import LinkText from '../general-ui/interaction/LinkText'
import Column from '../general-ui/layout/Column'
import SectionBreak from '../general-ui/typeography/SectionBreak'
import SpanText from '../general-ui/typeography/SpanText'
import { translate } from '../../services/translate'
import WithLang from '../../services/lang/WithLang'
import WithProfile from '../providers/WithProfile'

const AccountLinks = (props) => {
  const { lang, profile = {} } = props
  const { email } = profile

  return (
    <>
      <Row>
        <Column width='two-thirds'>
            <LinkText href={'/account/home'} className="govuk-!-margin-right-4" testId="accountHomeLink">Home</LinkText>
            <LinkText href={'/account/your-companies'} className="govuk-!-margin-right-4" testId="accountYourCompaniesLink">Your companies</LinkText>
            <LinkText href={'/account/your-filings'} className="govuk-!-margin-right-4" testId="accountYourFilingsLink">Your filings</LinkText>
            <LinkText href={'/account/companies-you-follow'} className="govuk-!-margin-right-4" testId="accountCompaniesYouFollowLink">Companies you follow</LinkText>
            <LinkText href={'/account/manage'} className="govuk-!-margin-right-4" testId="accountManageAccountLink">{translate(lang, 'ACCOUNT_LINKS_MANAGE_ACCOUNT')}</LinkText>
        </Column>
        <Column width='one-third' className="alignRight">
            <SpanText className="govuk-body-s" testId="accountEmailAddressText">{email}</SpanText>
        </Column>
      </Row>
      <SectionBreak/>
    </>
  )
}

export default WithProfile(WithLang(AccountLinks))

AccountLinks.propTypes = {
  profile: PropTypes.object,
  lang: PropTypes.string.isRequired
}

AccountLinks.defaultProps = {
  profile: {}
}
