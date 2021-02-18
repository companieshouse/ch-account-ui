import React from 'react'

const Table = ({ caption, children }) => {
  return (
    <table className="govuk-table">
      <caption className="govuk-table__caption govuk-table__caption--m">{caption}</caption>
      {children}
    </table>
  )
}

export default Table
