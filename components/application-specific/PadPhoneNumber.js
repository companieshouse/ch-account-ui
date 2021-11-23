import PropTypes from 'prop-types'
import React from 'react'

const PadPhoneNumber = ({ phoneNumber = '' }) => {
  if (!phoneNumber) return null

  phoneNumber = phoneNumber.replace(/\s/g, '')

  if (phoneNumber.length > 5) {
    phoneNumber = phoneNumber.substring(0, 5).concat(' ') + phoneNumber.substring(5)
  }

  if (phoneNumber.length > 9) {
    phoneNumber = phoneNumber.substring(0, 9).concat(' ') + phoneNumber.substring(9)
  }

  return (
    <>{phoneNumber}</>
  )
}

export default PadPhoneNumber

PadPhoneNumber.propTypes = {
  phoneNumber: PropTypes.string
}

PadPhoneNumber.defaultProps = {
  phoneNumber: ''
}
