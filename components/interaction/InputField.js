import React from 'react'
import { getFieldError } from '../../services/errors'

const InputField = ({ label = '', id, className = '', errors = [] }) => {
  const classes = [className]
  const finalClassName = classes.join(' ').trim()
  const error = getFieldError(errors, id)

  return (
    <React.Fragment>
      <label className="govuk-label" htmlFor={id}>
        {label}
      </label>
      {Boolean(error) && <span id={`${id}-error`} className="govuk-error-message">
        <span className="govuk-visually-hidden">Error:</span> {error.label}
      </span>}
      <input className={`govuk-input ${Boolean(error) && 'govuk-input--error'} ${finalClassName}`}
             id={id}
             name={id}
             type="text"
             aria-describedby={Boolean(error) && `${id}-error`}
      />
    </React.Fragment>
  )
}

export default InputField
