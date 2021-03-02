import PropTypes from 'prop-types'
import React from 'react'
import { getCallbackElementData } from '../../services/forgerock'
import BodyText from '../general-ui/typeography/BodyText'

const TextOutputCallback = ({ element, customElementProps = {} }) => {
  const elementData = getCallbackElementData(element)

  if (!elementData) return null

  const currentValue = elementData.value

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
