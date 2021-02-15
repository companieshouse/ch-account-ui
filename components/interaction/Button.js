import React from 'react'
import Link from 'next/link'

const Button = ({ renderAs = 'button', type = 'submit', onClick, label = '', href = '#', children, className = '', hasStartIcon = false }) => {
  const classes = [className]

  if (hasStartIcon === true) classes.push('govuk-button--start')

  const finalClassName = classes.join(' ').trim()

  if (renderAs === 'link') {
    return (
      <Link href={href}>
        <a role="button" draggable="false" onClick={onClick} className={`govuk-button ${finalClassName}`}
           data-module="govuk-button">
          {label}
          {children}
          {hasStartIcon === true && <svg className="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19"
               viewBox="0 0 33 40" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"/>
          </svg>}
        </a>
      </Link>
    )
  }

  if (renderAs === 'button') {
    return (
      <button className={`govuk-button ${finalClassName}`} data-module="govuk-button">
        {label}
        {children}
      </button>
    )
  }

  return null
}

export default Button
