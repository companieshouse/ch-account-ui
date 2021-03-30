import PropTypes from 'prop-types'
import React from 'react'
import FormGroup from '../general-ui/interaction/FormGroup'
import InputField from '../general-ui/interaction/InputField'
import { errorsPropType } from '../../services/propTypes'
// import { getCallbackElementData } from '../../services/forgerock'

const StringAttributeInputCallback = ({ errors = [], element, customElementProps = {} }) => {
  const id = element.payload.input[0].name
  const label = customElementProps.prompt || element.getPrompt()
  const testId = element.getName() || 'unknownFieldName'
  const currentValue = element.getOutputValue('value')

  return (
    <FormGroup errors={errors} groupIds={[id]}>
      <InputField id={id} type="text" label={label} errors={errors} testId={testId} defaultValue={currentValue} {...customElementProps} />
    </FormGroup>
  )
}

export default StringAttributeInputCallback

StringAttributeInputCallback.propTypes = {
  customElementProps: PropTypes.object,
  element: PropTypes.object.isRequired,
  errors: errorsPropType
}

StringAttributeInputCallback.defaultProps = {
  customElementProps: {},
  errors: []
}
