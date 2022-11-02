import PropTypes from 'prop-types'
import React from 'react'

const SpanText = (props) => {
  const { label = '', children, hint = false, className = '', weight = 'regular', renderFeatures } = props
  const classes = [className]

  console.log('SPAN TEXT: ', props)

  if (hint === true) classes.push('govuk-hint')
  if (weight === 'bold') classes.push('govuk-!-font-weight-bold')

  const finalClassName = classes.join(' ').trim()

  return (
    <span className={`govuk-body ${finalClassName}`}>{label}{children}{renderFeatures(props)}</span>
  )
}

export default SpanText

SpanText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hint: PropTypes.bool,
  label: PropTypes.string,
  weight: PropTypes.string,
  renderFeatures: PropTypes.func
}

SpanText.defaultProps = {
  className: '',
  hint: false,
  label: '',
  weight: 'regular',
  renderFeatures: () => { return null }
}
