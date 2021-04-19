import PropTypes from 'prop-types'
import React from 'react'
import { getFieldError } from '../../../services/errors'
import { errorsPropType } from '../../../services/propTypes'
import withLang from '../../../services/lang/withLang'
import { translate } from '../../../services/translate'

const InputField = ({ lang, label = '', renderLabelAs = 'label', headingCount, type = 'text', id, className = '', errors = [], hint = '', fixedWidth = '', fluidWidth = '', autoComplete, testId, defaultValue = '', required = false, prefix, suffix, groupError = undefined, ...otherProps }) => {
  const classes = [className]

  if (fixedWidth) classes.push(`govuk-input--width-${fixedWidth}`)
  if (fluidWidth) classes.push(`govuk-!-width-${fluidWidth}`)

  const finalClassName = classes.join(' ').trim()
  const error = getFieldError(errors, id)

  return (
    <React.Fragment>
      {renderLabelAs === 'label' && <label className="govuk-label" htmlFor={id}>
        {label}
      </label>}
      {renderLabelAs === 'heading' && <h1 className="govuk-label-wrapper">
        <label className="govuk-label govuk-label--xl" htmlFor={id}>
          {label}
        </label>
      </h1>}
      {Boolean(hint) && <div id={`${id}-hint`} className="govuk-hint">{hint}</div>}
      {Boolean(error) && <span id={`${id}-error`} className="govuk-error-message">
        <span className="govuk-visually-hidden">{translate(lang, 'INPUT_ERROR_SCREEN_READER_PREFIX')}:</span> {error.label}
      </span>}
      <div className="govuk-input__wrapper">
        {Boolean(prefix) === true && <div className="govuk-input__prefix" aria-hidden="true">{prefix}</div>}
        <input className={`govuk-input ${Boolean(error || groupError) && 'govuk-input--error'} ${finalClassName}`}
               id={id}
               name={id}
               type={type}
               autoComplete={autoComplete}
               aria-describedby={Boolean(error) && `${id}-error`}
               data-testid={testId}
               defaultValue={defaultValue}
               required={required}
               {...otherProps}
        />
        {Boolean(suffix) === true && <div className="govuk-input__suffix" aria-hidden="true">{suffix}</div>}
      </div>
    </React.Fragment>
  )
}

export default withLang(InputField)

InputField.propTypes = {
  lang: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  errors: errorsPropType,
  fixedWidth: PropTypes.string,
  fluidWidth: PropTypes.string,
  hint: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  testId: PropTypes.string.isRequired,
  type: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  groupError: PropTypes.object,
  renderLabelAs: PropTypes.string,
  headingCount: PropTypes.object
}

InputField.defaultProps = {
  className: '',
  defaultValue: '',
  errors: [],
  fixedWidth: '',
  fluidWidth: '',
  hint: '',
  label: '',
  required: false,
  type: 'text'
}
