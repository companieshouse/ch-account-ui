import PropTypes from 'prop-types'
import React from 'react'
import FormGroup from '../general-ui/interaction/FormGroup'
import InputField from '../general-ui/interaction/InputField'
import { errorsPropType } from '../../services/propTypes'

const NameCallback = ({ errors = [], element, customElementProps = {} }) => {
  const id = element.payload.input[0].name
  const label = customElementProps.prompt || element.getPrompt()

  return (
    <FormGroup errors={errors} groupIds={[id]}>
      <InputField id={id} type="text" autoComplete="email" label={label} errors={errors} testId="usernameInputField" {...customElementProps} />
    </FormGroup>
  )
}

export default NameCallback

NameCallback.propTypes = {
  customElementProps: PropTypes.object,
  element: PropTypes.object.isRequired,
  errors: errorsPropType
}

NameCallback.defaultProps = {
  customElementProps: {},
  errors: []
}
