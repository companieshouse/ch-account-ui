import PropTypes from 'prop-types'
import React from 'react'
import HeadingText from './HeadingText'
import ErrorSummary from './ErrorSummary'
import NotificationBanner from './NotificationBanner'

const PageHeading = (props) => {
  const { headingCount, errors = [], children, renderFeatures, notifyType, notifyHeading, notifyTitle, notifyChildren = null } = props

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
      <ErrorSummary headingCount={headingCount} title="There is a problem" errors={errors}/>
      <HeadingText headingCount={headingCount}>{children}{renderFeatures(props)}</HeadingText>
    </>
  )
}

export default PageHeading

PageHeading.propTypes = {
  children: PropTypes.node,
  errors: PropTypes.array,
  headingCount: PropTypes.object,
  renderFeatures: PropTypes.func
}

PageHeading.defaultProps = {
  errors: [],
  renderFeatures: () => { return null }
}
