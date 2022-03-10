import PropTypes from 'prop-types'
import React from 'react'

const Td = (props) => {
  const { children, className, renderFeatures, width, utilClass = '' } = props
  const classes = ['govuk-table__cell', className]
  width && classes.push(`govuk-table__cell govuk-!-width-${width}`)
  const finalClassName = classes.join(' ').trim()
  if (utilClass) classes.push(utilClass)

  return (
    <td className={finalClassName}>{children}{renderFeatures(props)}</td>
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
