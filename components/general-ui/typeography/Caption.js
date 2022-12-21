import PropTypes from 'prop-types'
import React from 'react'
import ErrorSummary from './ErrorSummary'
import { translate } from '../../../services/translate'
import WithLang from '../../../services/lang/WithLang'

const Caption = (props) => {
  const { lang, headingCount, errors, children, className = '', size = 'xl', renderFeatures, style, showErrorSummary } = props
  const classes = [className]

  if (size === 'xl') classes.push('govuk-caption-xl')
  if (size === 'l') classes.push('govuk-caption-l')
  if (size === 'm') classes.push('govuk-caption-m')

  const finalClassName = classes.join(' ').trim()

  if (showErrorSummary && errors.length > 0) {
    return (
      <>
          <ErrorSummary headingCount={headingCount} title={translate(lang, 'ERROR_SUMMARY_TITLE')} errors={errors} cleanTitle={true} />
          <span className={`${finalClassName}`} style={style}>
            {children}
            {renderFeatures(props)}
          </span>
      </>
    )
  }

  return (
    <span className={`${finalClassName}`} style={style}>
      {children}
      {renderFeatures(props)}
    </span>
  )
}

export default WithLang(Caption)

Caption.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.string,
  renderFeatures: PropTypes.func,
  style: PropTypes.object,
  showErrorSummary: PropTypes.bool
}

Caption.defaultProps = {
  className: '',
  size: 'xl',
  renderFeatures: () => { return null },
  showErrorSummary: false
}
