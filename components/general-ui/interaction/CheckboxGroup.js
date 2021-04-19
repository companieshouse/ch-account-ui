import PropTypes from 'prop-types'
import React from 'react'
import { getFieldError } from '../../../services/errors'
import { errorsPropType } from '../../../services/propTypes'
import HeadingText from '../typeography/HeadingText'

const CheckboxGroup = (props) => {
  const {
    hint = '',
    heading = '',
    options = [],
    children,
    id,
    className = '',
    headingCount,
    errors,
    testId,
    groupError = undefined
  } = props
  const classes = [className]

  const finalClassName = classes.join(' ').trim()
  const error = getFieldError(errors, id)

  return (
    <div className={`govuk-form-group ${Boolean(error || groupError) && 'govuk-form-group--error'} ${finalClassName}`}>
      <fieldset data-testid={testId} className="govuk-fieldset" aria-describedby={`${id}-hint ${id}-error`}>
        {Boolean(heading) && <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
          <HeadingText className="govuk-fieldset__heading" headingCount={headingCount}>
            {heading}
          </HeadingText>
        </legend>}
        <div id={`${id}-hint`} className="govuk-hint">
          {hint}
        </div>
        {Boolean(error) && <span id={`${id}-error`} className="govuk-error-message">
          <span className="govuk-visually-hidden">Error:</span> {error.label}
        </span>}
        <div className="govuk-checkboxes">
          {options.map((option, index) => <div key={`${option.value}_${index}`} className="govuk-checkboxes__item">
            <input
              className="govuk-checkboxes__input"
              id={`${id}_${index}`}
              name={id}
              type="checkbox"
              value={option.value}
              defaultChecked={option.checked}
              aria-describedby={`${id}-hint`}
            />
            <label className="govuk-label govuk-checkboxes__label" htmlFor={`${id}_${index}`}>
              {option.label}
            </label>
          </div>)}
        </div>
        {children}
      </fieldset>
    </div>
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
  heading: PropTypes.string,
  required: PropTypes.bool,
  testId: PropTypes.string.isRequired,
  headingCount: PropTypes.object,
  options: PropTypes.array,
  children: PropTypes.node,
  groupError: PropTypes.object
}

CheckboxGroup.defaultProps = {
  className: '',
  errors: [],
  fixedWidth: '',
  fluidWidth: '',
  hint: '',
  heading: '',
  required: false,
  options: []
}
