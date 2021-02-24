import PropTypes from 'prop-types'
import React from 'react'

const List = ({ type = 'bullet', children, className = '' }) => {
  const classes = [className]
  if (type === 'bullet') classes.push('govuk-list--bullet')
  if (type === 'number') classes.push('govuk-list--number')

  const finalClassName = classes.join(' ').trim()

  return (
    <ul className={`govuk-list ${finalClassName}`}>
      {children}
    </ul>
  )
}

export default List

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string
}

List.defaultProps = {
  className: '',
  type: 'bullet'
}
