import PropTypes from 'prop-types'
import React from 'react'
import FormGroup from '../general-ui/interaction/FormGroup'
import InputField from '../general-ui/interaction/InputField'
import { getCallbackElementData } from '../../services/forgerock'

const PasswordCallback = ({ errors = [], element, customElementProps = {} }) => {
  const elementData = getCallbackElementData(element)

  if (!elementData) return null

  const id = elementData.fieldId
  const label = elementData.label

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
  errors: PropTypes.array
}

PasswordCallback.defaultProps = {
  customElementProps: {},
  errors: []
}
