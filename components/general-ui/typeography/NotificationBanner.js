import PropTypes from 'prop-types'
import React from 'react'
import HeadingText from './HeadingText'

const NotificationBanner = (props) => {
  const { type = '', title = '', heading = '', children, className = '', headingCount } = props
  const classes = [className]

  if (type === 'success') classes.push('govuk-notification-banner--success')

  const finalClassName = classes.join(' ').trim()

  return (
    <div className={`govuk-notification-banner ${finalClassName}`} role="alert" aria-labelledby="govuk-notification-banner-title" data-module="govuk-notification-banner">
      <div className="govuk-notification-banner__header">
        <HeadingText headingCount={headingCount} size="l" className="govuk-notification-banner__title">
          {title}
        </HeadingText>
      </div>
      <div className="govuk-notification-banner__content">
        <HeadingText headingCount={headingCount} size="l" className="govuk-notification-banner__heading">{heading}</HeadingText>
        <p className="govuk-body">{children}</p>
      </div>
    </div>
  )
}

export default NotificationBanner

NotificationBanner.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  heading: PropTypes.string,
  headingCount: PropTypes.object,
  title: PropTypes.string,
  type: PropTypes.string
}

NotificationBanner.defaultProps = {
  className: '',
  heading: '',
  title: '',
  type: ''
}
