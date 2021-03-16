import PropTypes from 'prop-types'
import React from 'react'

const Row = (props) => {
  const { children, className = '', renderFeatures } = props
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  return (
    <div className={`govuk-grid-row ${finalClassName}`}>
      {children}
      {renderFeatures(props)}
    </div>
  )
}

export default Row

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  renderFeatures: PropTypes.func
}

Row.defaultProps = {
  className: '',
  renderFeatures: () => { return null }
}
