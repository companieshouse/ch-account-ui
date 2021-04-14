import PropTypes from 'prop-types'
import React from 'react'
import RadioGroup from '../general-ui/interaction/RadioGroup'

const ChoiceCallback = ({ element, customElementProps = {}, groupError = undefined }) => {
  const id = element.payload.input[0].name
  const label = customElementProps.prompt || element.getPrompt()
  const testId = (element && element.getName && element.getName()) || `${id}_testId`
  const choices = element.getOutputValue('choices')
  const defaultValue = element.getOutputValue('defaultChoice')

  const isChecked = (choice, index) => {
    return (typeof defaultValue === 'number' && index === defaultValue) || choice === defaultValue
  }

  return (
    <RadioGroup
      id={id}
      testId={testId}
      heading={label}
      options={choices.map((choice, index) => ({
        label: choice,
        value: index,
        checked: isChecked(choice, index)
      }))}
      defaultValue={defaultValue}
      groupError={groupError}
      {...customElementProps}
    />
  )
}

export default ChoiceCallback

ChoiceCallback.propTypes = {
  customElementProps: PropTypes.object,
  element: PropTypes.object.isRequired
}

ChoiceCallback.defaultProps = {
  customElementProps: {}
}
