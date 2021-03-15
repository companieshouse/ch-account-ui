import React from 'react'

const NoScript = () => {
  return (
    <noscript>
      <div className="govuk-cookie-banner " role="region" aria-label="Cookies on Companies House">
        <div className="govuk-cookie-banner__message govuk-width-container">

          <div className="govuk-grid-row">
            <div className="govuk-grid-column-two-thirds">
              <h2 className="govuk-cookie-banner__heading govuk-heading-m">Cookies on Companies House</h2>

              <div className="govuk-cookie-banner__content">
                <p className="govuk-body">We use cookies to make this service work and collect analytics
                  information. To accept or reject cookies, turn on JavaScript in your browser settings or reload
                  this page.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </noscript>
  )
}

export default NoScript
