import PropTypes from 'prop-types'
import React from 'react'
import HeadingText from './HeadingText'
import ErrorSummary from './ErrorSummary'
import NotificationBanner from './NotificationBanner'
import { errorsPropType } from '../../../services/propTypes'
import { translate } from '../../../services/translate'
import WithLang from '../../../services/lang/WithLang'

const PageHeading = (props) => {
  const { lang, headingCount, errors, children, renderFeatures, notifyType, notifyHeading, notifyTitle, notifyChildren, showErrorSummary, size } = props
  if (errors.length === 0) {
    return (
      <>
        {Boolean(notifyType) && <NotificationBanner
          headingCount={headingCount}
          heading={notifyHeading}
          title={notifyTitle}
          type={notifyType}
        >
          {notifyChildren}
        </NotificationBanner>}
        <HeadingText headingCount={headingCount} size={size}>{children}</HeadingText>
      </>
    )
  }

  return (
    <>
      {showErrorSummary && <ErrorSummary headingCount={headingCount} title={translate(lang, 'ERROR_SUMMARY_TITLE')} errors={errors} />}
      <HeadingText headingCount={headingCount} size={size}>{children}{renderFeatures(props)}</HeadingText>
    </>
  )
}

export default WithLang(PageHeading)

PageHeading.propTypes = {
  children: PropTypes.node,
  errors: errorsPropType,
  headingCount: PropTypes.object,
  notifyChildren: PropTypes.node,
  notifyHeading: PropTypes.string,
  notifyTitle: PropTypes.string,
  notifyType: PropTypes.string,
  renderFeatures: PropTypes.func,
  lang: PropTypes.string,
  showErrorSummary: PropTypes.bool,
  size: PropTypes.string,
  showCaption: PropTypes.bool
}

PageHeading.defaultProps = {
  errors: [],
  notifyChildren: null,
  renderFeatures: () => { return null },
  showErrorSummary: true,
  showCaption: false
}
