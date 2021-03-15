import React from 'react'

const CookieBanners = (props) => {
  const {
    onStart = () => {},
    onStop = () => {},
    onAcceptCookies = () => {},
    onRejectCookies = () => {},
    onHideCookieBanners = () => {}
  } = props

  const start = () => {
    CookieConsent.start(onStart, onStop)
  }

  const acceptCookies = () => {
    // Tell the consent library the user accepted cookies
    // eslint-disable-next-line no-undef
    CookieConsent.acceptCookies(onAcceptCookies, 'full-journey')

    // Start analytics?
  }

  const rejectCookies = () => {
    // eslint-disable-next-line no-undef
    CookieConsent.rejectCookies(onRejectCookies, 'full-journey')
  }

  const hideCookieBanners = () => {
    // eslint-disable-next-line no-undef
    CookieConsent.hideCookieBanners()
    onHideCookieBanners()
  }

  React.useEffect(() => {
    start()
  }, [])

  return (
    <div id="cookie-banner" hidden>
      <div id="accept-or-reject-message" hidden>
        <div className="govuk-cookie-banner " role="region" aria-label="Cookies on Companies House services">
          <div className="govuk-cookie-banner__message govuk-width-container">

            <div className="govuk-grid-row">
              <div className="govuk-grid-column-two-thirds">
                <h2 className="govuk-cookie-banner__heading govuk-heading-m">Cookies on Companies House services</h2>

                <div className="govuk-cookie-banner__content">
                  <p>We use some essential cookies to make this service work.</p>
                  <p>We’d like to set additional cookies so we can remember your settings, understand how people use the
                    service and make improvements.</p>
                </div>
              </div>
            </div>

            <div className="govuk-button-group">
              <button value="accept" type="button" name="cookies" className="govuk-button" data-module="govuk-button" onClick={acceptCookies}>
                Accept additional cookies
              </button>
              <button value="reject" type="button" name="cookies" className="govuk-button" data-module="govuk-button" onClick={rejectCookies}>
                Reject additional cookies
              </button>
              <a className="govuk-link" href="https://find-and-update.company-information.service.gov.uk/help/cookies">View cookies</a>
            </div>
          </div>
        </div>
      </div>
      <div id="accepted-cookies-message" hidden>
        <div className="govuk-cookie-banner " role="region" aria-label="Cookies on Companies House services">
          <div className="govuk-cookie-banner__message govuk-width-container">

            <div className="govuk-grid-row">
              <div className="govuk-grid-column-two-thirds">

                <div className="govuk-cookie-banner__content">
                  <p>You’ve accepted analytics cookies. You can <a className="govuk-link" href="https://find-and-update.company-information.service.gov.uk/help/cookies">change your cookie
                    settings</a> at any time.</p>
                </div>
              </div>
            </div>

            <div className="govuk-button-group">
              <button className="govuk-button" data-module="govuk-button" onClick={hideCookieBanners}>
                Hide this message
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

                <div className="govuk-cookie-banner__content">
                  <p>You’ve rejected analytics cookies. You can <a className="govuk-link" href="https://find-and-update.company-information.service.gov.uk/help/cookies">change your cookie
                    settings</a> at any time.</p>
                </div>
              </div>
            </div>

            <div className="govuk-button-group">
              <button className="govuk-button" data-module="govuk-button" onClick={hideCookieBanners}>
                Hide this message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieBanners
