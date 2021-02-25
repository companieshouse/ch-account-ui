import PropTypes from 'prop-types'
import React from 'react'
import FormGroup from '../general-ui/interaction/FormGroup'
import InputField from '../general-ui/interaction/InputField'
import { getCallbackElementData } from '../../services/forgerock'

const PasswordCallback = ({ errors = [], element }) => {
  const elementData = getCallbackElementData(element, (outputItem) => outputItem.name === 'prompt')

  if (!elementData) return null

  const id = elementData.input.name
  const label = elementData.output.value

  return (
    <FormGroup errors={errors} groupIds={[id]}>
      <InputField id={id} type="password" autoComplete="current-password" label={label} errors={errors} testId="passwordInputField" />
    </FormGroup>
  )
}

export default PasswordCallback

PasswordCallback.propTypes = {
  element: PropTypes.object.isRequired,
  errors: PropTypes.array
}

PasswordCallback.defaultProps = {
  errors: []
}
