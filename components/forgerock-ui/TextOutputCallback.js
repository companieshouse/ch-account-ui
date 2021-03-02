import PropTypes from 'prop-types'
import React from 'react'
import BodyText from '../general-ui/typeography/BodyText'

const TextOutputCallback = ({ element, customElementProps = {} }) => {
  const currentValue = element.getMessage()

  return (
    <BodyText {...customElementProps}>{currentValue}</BodyText>
  )
}

export default TextOutputCallback

TextOutputCallback.propTypes = {
  customElementProps: PropTypes.object,
  element: PropTypes.object.isRequired
}

TextOutputCallback.defaultProps = {
  customElementProps: {}
}
