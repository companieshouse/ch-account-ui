import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'

const BackLink = ({ children, href = '', className = '' }) => {
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  if (href) {
    return (
      <Link href={href}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={`govuk-back-link no-js-hide ${finalClassName}`}>{children}</a>
      </Link>
    )
  }

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" onClick={() => {
      window.history.back()
      return false
    }} className={`govuk-back-link no-js-hide ${finalClassName}`}>{children}</a>
  )
}

export default BackLink

BackLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string
}

BackLink.defaultProps = {
  className: '',
  href: ''
}
