import PropTypes from 'prop-types'
import React from 'react'

const HiddenValueCallback = ({ element, customElementProps }) => {
  const outputId = element.getOutputValue('id')
  const outputValue = element.getOutputValue('value')
  const inputName = element.payload.input[0].name

  if (outputId === 'pagePropsJSON') return null

  return (
    <input type="hidden" id={outputId} name={inputName} value={outputId} data-output-value={outputValue} {...customElementProps} />
  )
}

export default HiddenValueCallback

HiddenValueCallback.propTypes = {
  customElementProps: PropTypes.object,
  element: PropTypes.object.isRequired
}

HiddenValueCallback.defaultProps = {
  customElementProps: {}
}
