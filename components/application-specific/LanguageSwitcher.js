import PropTypes from 'prop-types'
import React from 'react'
import WithLang from '../../services/lang/WithLang'

const LanguageSwitcher = ({ lang, setLang }) => {
  return (
    <nav className="govuk-language-select" aria-label="Language switcher">
      <ul className="govuk-language-select__list">
        {lang === 'en' && <li className="govuk-language-select__list-item">
          <span aria-current="true">English</span>
        </li>}
        {lang !== 'en' && <li className="govuk-language-select__list-item">
          <a href="#lang-en" hrefLang="en" lang="en" rel="alternate" className="govuk-link"
             data-journey-click="link - click:lang-select:English" onClick={() => setLang('en')}>
            <span className="govuk-visually-hidden">Change the language to English</span>
            <span aria-hidden="true">English</span>
          </a>
        </li>}
        {lang === 'cy' && <li className="govuk-language-select__list-item">
          <span aria-current="true">Cymraeg</span>
        </li>}
        {lang !== 'cy' && <li className="govuk-language-select__list-item">
          <a href="#lang-cy" hrefLang="cy" lang="cy" rel="alternate" className="govuk-link"
             data-journey-click="link - click:lang-select:Cymraeg" onClick={() => setLang('cy')}>
            <span className="govuk-visually-hidden">Newid yr iaith ir Gymraeg</span>
            <span aria-hidden="true">Cymraeg</span>
          </a>
        </li>}
      </ul>
    </nav>
  )
}

export default WithLang(LanguageSwitcher, { withSetter: true })

LanguageSwitcher.propTypes = {
  lang: PropTypes.string.isRequired,
  setLang: PropTypes.func.isRequired
}
