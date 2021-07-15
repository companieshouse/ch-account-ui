import React from 'react'
import PropTypes from 'prop-types'

const SectionBreak = ({ size }) => {
  return (
    <hr className={`govuk-section-break govuk-section-break--${size} govuk-section-break--visible`} />
  )
}

SectionBreak.propTypes = {
  size: PropTypes.string
}

SectionBreak.defaultProps = {
  size: 'm'
}

export default SectionBreak
