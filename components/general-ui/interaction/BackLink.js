import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'
import WithLang from '../../../services/lang/WithLang'
import { translate } from '../../../services/translate'

const BackLink = ({ href, className, testId, onClick, lang }) => {
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  if (href) {
    return (
      <div className="back-link">
        <Link href={href}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events */}
          <a tabIndex="-1" role="link" className={`govuk-back-link no-js-hide ${finalClassName}`} onClick={onClick} data-testid={testId}>{translate(lang, 'BACK')}</a>
        </Link>
      </div>
    )
  }

  return (

    <div className="back-link">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" onClick={(...args) => {
        if (onClick) return onClick(...args)
        window.history.back()
        return false
      }} className={`govuk-back-link no-js-hide ${finalClassName}`} data-testid={testId}>{translate(lang, 'BACK')}</a>
    </div>
  )
}

export default WithLang(BackLink)

BackLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  lang: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

BackLink.defaultProps = {
  className: '',
  href: ''
}
