import React from 'react'

const PhaseBanner = (props) => {
  const { phase, children, target, href, testId, matomo } = props

  console.log(matomo)
  return (
    <div className="govuk-phase-banner">
        <p className="govuk-phase-banner__content" testId={testId}>
          <strong className="govuk-tag govuk-phase-banner__content__tag">{phase}</strong>
          <span className="govuk-phase-banner__text">
              {children}
          This is a new service – your <a className="govuk-link" target={target} href={href}>feedback</a> will help us to improve it.
          </span>
        </p>
    </div>
  )
}

export default PhaseBanner
