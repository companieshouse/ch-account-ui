import React from 'react'

const Th = ({ children, scope = 'col' }) => {
  return (
    <th scope={scope} className="govuk-table__header">{children}</th>
  )
}

export default Th
