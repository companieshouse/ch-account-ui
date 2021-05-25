import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import HeadingCount from '../../../services/HeadingCount'
import WithLang from '../../../services/lang/WithLang'
import { errorsPropType } from '../../../services/propTypes'

const ErrorSummary = (props) => {
  const { type, title, errors, children, className, headingCount, renderFeatures } = props

  const [tag, setTag] = useState(type)
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  useEffect(() => {
    if (headingCount) {
      headingCount.use()
      setTag(`h${headingCount.count}`)
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
