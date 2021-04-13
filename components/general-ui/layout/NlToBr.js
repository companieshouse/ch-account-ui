import PropTypes from 'prop-types'
import React from 'react'

const NlToBr = (props) => {
  const { content = '', renderFeatures } = props
  const contentArr = content.split('\n')

  return (
    <>
      {contentArr.map((contentItem, index) => <React.Fragment key={index}>{contentItem}<br /></React.Fragment>)}
      {renderFeatures(props)}
    </>
  )
}

export default NlToBr

NlToBr.propTypes = {
  content: PropTypes.string,
  renderFeatures: PropTypes.func
}

NlToBr.defaultProps = {
  renderFeatures: () => { return null }
}
