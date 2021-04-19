import PropTypes from 'prop-types'
import React from 'react'
import InputField from '../general-ui/interaction/InputField'
import { errorsPropType } from '../../services/propTypes'

const ValidatedCreatePasswordCallback = ({ errors = [], element, customElementProps = {}, groupError = undefined }) => {
  const id = element.payload.input[0].name
  const label = customElementProps.prompt || element.getPrompt()
  const isEchoOn = element.getOutputValue('echoOn')

  return (
    <InputField
      id={id}
      type={isEchoOn === true ? 'text' : 'password'}
      autoComplete="current-password"
      label={label}
      errors={errors}
      testId="passwordInputField"
      groupError={groupError}
      {...customElementProps}
    />
  )
}

export default ValidatedCreatePasswordCallback

ValidatedCreatePasswordCallback.propTypes = {
  customElementProps: PropTypes.object,
  element: PropTypes.object.isRequired,
  errors: errorsPropType
}

ValidatedCreatePasswordCallback.defaultProps = {
  customElementProps: {},
  errors: []
}
