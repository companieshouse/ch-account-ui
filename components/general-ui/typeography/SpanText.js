import PropTypes from 'prop-types'
import React from 'react'

const SpanText = ({ label = '', children, hint = false, className = '', weight = 'regular' }) => {
  const classes = [className]

  if (hint === true) classes.push('govuk-hint')
  if (weight === 'bold') classes.push('govuk-!-font-weight-bold')

  const finalClassName = classes.join(' ').trim()

  return (
    <span className={`govuk-body ${finalClassName}`}>{label}{children}</span>
  )
}

export default SpanText

SpanText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hint: PropTypes.bool,
  label: PropTypes.string,
  weight: PropTypes.string
}

SpanText.defaultProps = {
  className: '',
  hint: false,
  label: '',
  weight: 'regular'
}
