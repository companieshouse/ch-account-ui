import PropTypes from 'prop-types'
import React from 'react'

const Th = (props) => {
  const { children, className, scope = 'col', renderFeatures } = props
  const classes = ['govuk-table__header', className]
  const finalClassName = classes.join(' ').trim()
  return (
    <th scope={scope} className={finalClassName}>{children}{renderFeatures(props)}</th>
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
