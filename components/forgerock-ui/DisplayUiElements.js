import PropTypes from 'prop-types'
import React from 'react'
import { CallbackType } from '../../services/forgerock'
import NameCallback from './NameCallback'
import PasswordCallback from './PasswordCallback'
import StringAttributeInputCallback from './StringAttributeInputCallback'
import ValidatedCreatePasswordCallback from './ValidatedCreatePasswordCallback'
import ChoiceCallback from './ChoiceCallback'
import HiddenValueCallback from './HiddenValueCallback'
import { errorsPropType } from '../../services/propTypes'

const DisplayUiElements = ({ stage = '', uiElements = [], elementProps = {}, errors = [] }) => {
  return (
    <>
    {uiElements.map((element, index) => {
      let fieldId

      switch (element.payload.type) {
        case CallbackType.HiddenValueCallback:
          return <HiddenValueCallback key={index} element={element} errors={errors} />

        case CallbackType.NameCallback:
          fieldId = element.payload.input[0].name
          return <NameCallback key={index} element={element} errors={errors} customElementProps={elementProps[fieldId]} />

        case CallbackType.PasswordCallback:
          fieldId = element.payload.input[0].name
          return <PasswordCallback key={index} element={element} errors={errors} customElementProps={elementProps[fieldId]} />

        case CallbackType.StringAttributeInputCallback:
          fieldId = element.payload.input[0].name
          return <StringAttributeInputCallback key={index} element={element} errors={errors} customElementProps={elementProps[fieldId]} />

        case CallbackType.ValidatedCreatePasswordCallback:
          fieldId = element.payload.input[0].name
          return <ValidatedCreatePasswordCallback key={index} element={element} errors={errors} customElementProps={elementProps[fieldId]} />

        case CallbackType.ChoiceCallback:
          fieldId = (element.payload?.input && element.payload?.input[0]?.name) || `unknownFieldId_${index}`
          return <ChoiceCallback key={index} element={element} errors={errors} customElementProps={elementProps[fieldId]} />

        default:
          return null
      }
    })}
    </>
  )
}

export default DisplayUiElements

DisplayUiElements.propTypes = {
  elementProps: PropTypes.object,
  errors: errorsPropType,
  stage: PropTypes.string,
  uiElements: PropTypes.array
}

DisplayUiElements.defaultProps = {
  elementProps: {},
  errors: [],
  stage: '',
  uiElements: []
}
