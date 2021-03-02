import PropTypes from 'prop-types'
import React from 'react'

const Tag = (props) => {
  const { children, colour = 'blue', renderFeatures } = props
  return (
    <strong className={`govuk-tag govuk-tag--${colour}`}>{children}{renderFeatures(props)}</strong>
  )
}

export default Tag

Tag.propTypes = {
  children: PropTypes.node,
  colour: PropTypes.string,
  renderFeatures: PropTypes.func
}

Tag.defaultProps = {
  colour: 'blue',
  renderFeatures: () => { return null }
}
