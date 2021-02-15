import React from 'react'

const BodyText = ({ label = '', children, hint = false, className = '' }) => {
  const classes = [className]

  if (hint === true) classes.push('govuk-hint')

  const finalClassName = classes.join(' ').trim()

  return (
    <p className={`govuk-body ${finalClassName}`}>{label}{children}</p>
  )
}

export default BodyText
