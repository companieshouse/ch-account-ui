import React from 'react'

const Column = ({ children, width = 'full', className = '' }) => {
  const classes = [className]

  if (width === 'full') classes.push('govuk-grid-column-full')
  if (width === 'one-half') classes.push('govuk-grid-column-one-half')
  if (width === 'one-third') classes.push('govuk-grid-column-one-third')
  if (width === 'two-thirds') classes.push('govuk-grid-column-two-thirds')

  const finalClassName = classes.join(' ').trim()

  return (
    <div className={finalClassName}>
      {children}
    </div>
  )
}

export default Column
