import PropTypes from 'prop-types'
import React from 'react'

const Details = (props) => {
  const { className = '', children, summary = '', renderFeatures } = props
  const classes = [className]

  const finalClassName = classes.join(' ').trim()

  return (
    <details className={`govuk-details ${finalClassName}`} data-module="govuk-details">
      <summary className="govuk-details__summary">
        <span className="govuk-details__summary-text">
          {summary}
        </span>
      </summary>
      <div className="govuk-details__text">
        {children}
        {renderFeatures(props)}
      </div>
    </details>
  )
}

export default Details

Details.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  summary: PropTypes.string,
  renderFeatures: PropTypes.func
}

Details.defaultProps = {
  className: '',
  summary: '',
  renderFeatures: () => { return null }
}
