import PropTypes from 'prop-types'
import React from 'react'

const Table = (props) => {
  const { caption, children, renderFeatures } = props
  return (
    <table className="govuk-table">
      <caption className="govuk-table__caption govuk-table__caption--m">{caption}</caption>
      {children}
      {renderFeatures(props)}
    </table>
  )
}

export default Table

Table.propTypes = {
  caption: PropTypes.node,
  children: PropTypes.node,
  renderFeatures: PropTypes.func
}

Table.defaultProps = {
  renderFeatures: () => { return null }
}
