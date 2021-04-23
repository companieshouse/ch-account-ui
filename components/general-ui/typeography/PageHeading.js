import PropTypes from 'prop-types'
import React from 'react'
import HeadingText from './HeadingText'
import ErrorSummary from './ErrorSummary'
import NotificationBanner from './NotificationBanner'
import { errorsPropType } from '../../../services/propTypes'
import { translate } from '../../../services/translate'
import withLang from '../../../services/lang/withLang'

const PageHeading = (props) => {
  const { lang, headingCount, errors = [], children, renderFeatures, notifyType, notifyHeading, notifyTitle, notifyChildren = null } = props

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
        <HeadingText headingCount={headingCount}>{children}</HeadingText>
      </>
    )
  }

  return (
    <>
      <ErrorSummary headingCount={headingCount} title={translate(lang, 'ERROR_SUMMARY_TITLE')} errors={errors} />
      <HeadingText headingCount={headingCount}>{children}{renderFeatures(props)}</HeadingText>
    </>
  )
}

export default withLang(PageHeading)

PageHeading.propTypes = {
  children: PropTypes.node,
  errors: errorsPropType,
  headingCount: PropTypes.object,
  notifyChildren: PropTypes.node,
  notifyHeading: PropTypes.string,
  notifyTitle: PropTypes.string,
  notifyType: PropTypes.string,
  renderFeatures: PropTypes.func,
  lang: PropTypes.string
}

PageHeading.defaultProps = {
  errors: [],
  notifyChildren: null,
  renderFeatures: () => { return null }
}
