import PropTypes from 'prop-types'
import React from 'react'
import InputField from '../general-ui/interaction/InputField'
import { errorsPropType } from '../../services/propTypes'

const NameCallback = ({ errors, element, customElementProps, groupError }) => {
  const id = element.payload.input[0].name
  const label = customElementProps.prompt || element.getPrompt()

  return (
    <InputField
      id={id}
      type="text"
      autoComplete="email"
      label={label}
      errors={errors}
      testId="usernameInputField"
      groupError={groupError}
      {...customElementProps}
    />
  )
}

export default NameCallback

NameCallback.propTypes = {
  customElementProps: PropTypes.object,
  element: PropTypes.object.isRequired,
  errors: errorsPropType,
  groupError: PropTypes.string
}

NameCallback.defaultProps = {
  customElementProps: {},
  errors: []
}
