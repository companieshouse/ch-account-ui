import PropTypes from 'prop-types'
import React from 'react'
import HeadingCount from '../../../services/HeadingCount'

const ErrorSummary = ({ type = '', title = 'No title!', errors = [], children, className = '', headingCount }) => {
  if (errors.length === 0 && !children) return null

  const [tag, setTag] = React.useState(type)
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  if (headingCount) {
    React.useEffect(() => {
      headingCount.use()
      setTag(`h${headingCount.count}`)
    }, [])
  }

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
      </div>
    </div>
  )
}

export default ErrorSummary

ErrorSummary.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    anchor: PropTypes.string
  })),
  headingCount: PropTypes.instanceOf(HeadingCount),
  title: PropTypes.string,
  type: PropTypes.string
}

ErrorSummary.defaultProps = {
  className: '',
  errors: [],
  title: 'No title!',
  type: ''
}
