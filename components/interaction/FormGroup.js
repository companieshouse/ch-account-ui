import React from 'react'
import { getFieldError } from '../../services/errors'

const FormGroup = ({ children, className = '', errors = [], groupIds = [] }) => {
  const classes = [className]

  // Check for errors in our child fields
  const error = groupIds.find((id) => getFieldError(errors, id))
  if (error) classes.push('govuk-form-group--error')

  const finalClassName = classes.join(' ').trim()

  return (
    <div className={`govuk-form-group ${finalClassName}`}>{children}</div>
  )
}

export default FormGroup
