import PropTypes from 'prop-types'
import React from 'react'

const HiddenValueCallback = ({ element, customElementProps = {} }) => {
  const id = element.getOutputValue('id')

  if (id === 'pagePropsJSON') return null

  const currentValue = element.getOutputValue('value')

  return (
    <input type="hidden" name={id} value={currentValue} {...customElementProps} />
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
