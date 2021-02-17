import React from 'react'

const WidthContainer = ({ children, className = '' }) => {
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  return (
    <div className={`govuk-width-container ${finalClassName}`}>
      {children}
    </div>
  )
}

export default WidthContainer
