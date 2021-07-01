import PropTypes from 'prop-types'
import React from 'react'

const BrowserTitle = ({ title }) => {
  React.useEffect(() => {
    window.document.title = title + ' - Companies House WebFiling account - GOV.UK'
  })

  return null
}

export default BrowserTitle

BrowserTitle.propTypes = {
  children: PropTypes.node
}
