import React from 'react'

const Row = ({ children, className = '' }) => {
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  return (
    <div className={`govuk-grid-row ${finalClassName}`}>
      {children}
    </div>
  )
}

export default Row
