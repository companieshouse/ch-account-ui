import PropTypes from 'prop-types'
import React from 'react'

const Tag = ({ children, colour = 'blue' }) => {
  return (
    <strong className={`govuk-tag govuk-tag--${colour}`}>{children}</strong>
  )
}

export default Tag

Tag.propTypes = {
  children: PropTypes.node,
  colour: PropTypes.string
}

Tag.defaultProps = {
  colour: 'blue'
}
