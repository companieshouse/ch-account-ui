import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'

const LinkText = (props) => {
  const { children, href, className = '', testId, renderFeatures } = props
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  return (
    <Link href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={`govuk-link ${finalClassName}`} data-testid={testId}>{children}{renderFeatures(props)}</a>
    </Link>
  )
}

export default LinkText

LinkText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  renderFeatures: PropTypes.func
}

LinkText.defaultProps = {
  className: '',
  renderFeatures: () => { return null }
}
