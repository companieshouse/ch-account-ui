import React from 'react'

const InsetText = ({ children, className = '' }) => {
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  return (
    <div className={`govuk-inset-text ${finalClassName}`}>
      {children}
    </div>
  )
}

export default InsetText
