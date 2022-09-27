
import PropTypes from 'prop-types'
import React from 'react'
import Row from '../general-ui/layout/Row'
import Column from '../general-ui/layout/Column'
import SectionBreak from '../general-ui/typeography/SectionBreak'
import { translate } from '../../services/translate'
import WithLang from '../../services/lang/WithLang'
import { CH_EWF_AUTHENTICATED_ENTRY_URL, CH_EWF_RECENT_FILINGS_URL } from '../../services/environment'
import { useMatomo } from '@datapunt/matomo-tracker-react'

const AccountLinkItem = ({ current, text, href, messages }) => {
  const { pushInstruction } = useMatomo()
  return (<a href={href} onClick={() => pushInstruction('trackEvent', ['Home - Dashboard', text])} className={`account-menu-link govuk-link govuk-link--no-visited-state${current ? ' account-menu__item--current' : ''}`}>{text} {messages !== undefined && <span className='badge'>{messages}</span>}</a>)
}

const AccountLinks = (props) => {
  const { lang, currentItem, messages } = props

  return (
    <>
      <Row>
        <Column width='full'>
          <div className="account-menu">
            <AccountLinkItem current={currentItem === 1} href="/account/home" text={translate(lang, 'ACCOUNT_LINKS_HOME')}/>
            <AccountLinkItem current={currentItem === 2} href="/account/your-companies" text={translate(lang, 'ACCOUNT_LINKS_YOUR_COMPANIES')}/>
            <AccountLinkItem current={currentItem === 3} href={CH_EWF_RECENT_FILINGS_URL} text={translate(lang, 'ACCOUNT_LINKS_YOUR_FILINGS')}/>
            <AccountLinkItem current={currentItem === 4} href={CH_EWF_AUTHENTICATED_ENTRY_URL} text={translate(lang, 'ACCOUNT_LINKS_FILE_FOR_A_COMPANY')}/>
            <AccountLinkItem current={currentItem === 5} href="/account/notifications" text={translate(lang, 'ACCOUNT_LINKS_MESSAGES')} messages={messages}/>
            <AccountLinkItem current={currentItem === 6} href="/account/manage" text={translate(lang, 'ACCOUNT_LINKS_MANAGE_ACCOUNT')}/>
          </div>
          </Column>
      </Row>
      <SectionBreak/>
    </>
  )
}

export default WithLang(AccountLinks)

AccountLinks.propTypes = {
  currentItem: PropTypes.number,
  profile: PropTypes.object,
  lang: PropTypes.string.isRequired
}

AccountLinkItem.propTypes = {
  current: PropTypes.bool,
  text: PropTypes.string,
  href: PropTypes.string
}

AccountLinks.defaultProps = {
  profile: {}
}
