import React from 'react'

const Details = ({ className = '', children, label = '' }) => {
  const classes = [className]

  const finalClassName = classes.join(' ').trim()

  return (
    <details className={`govuk-details ${finalClassName}`} data-module="govuk-details">
      <summary className="govuk-details__summary">
        <span className="govuk-details__summary-text">
          {label}
        </span>
      </summary>
      <div className="govuk-details__text">
        {children}
      </div>
    </details>
  )
}

export default Details
