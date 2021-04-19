import PropTypes from 'prop-types'
import React from 'react'

const BoxCard = (props) => {
  const { children } = props

  return (
    <div className="boxCard">{children}</div>
  )
}

export default BoxCard

BoxCard.propTypes = {
  children: PropTypes.node
}
