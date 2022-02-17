import PropTypes from 'prop-types'
import React from 'react'

const PadPhoneNumber = ({ phoneNumber = '' }) => {
  if (!phoneNumber) {
    return phoneNumber
  }

  phoneNumber = phoneNumber.replace(/\s/g, '')

  phoneNumber = phoneNumber.split('').reverse().join('')

  if (phoneNumber.length > 6) {
    phoneNumber = phoneNumber.substring(0, 6).concat(' ') + phoneNumber.substring(6)
  }

  if (phoneNumber.length > 3) {
    phoneNumber = phoneNumber.substring(0, 3).concat(' ') + phoneNumber.substring(3)
  }

  phoneNumber = phoneNumber.split('').reverse().join('')

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
