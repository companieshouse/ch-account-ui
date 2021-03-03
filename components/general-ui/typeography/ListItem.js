import PropTypes from 'prop-types'
import React from 'react'

const ListItem = (props) => {
  const { children, className = '', renderFeatures } = props
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  return (
    <li className={` ${finalClassName}`}>{children}{renderFeatures(props)}</li>
  )
}

export default ListItem

ListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  renderFeatures: PropTypes.func
}

ListItem.defaultProps = {
  className: '',
  renderFeatures: () => { return null }
}
