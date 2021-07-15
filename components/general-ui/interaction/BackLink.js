import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'

const BackLink = ({ children, href = '', className = '', testId, onClick }) => {
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  if (href) {
    return (
      <div className="back-link">
        <Link href={href}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events */}
          <a tabIndex="-1" role="link" className={`govuk-back-link no-js-hide ${finalClassName}`} onClick={onClick} data-testid={testId}>{children}</a>
        </Link>
      </div>
    )
  }

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <div className="back-link">
      <a href="#" onClick={(...args) => {
        if (onClick) return onClick(...args)
        window.history.back()
        return false
      }} className={`govuk-back-link no-js-hide ${finalClassName}`} data-testid={testId}>{children}</a>
    </div>
  )
}

export default BackLink

BackLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  testId: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

BackLink.defaultProps = {
  className: '',
  href: ''
}
