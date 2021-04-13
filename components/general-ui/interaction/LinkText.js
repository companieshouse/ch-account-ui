import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'

const LinkText = (props) => {
  const { children, href, className = '', testId, renderFeatures, onClick } = props
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  return (
    <Link href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <a onClick={onClick} className={`govuk-link ${finalClassName}`} data-testid={testId}>{children}{renderFeatures(props)}</a>
    </Link>
  )
}

export default LinkText

LinkText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  renderFeatures: PropTypes.func,
  onClick: PropTypes.func
}

LinkText.defaultProps = {
  className: '',
  renderFeatures: () => { return null }
}
