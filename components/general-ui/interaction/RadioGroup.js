import PropTypes from 'prop-types'
import React from 'react'
import { getFieldError } from '../../../services/errors'
import HeadingText from '../typeography/HeadingText'
import { errorsPropType } from '../../../services/propTypes'

const RadioGroup = (props) => {
  const { hint = '', label = '', options = [], children, id, className = '', headingCount, errors, testId, groupError = undefined, caption, captionPosition, captionSize, renderLabelAs } = props
  const classes = [className]

  const finalClassName = classes.join(' ').trim()
  const error = getFieldError(errors, id)

  return (
    <div className={`govuk-form-group ${Boolean(error || groupError) && 'govuk-form-group--error'} ${finalClassName}`}>
      <fieldset data-testid={testId} className="govuk-fieldset" aria-describedby={`${id}-hint ${id}-error`}>

          {renderLabelAs === 'heading'
            ? (
            <legend className="govuk-fieldset__legend govuk-fieldset__legend--xl">
              <HeadingText className="govuk-fieldset__heading" headingCount={headingCount}>
                {Boolean(caption) === true && captionPosition === 'above' && <span className={`govuk-caption-${captionSize}`}>{caption}</span>}
                {label}
                {Boolean(caption) === true && captionPosition === 'below' && <span className={`govuk-caption-${captionSize}`}>{caption}</span>}
              </HeadingText>
            </legend>
              )
            : <legend className="govuk-fieldset__legend">{label}</legend>
          }

        <div id={`${id}-hint`} className="govuk-hint">
          {hint}
        </div>

        {Boolean(error) && <span id={`${id}-error`} className="govuk-error-message">
          <span className="govuk-visually-hidden">Error:</span> {error.label}
        </span>}
        <div className="govuk-radios">
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
  caption: PropTypes.string,
  captionPosition: PropTypes.string,
  captionSize: PropTypes.string,
  errors: errorsPropType,
  fixedWidth: PropTypes.string,
  fluidWidth: PropTypes.string,
  hint: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  renderLabelAs: PropTypes.string,
  testId: PropTypes.string.isRequired,
  headingCount: PropTypes.object,
  options: PropTypes.array,
  children: PropTypes.node,
  groupError: PropTypes.object
}

RadioGroup.defaultProps = {
  captionPosition: 'below',
  captionSize: 'xl',
  className: '',
  errors: [],
  fixedWidth: '',
  fluidWidth: '',
  hint: '',
  label: '',
  required: false,
  options: []
}
