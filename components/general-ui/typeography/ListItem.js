import PropTypes from 'prop-types'
import React from 'react'

const ListItem = ({ children, className = '' }) => {
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  return (
    <li className={` ${finalClassName}`}>{children}</li>
  )
}

export default ListItem

ListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

ListItem.defaultProps = {
  className: ''
}
