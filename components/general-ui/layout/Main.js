import PropTypes from 'prop-types'
import React from 'react'

const Main = (props) => {
  const { children, className = '', renderFeatures } = props
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  return (
    <main id="content" className={`govuk-main-wrapper ${finalClassName}`}>
      {children}
      {renderFeatures(props)}
    </main>
  )
}

export default Main

Main.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  renderFeatures: PropTypes.func
}

Main.defaultProps = {
  className: '',
  renderFeatures: () => { return null }
}
