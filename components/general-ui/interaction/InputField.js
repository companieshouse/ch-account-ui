import PropTypes from 'prop-types'
import React from 'react'
import { getFieldError } from '../../../services/errors'
import { errorsPropType } from '../../../services/propTypes'
import WithLang from '../../../services/lang/WithLang'
import { translate } from '../../../services/translate'

const InputField = ({ lang, label, renderLabelAs, labelSize, caption, captionPosition, captionSize, children, headingCount, type, id, className, errors, hint, fixedWidth, fluidWidth, autoComplete, testId, defaultValue, required, prefix, suffix, groupError, formGroup, checkPadding = false, ...otherProps }) => {
  const classes = [className]

  if (fixedWidth) classes.push(`govuk-input--width-${fixedWidth}`)
  if (fluidWidth) classes.push(`govuk-!-width-${fluidWidth}`)

  const finalClassName = classes.join(' ').trim()
  const error = getFieldError(errors, id)

  return (
    <React.Fragment>
      {renderLabelAs === 'label' && <label className={`govuk-label govuk-label--${labelSize}`} htmlFor={id}>
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
        {Boolean(prefix) === true && <div className="govuk-input__prefix">{prefix}</div>}
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
        {Boolean(suffix) === true && <div className="govuk-input__suffix">{suffix}</div>}
        {children}
      </div>
    </React.Fragment>
  )
}

export default WithLang(InputField)

InputField.propTypes = {
  autoComplete: PropTypes.string,
  caption: PropTypes.string,
  captionPosition: PropTypes.string,
  captionSize: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  defaultValue: PropTypes.string,
  errors: errorsPropType,
  fixedWidth: PropTypes.string,
  fluidWidth: PropTypes.string,
  formGroup: PropTypes.string,
  groupError: PropTypes.string,
  headingCount: PropTypes.object,
  hint: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  labelSize: PropTypes.string,
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
  hint: '',
  label: '',
  labelSize: 'r',
  renderLabelAs: 'label',
  required: false,
  type: 'text'
}
