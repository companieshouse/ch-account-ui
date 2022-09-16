import React from 'react'
import { translate } from '../../../services/translate'
import { CH_FEEDBACK_URL } from '../../../services/environment'
import LinkText from './LinkText'
import WithLang from '../../../services/lang/WithLang'

const PhaseBanner = (props) => {
  const { phase, testId, lang } = props

  return (
    <div className="govuk-phase-banner">
        <p className="govuk-phase-banner__content" testId={testId}>
          <strong className="govuk-tag govuk-phase-banner__content__tag">{phase}</strong>
          <span className="govuk-phase-banner__text">
            { translate(lang, 'PHASE_BANNER_CONTENT_1') } <LinkText className="govuk-link" testId={testId} href={ CH_FEEDBACK_URL } matomo={['trackEvent', translate(lang, 'PHASE_BANNER_LINK'), translate(lang, 'PHASE_BANNER_LINK')]}>{translate(lang, 'PHASE_BANNER_LINK')}</LinkText> {translate(lang, 'PHASE_BANNER_CONTENT_2')}
          </span>
        </p>
    </div>
  )
}

export default WithLang(PhaseBanner)
