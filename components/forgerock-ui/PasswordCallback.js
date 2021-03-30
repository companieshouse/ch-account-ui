import PropTypes from 'prop-types'
import React from 'react'
import FormGroup from '../general-ui/interaction/FormGroup'
import InputField from '../general-ui/interaction/InputField'
import { errorsPropType } from '../../services/propTypes'

const PasswordCallback = ({ errors = [], element, customElementProps = {} }) => {
  const id = element.payload.input[0].name
  const label = customElementProps.prompt || element.getPrompt()

  return (
    <FormGroup errors={errors} groupIds={[id]}>
      <InputField id={id} type="password" autoComplete="current-password" label={label} errors={errors} testId="passwordInputField" {...customElementProps} />
    </FormGroup>
  )
}

export default PasswordCallback

PasswordCallback.propTypes = {
  customElementProps: PropTypes.object,
  element: PropTypes.object.isRequired,
  errors: errorsPropType
}

PasswordCallback.defaultProps = {
  customElementProps: {},
  errors: []
}
