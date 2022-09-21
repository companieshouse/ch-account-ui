import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'
import { matomoHelper } from '../../../scripts/cleanAnalytics.js'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import log from '../../../services/log'

const Button = ({
  warning = false,
  secondary = false,
  renderAs = 'button',
  type,
  // onClick,
  label = '',
  href = '#',
  children,
  className = '',
  hasStartIcon = false,
  testId,
  handler,
  handlers,
  loading,
  matomo
}) => {
  const { trackEvent, pushInstruction } = useMatomo()
  const classes = [className]

  if (warning === true) classes.push('govuk-button--warning')
  if (secondary === true) classes.push('govuk-button--secondary')
  if (hasStartIcon === true) classes.push('govuk-button--start')
  if (loading === true) classes.push('govuk-button--disabled')

  const finalClassName = classes.join(' ').trim()

  const onClick = (evt) => {
    if (matomo) {
      const cleanData = matomoHelper(matomo)
      cleanData.href = '' // ensure the href is blank
      log.debug('Matomo - Tracking Button: ', cleanData)

      if (cleanData.type === 'trackEvent') {
        trackEvent(cleanData)
      } else if (cleanData.type === 'trackGoal') {
        pushInstruction('trackGoal', [matomo[1]])
      }
    }
    if (handler) {
      handlers[handler.name](evt, handler.params)
    }
  }

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
      <button disabled={loading && 'disabled'} aria-disabled={loading && 'true'} type={type} onClick={(e) => onClick(e)} className={`govuk-button ${finalClassName}`} data-module="govuk-button" data-testid={testId}>
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
  handler: PropTypes.object,
  handlers: PropTypes.object,
  label: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  renderAs: PropTypes.string,
  type: PropTypes.string,
  testId: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
  warning: PropTypes.bool
}

Button.defaultProps = {
  className: '',
  hasStartIcon: false,
  href: '#',
  label: '',
  renderAs: 'button',
  type: 'submit',
  secondary: false,
  warning: false
}
