import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'

const Button = ({ renderAs = 'button', type = 'button', onClick, label = '', href = '#', children, className = '', hasStartIcon = false, testId }) => {
  const classes = [className]

  if (hasStartIcon === true) classes.push('govuk-button--start')

  const finalClassName = classes.join(' ').trim()

  if (renderAs === 'link') {
    return (
      <Link href={href}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/interactive-supports-focus */}
        <a role="button" draggable="false" onClick={onClick} onKeyUp={(evt) => evt.key === 'enter' && onClick(evt)}
           className={`govuk-button ${finalClassName}`}
           data-module="govuk-button"
           data-testid={testId}
        >
          {label}
          {children}
          {hasStartIcon === true &&
          <svg className="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19"
               viewBox="0 0 33 40" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"/>
          </svg>}
        </a>
      </Link>
    )
  }

  if (renderAs === 'button') {
    return (
      <button type={type} className={`govuk-button ${finalClassName}`} data-module="govuk-button">
        {label}
        {children}
      </button>
    )
  }

  return null
}

export default Button

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hasStartIcon: PropTypes.bool,
  href: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  renderAs: PropTypes.string,
  type: PropTypes.string,
  testId: PropTypes.string.isRequired
}

Button.defaultProps = {
  className: '',
  hasStartIcon: false,
  href: '#',
  label: '',
  renderAs: 'button',
  type: 'submit'
}
