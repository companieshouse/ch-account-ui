import React from 'react'
import Link from 'next/link'

const LinkText = ({ children, href = '/', className = '' }) => {
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  return (
    <Link href={href}>
      <a className={`govuk-link ${finalClassName}`}>{children}</a>
    </Link>
  )
}

export default LinkText
