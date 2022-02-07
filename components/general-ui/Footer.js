import React from 'react'
import PropTypes from 'prop-types'
import WithLang from '../../services/lang/WithLang'
import { translate } from '../../services/translate'
import { CH_BASE_URL, CH_BASE_EWF_URL } from '../../services/environment'

const Footer = ({ lang }) => {
  return (
    <footer className="govuk-footer " role="contentinfo">
      <div className="govuk-width-container ">
        <div className="govuk-footer__meta">
          <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
            <h2 className="govuk-visually-hidden">{translate(lang, 'FOOTER_ARIA_HEADER')}</h2>
            <ul className="govuk-footer__inline-list">
              <li className="govuk-footer__inline-list-item">
                <a className="govuk-footer__link"
                   href={`http://resources.${CH_BASE_URL}/serviceInformation.shtml`}>
                  {translate(lang, 'FOOTER_POLICIES')}
                </a>
              </li>
              <li className="govuk-footer__inline-list-item">
                <a className="govuk-footer__link" href={`${CH_BASE_EWF_URL}/cookies`}>
                  {translate(lang, 'FOOTER_COOKIES')}
                </a>
              </li>
              <li className="govuk-footer__inline-list-item">
                <a className="govuk-footer__link" href={`https://beta.${CH_BASE_URL}/help/contact-us`}>
                  {translate(lang, 'FOOTER_CONTACT_US')}
                </a>
              </li>
              <li className="govuk-footer__inline-list-item">
                <a className="govuk-footer__link" href={`${CH_BASE_EWF_URL}/sframe?name=accessibilityStatement&lang=${lang}`}>
                  {translate(lang, 'FOOTER_ACCESSIBILITY')}
                </a>
              </li>
              <li className="govuk-footer__inline-list-item">
                <a className="govuk-footer__link" href={`https://developer.${CH_BASE_URL}/api/docs/`}>
                  {translate(lang, 'FOOTER_DEVELOPERS')}
                </a>
              </li>
            </ul>
            <svg aria-hidden="true" focusable="false" className="govuk-footer__licence-logo"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 483.2 195.7" height="17" width="41">
              <path fill="currentColor" d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145"></path>
            </svg>
            <span className="govuk-footer__licence-description">
          {translate(lang, 'FOOTER_LICENCE_START')}
          <a className="govuk-footer__link"
             href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">{translate(lang, 'FOOTER_LICENCE_LINK')}</a>{translate(lang, 'FOOTER_LICENCE_END')}
        </span>
          </div>
          <div className="govuk-footer__meta-item">
            <a className="govuk-footer__link govuk-footer__copyright-logo"
               href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/">© {translate(lang, 'FOOTER_LICENCE_COPYRIGHT')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  lang: PropTypes.string
}

export default WithLang(Footer)
