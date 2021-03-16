import PropTypes from 'prop-types'
import React from 'react'

const Tr = (props) => {
  const { children, renderFeatures } = props
  return (
      <tr className="govuk-table__row">{children}{renderFeatures(props)}</tr>
  )
}

export default Tr

Tr.propTypes = {
  children: PropTypes.node,
  renderFeatures: PropTypes.func
}

Tr.defaultProps = {
  renderFeatures: () => { return null }
}
