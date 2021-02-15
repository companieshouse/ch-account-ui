import React from 'react'

const Column = ({ children, type = 'full', className = '' }) => {
  const classes = [className]

  if (type === 'full') classes.push('full')
  if (type === 'one-half') classes.push('one-half')
  if (type === 'two-thirds') classes.push('two-thirds')

  const finalClassName = classes.join(' ').trim()

  return (
    <div className={`govuk-grid-column-${finalClassName}`}>
      {children}
    </div>
  )
}

export default Column
