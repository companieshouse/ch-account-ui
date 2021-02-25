import PropTypes from 'prop-types'
import React from 'react'
import FormGroup from '../general-ui/interaction/FormGroup'
import InputField from '../general-ui/interaction/InputField'
import { getCallbackElementData } from '../../services/forgerock'

const NameCallback = ({ errors = [], element }) => {
  const elementData = getCallbackElementData(element, (outputItem) => outputItem.name === 'prompt')

  if (!elementData) return null

  const id = elementData.input.name
  const label = elementData.output.value

  return (
    <FormGroup errors={errors} groupIds={[id]}>
      <InputField id={id} type="text" autoComplete="email" label={label} errors={errors} testId="usernameInputField" />
    </FormGroup>
  )
}

export default NameCallback

NameCallback.propTypes = {
  element: PropTypes.object.isRequired,
  errors: PropTypes.array
}

NameCallback.defaultProps = {
  errors: []
}
