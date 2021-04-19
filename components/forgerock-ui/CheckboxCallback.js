import PropTypes from 'prop-types'
import React from 'react'
import CheckboxGroup from '../general-ui/interaction/CheckboxGroup'

const CheckboxCallback = ({ element, customElementProps = {}, groupError = undefined }) => {
  const id = element.payload.input[0].name
  const label = customElementProps.prompt || element.getPrompt()
  const testId = (element && element.getName && element.getName()) || `${id}_testId`
  const choices = element.getOutputValue('options')
  const defaultValue = element.getOutputValue('defaultOption')

  const isChecked = (choice, index) => {
    return (typeof defaultValue === 'number' && index === defaultValue) || choice === defaultValue
  }

  return (
    <CheckboxGroup
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

export default CheckboxCallback

CheckboxCallback.propTypes = {
  customElementProps: PropTypes.object,
  element: PropTypes.object.isRequired,
  groupError: PropTypes.object
}

CheckboxCallback.defaultProps = {
  customElementProps: {}
}
