import PropTypes from 'prop-types'
import React from 'react'

const Td = (props) => {
  const { children, renderFeatures, width } = props
  const className = width ? `govuk-table__cell govuk-!-width-${width}` : 'govuk-table__cell'
  return (
    <td className={className}>{children}{renderFeatures(props)}</td>
  )
}

export default Td

Td.propTypes = {
  children: PropTypes.node,
  renderFeatures: PropTypes.func,
  width: PropTypes.string
}

Td.defaultProps = {
  renderFeatures: () => { return null }
}
