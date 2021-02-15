import React from 'react'

const HeadingText = ({ type = 'h1', label = '', size = 'xl', children, className = '' }) => {
  const classes = [className]
  const finalClassName = classes.join(' ').trim()
  const HeadingTag = `${type}`

  return (
    <HeadingTag className={`govuk-heading-${size} ${finalClassName}`}>{label}{children}</HeadingTag>
  )
}

export default HeadingText
