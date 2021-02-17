import React from 'react'

const Main = ({ children, className = '' }) => {
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  return (
    <main className={`govuk-main-wrapper ${finalClassName}`}>
      {children}
    </main>
  )
}

export default Main
