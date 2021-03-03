import PropTypes from 'prop-types'
import React from 'react'
import FormGroup from '../general-ui/interaction/FormGroup'
import InputField from '../general-ui/interaction/InputField'

const ValidatedCreatePasswordCallback = ({ errors = [], element, customElementProps = {} }) => {
  const id = element.payload.input[0].name
  const label = element.getPrompt()
  const isEchoOn = element.getOutputValue('echoOn')

  return (
    <FormGroup errors={errors} groupIds={[id]}>
      <InputField id={id} type={isEchoOn === true ? 'text' : 'password'} autoComplete="current-password" label={label} errors={errors} testId="passwordInputField" required {...customElementProps} />
    </FormGroup>
  )
}

export default ValidatedCreatePasswordCallback

ValidatedCreatePasswordCallback.propTypes = {
  customElementProps: PropTypes.object,
  element: PropTypes.object.isRequired,
  errors: PropTypes.array
}

ValidatedCreatePasswordCallback.defaultProps = {
  customElementProps: {},
  errors: []
}
