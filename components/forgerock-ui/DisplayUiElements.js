import PropTypes from 'prop-types'
import React from 'react'
import { CallbackType } from '../../services/forgerock'
import NameCallback from './NameCallback'
import PasswordCallback from './PasswordCallback'

const DisplayUiElements = ({ elements = [], errors = [] }) => {
  return (
    <>
    {elements.map((elementPayload, index) => {
      const element = elementPayload.payload
      console.log('Processing ui element', element)
      switch (element.type) {
        case CallbackType.NameCallback:
          return <NameCallback key={index} element={element} errors={errors} />

        case CallbackType.PasswordCallback:
          return <PasswordCallback key={index} element={element} errors={errors} />

        default:
          return null
      }
    })}
    </>
  )
}

export default DisplayUiElements

DisplayUiElements.propTypes = {
  elements: PropTypes.array,
  errors: PropTypes.array
}

DisplayUiElements.defaultProps = {
  elements: [],
  errors: []
}
