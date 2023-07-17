
/* global CookieConsent */
import PropTypes from 'prop-types'
import React from 'react'
import WithLang from '../../../services/lang/WithLang'
import { translate } from '../../../services/translate'

const CookieBanners = (props) => {
  const {
    onStart = () => {},
    onStop = () => {},
    onAcceptCookies = () => {},
    onRejectCookies = () => {},
    onHideCookieBanners = () => {},
    lang
  } = props

  const acceptCookies = () => {
    // Tell the consent library the user accepted cookies
    CookieConsent.acceptCookies(onAcceptCookies, 'full-journey')
  }

  const rejectCookies = () => {
    CookieConsent.rejectCookies(onRejectCookies, 'full-journey')
  }

  const hideCookieBanners = () => {
    CookieConsent.hideCookieBanners()
    onHideCookieBanners()
  }

  const cookieConsentAvailable = typeof CookieConsent !== 'undefined'

  React.useEffect(() => {
    const start = () => {
      CookieConsent.start(onStart, onStop)
    }
    if (!cookieConsentAvailable) return
    start()
  }, [onStart, onStop, cookieConsentAvailable, lang])

  return (
    <div id="cookie-banner" hidden>
      <div id="accept-or-reject-message" hidden>
        <div className="govuk-cookie-banner " role="region" aria-label="Cookies on Companies House services">
          <div className="govuk-cookie-banner__message govuk-width-container">

            <div className="govuk-grid-row">
              <div className="govuk-grid-column-two-thirds">
                <h2 className="govuk-cookie-banner__heading govuk-heading-m">{translate(lang, 'COOKIE_BANNER_HEADING')}</h2>

                <div className="govuk-cookie-banner__content govuk-body">
                  <p>{translate(lang, 'COOKIE_BANNER_CONTENT')}</p>
                  <p>{translate(lang, 'COOKIE_BANNER_CONTENT_2')}</p>
                </div>
              </div>
            </div>

            <div className="govuk-button-group">
              <button value="accept" type="button" name="cookies" className="govuk-button" data-module="govuk-button" onClick={acceptCookies}>
              {translate(lang, 'COOKIE_BANNER_BUTTON_ACCEPT')}
              </button>
              <button value="reject" type="button" name="cookies" className="govuk-button" data-module="govuk-button" onClick={rejectCookies}>
              {translate(lang, 'COOKIE_BANNER_BUTTON_REJECT')}
              </button>
              <a className="govuk-link" href="https://ewf.companieshouse.gov.uk/cookies">{translate(lang, 'COOKIE_BANNER_BUTTON_VIEW')}</a>
            </div>
          </div>
        </div>
      </div>
      <div id="accepted-cookies-message" hidden>
        <div className="govuk-cookie-banner " role="region" aria-label="Cookies on Companies House services">
          <div className="govuk-cookie-banner__message govuk-width-container">

            <div className="govuk-grid-row">
              <div className="govuk-grid-column-two-thirds">

                <div className="govuk-cookie-banner__content govuk-body">
                  <p>{translate(lang, 'COOKIE_BANNER_CONTENT_ACCEPT')}<a className="govuk-link" href="https://ewf.companieshouse.gov.uk/cookies">{translate(lang, 'COOKIE_BANNER_CONTENT_ACCEPT_LINK')}</a>{translate(lang, 'COOKIE_BANNER_CONTENT_ACCEPT_2')}</p>
                </div>
              </div>
            </div>

            <div className="govuk-button-group">
              <button className="govuk-button" data-module="govuk-button" onClick={hideCookieBanners}>
              {translate(lang, 'COOKIE_BANNER_BUTTON_HIDE')}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="rejected-cookies-message" hidden>
        <div className="govuk-cookie-banner " role="region" aria-label="Cookies on Companies House services">
          <div className="govuk-cookie-banner__message govuk-width-container">

            <div className="govuk-grid-row">
              <div className="govuk-grid-column-two-thirds">

                <div className="govuk-cookie-banner__content govuk-body">
                  <p>{translate(lang, 'COOKIE_BANNER_CONTENT_REJECT')}<a className="govuk-link" href="https://ewf.companieshouse.gov.uk/cookies">{translate(lang, 'COOKIE_BANNER_CONTENT_REJECT_LINK')}</a>{translate(lang, 'COOKIE_BANNER_CONTENT_REJECT_2')}</p>
                </div>
              </div>
            </div>

            <div className="govuk-button-group">
              <button className="govuk-button" data-module="govuk-button" onClick={hideCookieBanners}>
              {translate(lang, 'COOKIE_BANNER_BUTTON_HIDE')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WithLang(CookieBanners)

CookieBanners.propTypes = {
  onAcceptCookies: PropTypes.func,
  onHideCookieBanners: PropTypes.func,
  onRejectCookies: PropTypes.func,
  onStart: PropTypes.func,
  onStop: PropTypes.func
}

CookieBanners.defaultProps = {
  onAcceptCookies: () => {},
  onHideCookieBanners: () => {},
  onRejectCookies: () => {},
  onStart: () => {},
  onStop: () => {}
}
