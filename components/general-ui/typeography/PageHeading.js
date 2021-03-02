import PropTypes from 'prop-types'
import React from 'react'
import HeadingText from './HeadingText'
import ErrorSummary from './ErrorSummary'

const PageHeading = ({ headingCount, errors = [], children }) => {
  if (errors.length === 0) {
    return <HeadingText headingCount={headingCount}>{children}</HeadingText>
  }

  return (
    <>
      <ErrorSummary headingCount={headingCount} title="There is a problem" errors={errors}/>
      <HeadingText headingCount={headingCount}>{children}</HeadingText>
    </>
  )
}

export default PageHeading

PageHeading.propTypes = {
  children: PropTypes.node,
  errors: PropTypes.array,
  headingCount: PropTypes.object
}

PageHeading.defaultProps = {
  errors: []
}
