import PropTypes from 'prop-types'
import React from 'react'

const WarningText = (props) => {
  const { children } = props

  return (
    <div className="govuk-warning-text">
      <span className="govuk-warning-text__icon" aria-hidden="true">!</span>
      <strong className="govuk-warning-text__text">
        <span className="govuk-warning-text__assistive">Warning</span>
        {children}
      </strong>
    </div>
  )
}

export default WarningText

WarningText.propTypes = {
  children: PropTypes.node
}
