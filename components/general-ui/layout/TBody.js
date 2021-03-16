import PropTypes from 'prop-types'
import React from 'react'

const TBody = (props) => {
  const { children, renderFeatures } = props
  return (
    <tbody className="govuk-table__body">{children}{renderFeatures(props)}</tbody>
  )
}

export default TBody

TBody.propTypes = {
  children: PropTypes.node,
  renderFeatures: PropTypes.func
}

TBody.defaultProps = {
  renderFeatures: () => { return null }
}
