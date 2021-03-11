import PropTypes from 'prop-types'
import React from 'react'

const BrowserTitle = ({ children }) => {
  React.useEffect(() => {
    window.document.title = children
  }, [])

  return null
}

export default BrowserTitle

BrowserTitle.propTypes = {
  children: PropTypes.node
}
