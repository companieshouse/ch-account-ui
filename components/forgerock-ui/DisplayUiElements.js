import PropTypes from 'prop-types'
import React from 'react'
import { CallbackType, getCallbackElementData } from '../../services/forgerock'
import NameCallback from './NameCallback'
import PasswordCallback from './PasswordCallback'
import StringAttributeInputCallback from './StringAttributeInputCallback'
import TextOutputCallback from './TextOutputCallback'

const DisplayUiElements = ({ stage = '', uiElements = [], elementProps = {}, errors = [] }) => {
  return (
    <>
    {uiElements.map((elementPayload, index) => {
      const element = elementPayload.payload
      const elementData = getCallbackElementData(element)

      const customElementProps = elementProps[elementData.fieldId]

      switch (element.type) {
        case CallbackType.NameCallback:
          return <NameCallback key={index} element={element} errors={errors} />

        case CallbackType.PasswordCallback:
          return <PasswordCallback key={index} element={element} errors={errors} />

        case CallbackType.StringAttributeInputCallback:
          return <StringAttributeInputCallback key={index} element={element} errors={errors} customElementProps={customElementProps} />

        case CallbackType.TextOutputCallback:
          return <TextOutputCallback key={index} element={element} errors={errors} customElementProps={customElementProps} />

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
  errors: PropTypes.array,
  stage: PropTypes.string,
  uiElements: PropTypes.array
}

DisplayUiElements.defaultProps = {
  elementProps: {},
  errors: [],
  stage: '',
  uiElements: []
}
