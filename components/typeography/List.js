import React from 'react'

const List = ({ type = 'bullet', children, className = '' }) => {
  const classes = [className]
  if (type === 'bullet') classes.push('govuk-list--bullet')

  const finalClassName = classes.join(' ').trim()

  return (
    <ul className={`govuk-list ${finalClassName}`}>
      {children}
    </ul>
  )
}

export default List
