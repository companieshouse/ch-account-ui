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
import FormGroup from '../general-ui/interaction/FormGroup'
import { getFieldError } from '../../services/errors'

const getElement = ({ element, id, index, customProps }, errors, groupError = undefined) => {
  switch (element.payload.type) {
    case CallbackType.HiddenValueCallback:
      return <HiddenValueCallback id={id} element={element} errors={errors} customElementProps={customProps} groupError={groupError} />

    case CallbackType.NameCallback:
      return <NameCallback id={id} element={element} errors={errors} customElementProps={customProps} groupError={groupError} />

    case CallbackType.PasswordCallback:
      return <PasswordCallback id={id} element={element} errors={errors} customElementProps={customProps} groupError={groupError} />

    case CallbackType.StringAttributeInputCallback:
      return <StringAttributeInputCallback id={id} element={element} errors={errors} customElementProps={customProps} groupError={groupError} />

    case CallbackType.ValidatedCreatePasswordCallback:
      return <ValidatedCreatePasswordCallback id={id} element={element} errors={errors} customElementProps={customProps} groupError={groupError} />

    case CallbackType.ChoiceCallback:
      return <ChoiceCallback id={id} element={element} errors={errors} customElementProps={customProps} groupError={groupError} />

    default:
      return null
  }
}

const DisplayUiElements = ({ stage = '', uiElements = [], elementProps = {}, errors = [] }) => {
  let currentFormGroup

  return (
    <>
      {uiElements.map((element, index) => {
        const id = (element.payload?.input && element.payload?.input[0]?.name) || `unknownFieldId_${index}`
        const customProps = elementProps[id]

        // Find out if we need to group these inputs together into a single input group
        if (customProps && customProps.formGroup) {
          // The element is part of a group... let's find all these elements
          // and render them as children of the same parent <FormGroup> element
          if (!currentFormGroup) {
            // We don't have a current form group and this element is part of one
            // so let's create the form group now. Elements that ar part of a form
            // are contiguous so we now just need to keep adding elements until
            // the next element doesn't have a formGroup assigned, then output
            // the form group + the next element afterwards. e.g.
            //    <FormGroup>
            //        ... all the form group elements in customFormGroup.elements
            //    </FormGroup>
            //    .. the next elements
            currentFormGroup = {
              name: customProps.formGroup,
              index,
              elements: []
            }
          }

          // Add the current element to the form group
          currentFormGroup.elements.push({ element, index, id, customProps })

          // We don't render anything yet as this element needs to be part of a form group
          return null
        } else if (currentFormGroup) {
          // We've found an element that is not part of a form group and we have a
          // currentFormGroup so output that current form group and then continue]
          const groupIds = currentFormGroup.elements.map((formGroupElementData) => formGroupElementData.id)
          const error = groupIds.find((id) => getFieldError(errors, id))

          const output = (
            <React.Fragment key={`formGroup_${index}`}>
                <FormGroup errors={errors} groupIds={groupIds}>
                  <fieldset className="govuk-fieldset" role="group">
                    {currentFormGroup.elements.map((formGroupElementData, formGroupElementDataIndex) => {
                      return (<FormGroup key={formGroupElementDataIndex} groupIds={currentFormGroup.elements.map((formGroupElementData) => formGroupElementData.id)}>
                        {getElement(formGroupElementData, errors, error)}
                      </FormGroup>)
                    })}
                  </fieldset>
                </FormGroup>
              {getElement({ element, index, id, customProps }, errors)}
            </React.Fragment>
          )

          // Clear the current form group data
          currentFormGroup = undefined

          return output
        }

        return <FormGroup key={id} errors={errors} groupIds={[id]}>{getElement({ element, index, id, customProps }, errors)}</FormGroup>
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
