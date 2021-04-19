import PropTypes from 'prop-types'
import React from 'react'

const Caption = (props) => {
  const { children, className = '', size = 'xl', renderFeatures, style } = props
  const classes = [className]

  if (size === 'xl') classes.push('govuk-caption-xl')
  if (size === 'l') classes.push('govuk-caption-l')
  if (size === 'm') classes.push('govuk-caption-m')

  const finalClassName = classes.join(' ').trim()

  return (
    <span className={`${finalClassName}`} style={style}>
      {children}
      {renderFeatures(props)}
    </span>
  )
}

export default Caption

Caption.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.string,
  renderFeatures: PropTypes.func,
  style: PropTypes.object
}

Caption.defaultProps = {
  className: '',
  size: 'xl',
  renderFeatures: () => { return null }
}
