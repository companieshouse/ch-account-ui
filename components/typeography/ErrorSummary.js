import PropTypes from 'prop-types'
import React from 'react'

const ErrorSummary = ({ type = 'h1', title = 'No title!', errors = [], children, className = '' }) => {
  if (errors.length === 0 && !children) return null

  const classes = [className]
  const finalClassName = classes.join(' ').trim()
  const HeadingTag = `${type}`

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
      </div>
    </div>
  )
}

export default ErrorSummary

ErrorSummary.propTypes = {
  children: PropTypes.node,
  errors: PropTypes.arrayOf(PropTypes.shape({
    anchor: PropTypes.string,
    label: PropTypes.string.isRequired
  })),
  title: PropTypes.string
}

ErrorSummary.defaultProps = {
  errors: [],
  title: 'No title!'
}
