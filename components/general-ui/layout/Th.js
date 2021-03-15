import PropTypes from 'prop-types'
import React from 'react'

const Th = (props) => {
  const { children, scope = 'col', renderFeatures } = props
  return (
    <th scope={scope} className="govuk-table__header">{children}{renderFeatures(props)}</th>
  )
}

export default Th

Th.propTypes = {
  children: PropTypes.node,
  renderFeatures: PropTypes.func,
  scope: PropTypes.string
}

Th.defaultProps = {
  renderFeatures: () => { return null },
  scope: 'col'
}
