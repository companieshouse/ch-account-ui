import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'

const Details = ({ className = '', children, label = '' }) => {
  const classes = [className]
  const detailsRef = useRef()

  const finalClassName = classes.join(' ').trim()

  useEffect(() => {
    const Details = window.GOVUKFrontend.Details
    new Details(detailsRef.current).init()
  }, [])

  return (
    <details ref={detailsRef} className={`govuk-details ${finalClassName}`} data-module="govuk-details">
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

Details.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  label: PropTypes.string
}

Details.defaultProps = {
  className: '',
  label: ''
}
