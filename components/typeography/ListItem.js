import React from 'react'

const ListItem = ({ type = 'text', children, className = '' }) => {
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  return (
    <li className={` ${finalClassName}`}>{children}</li>
  )
}

export default ListItem
