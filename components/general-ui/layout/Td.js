import PropTypes from 'prop-types'
import React from 'react'

const Td = (props) => {
  const { children, renderFeatures, ...rest } = props
  return (
    <td className="govuk-table__cell" {...rest}>{children}{renderFeatures(props)}</td>
  )
}

export default Td

Td.propTypes = {
  children: PropTypes.node,
  renderFeatures: PropTypes.func
}

Td.defaultProps = {
  renderFeatures: () => { return null }
}
