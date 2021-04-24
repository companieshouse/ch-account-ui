import PropTypes from 'prop-types'
import React from 'react'

const ObfuscatePhoneNumber = ({ phoneNumber = '' }) => {
  if (!phoneNumber) return null

  return (
    <>{new Array(phoneNumber.length - 4).fill('X').join('')}{phoneNumber.slice(-4)}</>
  )
}

export default ObfuscatePhoneNumber

ObfuscatePhoneNumber.propTypes = {
  phoneNumber: PropTypes.string
}

ObfuscatePhoneNumber.defaultProps = {
  phoneNumber: ''
}
