import PropTypes from 'prop-types'
import React from 'react'

const Br = ({ className = '', style }) => {
  return (
    <br className={className} style={style} />
  )
}

export default Br

Br.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

Br.defaultProps = {
  className: ''
}
