import PropTypes from 'prop-types'
import React from 'react'

const InsetText = (props) => {
  const { children, className = '', renderFeatures } = props
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  return (
    <div className={`govuk-inset-text ${finalClassName}`}>
      {children}
      {renderFeatures(props)}
    </div>
  )
}

export default InsetText

InsetText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  renderFeatures: PropTypes.func
}

InsetText.defaultProps = {
  className: '',
  renderFeatures: () => { return null }
}
