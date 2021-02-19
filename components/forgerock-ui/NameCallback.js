import React from 'react'
import FormGroup from '../general-ui/interaction/FormGroup'
import InputField from '../general-ui/interaction/InputField'
import { getCallbackElementData } from '../../services/forgerock'
import Button from '../general-ui/interaction/Button'

const NameCallback = ({ errors, uiElement }) => {
  const elementData = getCallbackElementData(uiElement, (outputItem) => outputItem.name === 'prompt')

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
