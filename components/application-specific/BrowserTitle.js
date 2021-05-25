import PropTypes from 'prop-types'
import React from 'react'

const BrowserTitle = ({ title }) => {
  React.useEffect(() => {
    window.document.title = title
  })

  return null
}

export default BrowserTitle

BrowserTitle.propTypes = {
  children: PropTypes.node
}
