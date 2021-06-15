import React from 'react'
import PropTypes from 'prop-types'
import BodyText from './BodyText'

const ErrorPageSummary = ({ errors, children }) => {
  const errorContent = errors.map((error, index) => <BodyText key={index}>{error.label}</BodyText>)

  return <div className="errorPageSummary">
    {errorContent}
    {children}
    </div>
}

ErrorPageSummary.propTypes = {
  children: PropTypes.node,
  errors: PropTypes.array
}

export default ErrorPageSummary
