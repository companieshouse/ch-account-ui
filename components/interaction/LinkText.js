import React from 'react'

const LinkText = ({ children, href = '/', className = '' }) => {
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  return (
    <a href={href} className={`govuk-link ${finalClassName}`}>{children}</a>
  )
}

export default LinkText
