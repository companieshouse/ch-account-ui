import PropTypes from 'prop-types'
import React from 'react'

const Main = ({ children, className = '' }) => {
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  return (
    <main id="content" className={`govuk-main-wrapper ${finalClassName}`}>
      {children}
    </main>
  )
}

export default Main

Main.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

Main.defaultProps = {
  className: ''
}
