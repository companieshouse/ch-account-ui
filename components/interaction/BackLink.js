import React from 'react'
import Link from 'next/link'

const BackLink = ({ children, href = '/', className = '' }) => {
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  return (
    <Link href={href}>
      <a className={`govuk-back-link ${finalClassName}`}>{children}</a>
    </Link>
  )
}

export default BackLink
