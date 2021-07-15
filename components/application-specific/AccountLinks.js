import PropTypes from 'prop-types'
import React from 'react'
import Row from '../general-ui/layout/Row'
import LinkText from '../general-ui/interaction/LinkText'
import Column from '../general-ui/layout/Column'
import SectionBreak from '../general-ui/typeography/SectionBreak'
import SpanText from '../general-ui/typeography/SpanText'
import { translate } from '../../services/translate'
import WithLang from '../../services/lang/WithLang'
import useFRAuth from '../../services/useFRAuth'
import { CH_EWF_AUTHENTICATED_ENTRY_URL } from '../../services/environment'

const AccountLinks = (props) => {
  const { profile } = useFRAuth()
  const { lang, currentItem } = props
  const email = profile?.email

  const AccountLinkItem = ({ current, text, href }) => <a href={href} className={`account-menu-link govuk-link govuk-link--no-visited-state${current ? ' account-menu__item--current' : ''}`}>{text}</a>

  return (
    <>
      <Row>
        <Column width='full'>
          <div className="account-menu">
            <AccountLinkItem current={currentItem === 1} href="/account/home" text={translate(lang, 'ACCOUNT_LINKS_HOME')}/>
            <AccountLinkItem current={currentItem === 2} href="/account/your-companies" text={translate(lang, 'ACCOUNT_LINKS_YOUR_COMPANIES')}/>
            <AccountLinkItem current={currentItem === 3} href={CH_EWF_AUTHENTICATED_ENTRY_URL} text={translate(lang, 'ACCOUNT_LINKS_FILE_FOR_A_COMPANY')}/>
            <AccountLinkItem current={currentItem === 4} href="/account/notifications" text={translate(lang, 'ACCOUNT_LINKS_MESSAGES')}/>
            <AccountLinkItem current={currentItem === 5} href="/account/manage" text={translate(lang, 'ACCOUNT_LINKS_MANAGE_ACCOUNT')}/>
            {/* <LinkText href={'/account/home'} className="account-menu-link govuk-link--no-visited-state" testId="accountHomeLink">{translate(lang, 'ACCOUNT_LINKS_HOME')}</LinkText> */}
            {/* <LinkText href={'/account/your-companies'} className="account-menu-link account-menu__item--current govuk-link--no-visited-state" testId="accountYourCompaniesLink">{translate(lang, 'ACCOUNT_LINKS_YOUR_COMPANIES')}</LinkText> */}
            {/* <LinkText href={'/account/your-filings'} className="govuk-!-margin-right-4" testId="accountYourFilingsLink">Your filings</LinkText> */}
            {/* <LinkText href={'/account/companies-you-follow'} className="govuk-!-margin-right-4" testId="accountCompaniesYouFollowLink">Companies you follow</LinkText> */}
            {/* <LinkText href={CH_EWF_AUTHENTICATED_ENTRY_URL} className="account-menu-link govuk-link--no-visited-state" testId="accountManageAccountLink">{translate(lang, 'ACCOUNT_LINKS_FILE_FOR_A_COMPANY')}</LinkText> */}
            {/* <LinkText href={'/account/notifications'} className="account-menu-link govuk-link--no-visited-state" testId="accountManageAccountLink">{translate(lang, 'ACCOUNT_LINKS_MESSAGES')}</LinkText> */}
            {/* <LinkText href={'/account/manage'} className="account-menu-link govuk-link--no-visited-state" testId="accountManageAccountLink">{translate(lang, 'ACCOUNT_LINKS_MANAGE_ACCOUNT')}</LinkText> */}
          </div>
          </Column>
      </Row>
      <SectionBreak/>
    </>
  )
}

export default WithLang(AccountLinks)

AccountLinks.propTypes = {
  profile: PropTypes.object,
  lang: PropTypes.string.isRequired
}

AccountLinks.defaultProps = {
  profile: {}
}
