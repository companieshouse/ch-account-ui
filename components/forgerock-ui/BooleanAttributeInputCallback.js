import PropTypes from 'prop-types'
import React from 'react'
import CheckboxGroup from '../general-ui/interaction/CheckboxGroup'

const BooleanAttributeInputCallback = ({ errors, element, customElementProps, groupError }) => {
  const { label, ...rest } = customElementProps
  const id = element.payload.input[0].name
  const inputLabel = customElementProps.label || element.getPrompt()
  const currentValue = element.getOutputValue('value')

  return (
    <CheckboxGroup
      id={id}
      errors={errors}
      options={[{
        label: inputLabel,
        value: !currentValue,
        checked: false
      }]}
      groupError={groupError}
      {...rest}
    />
  )
}

export default BooleanAttributeInputCallback

BooleanAttributeInputCallback.propTypes = {
  customElementProps: PropTypes.object,
  element: PropTypes.object.isRequired,
  groupError: PropTypes.object
}

BooleanAttributeInputCallback.defaultProps = {
  customElementProps: {},
  groupError: undefined
}
