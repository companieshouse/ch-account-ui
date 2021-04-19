import PropTypes from 'prop-types'
import React from 'react'
import RadioGroup from '../general-ui/interaction/RadioGroup'

const ConfirmationCallback = ({ element, customElementProps = {}, groupError = undefined }) => {
  const id = element.payload.input[0].name
  const label = customElementProps.prompt || element.getPrompt()
  const testId = (element && element.getName && element.getName()) || `${id}_testId`
  const choices = element.getOutputValue('options')
  const defaultValue = element.getOutputValue('defaultOption')

  const isChecked = (choice, index) => {
    return (typeof defaultValue === 'number' && index === defaultValue) || choice === defaultValue
  }

  if (customElementProps._hidden === true) {
    // Output the element as a hidden form field instead
    return <input type="hidden" name={id} value={defaultValue} />
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

export default ConfirmationCallback

ConfirmationCallback.propTypes = {
  customElementProps: PropTypes.object,
  element: PropTypes.object.isRequired,
  groupError: PropTypes.object
}

ConfirmationCallback.defaultProps = {
  customElementProps: {}
}
