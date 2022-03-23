import PropTypes from 'prop-types'
import React from 'react'
import { getFieldError } from '../../../services/errors'
import { errorsPropType } from '../../../services/propTypes'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import { matomoHelper } from '../../../scripts/cleanAnalytics'

const CheckboxGroup = (props) => {
  const {
    options,
    children,
    id,
    errors,
    testId,
    formGroup,
    formGroupHeading,
    formGroupHint,
    matomo
  } = props
  const { trackEvent, pushInstruction } = useMatomo()

  const error = getFieldError(errors, id)

  const onClick = (evt) => {
    if (matomo) {
      matomo.push(options[evt.target.value].label)
      const cleanData = matomoHelper(matomo)

      if (cleanData.type === 'trackEvent') {
        trackEvent(cleanData)
      } else if (cleanData.type === 'trackGoal') {
        pushInstruction('trackGoal', [matomo[1]])
      }
    }
  }

  return (
    <>
      {formGroup && formGroupHeading
        ? <legend className="govuk-fieldset__legend govuk-fieldset__legend--xl">
          <h1 className="govuk-fieldset__heading">
            {formGroupHeading}
          </h1>
        </legend>
        : null
      }
      {formGroup && formGroupHint
        ? <div className="govuk-hint">
          {formGroupHint}
      </div>
        : null }
     {Boolean(error) && <span id={`${id}-error`} className="govuk-error-message">
      <span className="govuk-visually-hidden">Error:</span> {error.label}
     </span>}
      <div id={id} data-testid={testId} className="govuk-checkboxes">
        {options.filter((option) => !option.filter).map((option, index) => <div key={`${option.value}_${index}`} className="govuk-checkboxes__item">
          <input
            className="govuk-checkboxes__input"
            id={`${id}_${index}`}
            name={id}
            type="checkbox"
            value={option.value}
            defaultChecked={option.checked}
            aria-describedby={option.hint ? `${id}_${index}-hint` : null}
            onClick={onClick}
          />
          <label className="govuk-label govuk-checkboxes__label" htmlFor={`${id}_${index}`}>
            {option.label}
          </label>
          {option.hint ? <div id={`${id}_${index}-hint`} className="govuk-hint govuk-checkboxes__hint">{option.hint}</div> : null}
        </div>)}
      </div>
      {children}
  </>
  )
}

export default CheckboxGroup

CheckboxGroup.propTypes = {
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  errors: errorsPropType,
  fixedWidth: PropTypes.string,
  fluidWidth: PropTypes.string,
  hint: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  testId: PropTypes.string.isRequired,
  headingCount: PropTypes.object,
  options: PropTypes.array,
  children: PropTypes.node,
  groupError: PropTypes.object,
  formGroup: PropTypes.string,
  formGroupHeading: PropTypes.string,
  formGroupHint: PropTypes.string
}

CheckboxGroup.defaultProps = {
  className: '',
  errors: [],
  fixedWidth: '',
  fluidWidth: '',
  hint: '',
  label: '',
  required: false,
  options: []
}
