import PropTypes from 'prop-types'
import React from 'react'
import RadioGroup from '../general-ui/interaction/RadioGroup'

const ChoiceCallback = ({ element, customElementProps = {}, groupError = undefined, errors = [] }) => {
  const id = element.payload.input[0].name
  const label = customElementProps.prompt || element.getPrompt()
  const testId = (element && element.getName && element.getName()) || `${id}_testId`
  const choices = element.getOutputValue('choices')
  const defaultValue = element.getOutputValue('defaultChoice')

  const isChecked = (choice, index) => {
    return (typeof defaultValue === 'number' && index === defaultValue) || choice === defaultValue
  }
  const { options, ...restCustomElementProps } = customElementProps
  const mergedOptions = choices.map((choice, index) => {
    return {
      label: options?.[index]?.label || choice,
      value: options?.[index]?.value || index,
      hint: options?.[index]?.hint,
      checked: isChecked(choice, index)
    }
  })

  return (
    <RadioGroup
      id={id}
      testId={testId}
      label={label}
      options={mergedOptions}
      defaultValue={defaultValue}
      groupError={groupError}
      errors={errors}
      {...restCustomElementProps}
    />
  )
}

export default ChoiceCallback

ChoiceCallback.propTypes = {
  customElementProps: PropTypes.object,
  element: PropTypes.object.isRequired,
  groupError: PropTypes.object
}

ChoiceCallback.defaultProps = {
  customElementProps: {}
}
