import PropTypes from 'prop-types'
import React from 'react'

const WidthContainer = (props) => {
  const { children, className = '', renderFeatures, style } = props
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  return (
    <div className={`govuk-width-container ${finalClassName}`} style={style}>
      {children}
      {renderFeatures(props)}
    </div>
  )
}

export default WidthContainer

WidthContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  renderFeatures: PropTypes.func,
  style: PropTypes.object
}

WidthContainer.defaultProps = {
  className: '',
  renderFeatures: () => { return null }
}
