import React from 'react'

const Column = ({ children, width = 'full', className = '' }) => {
  const classes = [className]

  if (width === 'full') classes.push('full')
  if (width === 'one-half') classes.push('one-half')
  if (width === 'one-third') classes.push('one-third')
  if (width === 'two-thirds') classes.push('two-thirds')

  const finalClassName = classes.join(' ').trim()

  return (
    <div className={`govuk-grid-column-${finalClassName}`}>
      {children}
    </div>
  )
}

export default Column
