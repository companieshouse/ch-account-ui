/* global _paq */
import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'
import { cleanAnalytics } from '../../../scripts/cleanAnalytics.js'

const LinkText = (props) => {
  const { children, href, style, className = '', target, testId, renderFeatures, handlers, handler, matomo, name, companyName } = props
  let onClick = props.onClick
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  if (!onClick) {
    onClick = (evt) => {
      if (matomo) {
        _paq.push(cleanAnalytics(matomo))
      }
      if (handler) {
        handlers[handler.name](evt, handler.params)
      }
    }
  }
  if (name) {
    console.log(name)
  }
  // console.log(visuallyHidden)

  return (
    <Link href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <a style={style} onClick={onClick} target={target} className={`govuk-link ${finalClassName}`} data-testid={testId}>{children}{renderFeatures(props)}<span className="govuk-visually-hidden">{name + ' - ' + companyName}</span></a>
    </Link>
  )
}

export default LinkText

LinkText.propTypes = {
  target: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  handler: PropTypes.object,
  handlers: PropTypes.object,
  href: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  renderFeatures: PropTypes.func,
  onClick: PropTypes.func,
  style: PropTypes.object,
  name: PropTypes.string,
  companyName: PropTypes.string
}

LinkText.defaultProps = {
  className: '',
  renderFeatures: () => { return null },
  companyName: '',
  name: ''
}
