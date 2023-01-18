import PropTypes from 'prop-types'
import React from 'react'
import { getFieldError } from '../../../services/errors'
import HeadingText from '../typeography/HeadingText'
import { errorsPropType } from '../../../services/propTypes'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import { matomoHelper } from '../../../scripts/cleanAnalytics'
import log from '../../../services/log'
import { MATOMO_LOGGING } from '../../../services/environment'

const RadioGroup = (props) => {
  const { hint = '', label = '', options = [], children, id, className = '', headingCount, errors, testId, groupError = undefined, caption, captionPosition, captionSize, renderLabelAs, matomo } = props
  const classes = [className]
  const { trackEvent, pushInstruction } = useMatomo()

  const finalClassName = classes.join(' ').trim()
  const error = getFieldError(errors, id)

  const onClick = (evt) => {
    if (matomo) {
      matomo.push(options[evt.target.value].label)

      const cleanData = matomoHelper(matomo)
      cleanData.action = options[evt.target.value].label
      cleanData.href = 'http://' // ensure the href is blank
      cleanData.url = '' // ensure url is blank

      if (cleanData.type === 'trackEvent') {
        MATOMO_LOGGING && log.debug('Matomo - Tracking - Event - RadioGroup: ', cleanData)
        trackEvent(cleanData)
      } else if (cleanData.type === 'trackGoal') {
        MATOMO_LOGGING && log.debug('Matomo - Tracking - Goal - RadioGroup: ', matomo[1])
        pushInstruction('trackGoal', [matomo[1]])
      }
    }
  }

  return (
    <div className={`govuk-form-group ${Boolean(error || groupError) && 'govuk-form-group--error'} ${finalClassName}`}>
      <fieldset data-testid={testId} className="govuk-fieldset">

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
            <input
              className="govuk-radios__input"
              id={`${id}_${index}`}
              name={id} type="radio"
              value={option.value}
              aria-describedby={option.hint ? `${id}_${index}-hint` : null}
              onClick={onClick}
            />
            <label className="govuk-label govuk-radios__label" htmlFor={`${id}_${index}`}>
              {option.label}
            </label>
            {option.hint ? <div id={`${id}_${index}-hint`} className="govuk-hint govuk-radios__hint">{option.hint}</div> : null}
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
