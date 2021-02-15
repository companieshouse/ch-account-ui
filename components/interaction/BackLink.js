import React from 'react'

const BackLink = ({ children, href = '/', className = '' }) => {
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  return (
    <a href={href} className={`govuk-back-link ${finalClassName}`}>{children}</a>
  )
}

export default BackLink
