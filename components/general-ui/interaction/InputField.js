import PropTypes from 'prop-types'
import React from 'react'
import { getFieldError } from '../../../services/errors'
import { errorsPropType } from '../../../services/propTypes'
import withLang from '../../../services/lang/withLang'
import { translate } from '../../../services/translate'

const InputField = ({ lang, label = '', renderLabelAs = 'label', caption, captionPosition = 'below', captionSize = 'xl', headingCount, type = 'text', id, className = '', errors = [], hint = '', fixedWidth = '', fluidWidth = '', autoComplete, testId, defaultValue = '', required = false, prefix, suffix, groupError = undefined, formGroup, ...otherProps }) => {
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
          {Boolean(caption) === true && captionPosition === 'above' && <span className={`govuk-caption-${captionSize}`}>{caption}</span>}
          {label}
          {Boolean(caption) === true && captionPosition === 'below' && <span className={`govuk-caption-${captionSize}`}>{caption}</span>}
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
               aria-describedby={error && `${id}-error`}
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
  autoComplete: PropTypes.string,
  caption: PropTypes.string,
  captionPosition: PropTypes.string,
  captionSize: PropTypes.string,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  errors: errorsPropType,
  fixedWidth: PropTypes.string,
  fluidWidth: PropTypes.string,
  groupError: PropTypes.object,
  headingCount: PropTypes.object,
  hint: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  lang: PropTypes.string.isRequired,
  prefix: PropTypes.node,
  renderLabelAs: PropTypes.string,
  required: PropTypes.bool,
  suffix: PropTypes.node,
  testId: PropTypes.string.isRequired,
  type: PropTypes.string
}

InputField.defaultProps = {
  captionPosition: 'below',
  captionSize: 'xl',
  className: '',
  defaultValue: '',
  errors: [],
  fixedWidth: '',
  fluidWidth: '',
  groupError: undefined,
  hint: '',
  label: '',
  renderLabelAs: 'label',
  required: false,
  type: 'text'
}
