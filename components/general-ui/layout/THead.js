import PropTypes from 'prop-types'
import React from 'react'

const THead = (props) => {
  const { children, renderFeatures } = props
  return (
    <thead className="govuk-table__head">{children}{renderFeatures(props)}</thead>
  )
}

export default THead

THead.propTypes = {
  children: PropTypes.node,
  renderFeatures: PropTypes.func
}

THead.defaultProps = {
  renderFeatures: () => { return null }
}
