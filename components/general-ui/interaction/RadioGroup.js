import PropTypes from 'prop-types'
import React from 'react'
import { getFieldError } from '../../../services/errors'
import HeadingText from '../typeography/HeadingText'

const RadioGroup = (props) => {
  const { hint = '', heading = '', options = [], children, id, className = '', headingCount, errors, testId } = props
  const classes = [className]

  const finalClassName = classes.join(' ').trim()
  const error = getFieldError(errors, id)

  return (
    <div className={`govuk-form-group ${Boolean(error) && 'govuk-form-group--error'} ${finalClassName}`}>
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
        <div className="govuk-radios govuk-radios--inline">
          {options.map((option, index) => <div key={`${option.value}_${index}`} className="govuk-radios__item">
            <input className="govuk-radios__input" id={`${id}_${index}`} name={id} type="radio" value={option.value} defaultChecked={option.checked} />
            <label className="govuk-label govuk-radios__label" htmlFor={`${id}_${index}`}>
              {option.label}
            </label>
          </div>)}
        </div>
        {children}
      </fieldset>
    </div>
  )
}

export default RadioGroup

RadioGroup.propTypes = {
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    anchor: PropTypes.string
  })),
  fixedWidth: PropTypes.string,
  fluidWidth: PropTypes.string,
  hint: PropTypes.string,
  id: PropTypes.string.isRequired,
  heading: PropTypes.string,
  required: PropTypes.bool,
  testId: PropTypes.string.isRequired,
  headingCount: PropTypes.object,
  options: PropTypes.array,
  children: PropTypes.node
}

RadioGroup.defaultProps = {
  className: '',
  errors: [],
  fixedWidth: '',
  fluidWidth: '',
  hint: '',
  heading: '',
  required: false,
  options: []
}
