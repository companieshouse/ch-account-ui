import PropTypes from 'prop-types'
import React from 'react'

const Fragment = (props) => {
  const { children, renderFeatures } = props

  return (
    <React.Fragment>
      {children}
      {renderFeatures(props)}
    </React.Fragment>
  )
}

export default Fragment

Fragment.propTypes = {
  children: PropTypes.node,
  renderFeatures: PropTypes.func
}

Fragment.defaultProps = {
  renderFeatures: () => { return null }
}
