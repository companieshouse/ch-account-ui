import PropTypes from 'prop-types'
import React from 'react'
import InputField from '../general-ui/interaction/InputField'
import { errorsPropType } from '../../services/propTypes'

const StringAttributeInputCallback = ({ errors = [], element, customElementProps = {}, groupError = undefined }) => {
  const id = element.payload.input[0].name
  const label = customElementProps.prompt || element.getPrompt()
  const testId = element.getName() || 'unknownFieldName'
  const currentValue = element.getOutputValue('value')

  return (
    <InputField
      id={id}
      type="text"
      label={label}
      errors={errors}
      testId={testId}
      defaultValue={currentValue}
      groupError={groupError}
      maxLength={124}
      {...customElementProps}
    />
  )
}

export default StringAttributeInputCallback

StringAttributeInputCallback.propTypes = {
  customElementProps: PropTypes.object,
  element: PropTypes.object.isRequired,
  errors: errorsPropType,
  groupError: PropTypes.object
}

StringAttributeInputCallback.defaultProps = {
  customElementProps: {},
  errors: []
}
