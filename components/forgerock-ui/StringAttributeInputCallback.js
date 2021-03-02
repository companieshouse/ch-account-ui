import PropTypes from 'prop-types'
import React from 'react'
import FormGroup from '../general-ui/interaction/FormGroup'
import InputField from '../general-ui/interaction/InputField'
import { getCallbackElementData } from '../../services/forgerock'

const StringAttributeInputCallback = ({ errors = [], element, customElementProps = {} }) => {
  const elementData = getCallbackElementData(element)

  if (!elementData) return null

  const id = elementData.fieldId
  const label = elementData.label
  const testId = elementData.testId
  const currentValue = elementData.value
  const required = elementData.required

  return (
    <FormGroup errors={errors} groupIds={[id]}>
      <InputField id={id} type="text" label={label} errors={errors} testId={testId} defaultValue={currentValue} required={required} {...customElementProps} />
    </FormGroup>
  )
}

export default StringAttributeInputCallback

StringAttributeInputCallback.propTypes = {
  customElementProps: PropTypes.object,
  element: PropTypes.object.isRequired,
  errors: PropTypes.array
}

StringAttributeInputCallback.defaultProps = {
  customElementProps: {},
  errors: []
}
