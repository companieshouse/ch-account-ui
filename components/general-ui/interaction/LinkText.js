import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'

const LinkText = ({ children, href, className = '' }) => {
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  return (
    <Link href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={`govuk-link ${finalClassName}`}>{children}</a>
    </Link>
  )
}

export default LinkText

LinkText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string.isRequired
}

LinkText.defaultProps = {
  className: ''
}
