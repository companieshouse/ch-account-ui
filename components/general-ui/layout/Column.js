import PropTypes from 'prop-types'
import React from 'react'

const Column = (props) => {
  const { children, width = 'full', className = '', renderFeatures } = props
  const classes = [className]

  if (width === 'full') classes.push('govuk-grid-column-full')
  if (width === 'one-half') classes.push('govuk-grid-column-one-half')
  if (width === 'one-third') classes.push('govuk-grid-column-one-third')
  if (width === 'two-thirds') classes.push('govuk-grid-column-two-thirds')

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
