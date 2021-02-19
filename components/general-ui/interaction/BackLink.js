import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'

const BackLink = ({ children, href = '', className = '', testId }) => {
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  if (href) {
    return (
      <Link href={href}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={`govuk-back-link no-js-hide ${finalClassName}`} data-test-id={testId}>{children}</a>
      </Link>
    )
  }

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" onClick={() => {
      window.history.back()
      return false
    }} className={`govuk-back-link no-js-hide ${finalClassName}`} data-test-id={testId}>{children}</a>
  )
}

export default BackLink

BackLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  testId: PropTypes.string.isRequired
}

BackLink.defaultProps = {
  className: '',
  href: ''
}
