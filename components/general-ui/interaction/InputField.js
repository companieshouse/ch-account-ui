import PropTypes from 'prop-types'
import React from 'react'
import { getFieldError } from '../../../services/errors'

const InputField = ({ label = '', type = 'text', id, className = '', errors = [], hint = '', fixedWidth = '', fluidWidth = '', autoComplete, testId, defaultValue = '', required = false }) => {
  const classes = [className]

  if (fixedWidth) classes.push(`govuk-input--width-${fixedWidth}`)
  if (fluidWidth) classes.push(`govuk-!-width-${fluidWidth}`)

  const finalClassName = classes.join(' ').trim()
  const error = getFieldError(errors, id)

  return (
    <React.Fragment>
      <label className="govuk-label" htmlFor={id}>
        {label}
      </label>
      {Boolean(hint) && <div id={`${id}-hint`} className="govuk-hint">{hint}</div>}
      {Boolean(error) && <span id={`${id}-error`} className="govuk-error-message">
        <span className="govuk-visually-hidden">Error:</span> {error.label}
      </span>}
      <input className={`govuk-input ${Boolean(error) && 'govuk-input--error'} ${finalClassName}`}
             id={id}
             name={id}
             type={type}
             autoComplete={autoComplete}
             aria-describedby={Boolean(error) && `${id}-error`}
             data-testid={testId}
             defaultValue={defaultValue}
             required={required}
      />
    </React.Fragment>
  )
}

export default InputField

InputField.propTypes = {
  className: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    anchor: PropTypes.string
  })),
  fixedWidth: PropTypes.string,
  fluidWidth: PropTypes.string,
  hint: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  autoComplete: PropTypes.string,
  testId: PropTypes.string.isRequired
}

InputField.defaultProps = {
  className: '',
  errors: [],
  fixedWidth: '',
  fluidWidth: '',
  hint: '',
  label: '',
  type: 'text'
}
