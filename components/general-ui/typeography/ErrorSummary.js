import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import HeadingCount from '../../../services/HeadingCount'
import WithLang from '../../../services/lang/WithLang'
import { errorsPropType } from '../../../services/propTypes'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import { cleanAnalytics } from '../../../scripts/cleanAnalytics'

const ErrorSummary = (props) => {
  const { trackEvent } = useMatomo()
  const { type, title, errors, children, className, headingCount, renderFeatures, parentPage } = props

  const [tag, setTag] = useState(type)
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (headingCount) {
      headingCount.use()
      setTag(`h${headingCount.count}`)
    }

    if (errors.length > 0) {
      errors.forEach(error => {
        // pushInstruction('trackEvent', [parentPage !== undefined ? parentPage[0] : 'Unknown Error: ', 'Error:' + error.label])
        const errData = {
          type: 'trackEvent',
          category: 'Error',
          action: parentPage !== undefined ? parentPage[0] + ': Error: ' + cleanAnalytics([error.label]) : 'Unknown Error: ' + cleanAnalytics([error.label]),
          href: ''
        }
        trackEvent(errData)
        // console.error('PS Error:' + cleanAnalytics([error.label]))
        // console.error('parentPage: ', parentPage[0])
      })
    }
  }, [headingCount])
  if (errors.length === 0) return null

  if (!tag) return null

  const HeadingTag = `${tag}`

  return (
    <div className={`govuk-error-summary ${finalClassName}`}
         aria-labelledby="error-summary-title"
         role="alert"
         tabIndex="-1"
         data-module="govuk-error-summary"
    >
      <HeadingTag className="govuk-error-summary__title" id="error-summary-title">
        {title}
      </HeadingTag>
      <div className="govuk-error-summary__body">
        {errors.length > 0 && <ul className="govuk-list govuk-error-summary__list">
          {errors.map((error, index) => (
            <li key={index}>
              {Boolean(error.anchor) === true && <a href={`#${error.anchor}`}>{error.label}</a>}
              {Boolean(error.anchor) === false && error.label}
            </li>
          ))}
        </ul>}
        {children}
        {renderFeatures(props)}
      </div>
    </div>
  )
}

export default WithLang(ErrorSummary)

ErrorSummary.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  errors: errorsPropType,
  headingCount: PropTypes.instanceOf(HeadingCount),
  renderFeatures: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.string,
  lang: PropTypes.string.isRequired
}

ErrorSummary.defaultProps = {
  className: '',
  errors: [],
  renderFeatures: () => { return null },
  title: 'No title!',
  type: ''
}
