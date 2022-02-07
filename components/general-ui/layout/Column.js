import PropTypes from 'prop-types'
import React from 'react'

const Column = (props) => {
  const { children, width = 'full', className = '', renderFeatures, utilClass = '' } = props
  const classes = [className]

  if (width) classes.push(`govuk-grid-column-${width}`)

  if (utilClass) classes.push(utilClass)

  const finalClassName = classes.join(' ').trim()

  return (
    <div className={finalClassName}>
      {children}
      {renderFeatures(props)}
    </div>
  )
}

export default Column

Column.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  renderFeatures: PropTypes.func,
  width: PropTypes.string
}

Column.defaultProps = {
  className: '',
  renderFeatures: () => { return null },
  width: 'full'
}
