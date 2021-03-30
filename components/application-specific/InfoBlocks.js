import PropTypes from 'prop-types'
import React from 'react'
import InfoBlock from './InfoBlock'

const InfoBlocks = (props) => {
  const { blocks = [], children, className = '', renderFeatures } = props
  const classes = [className]

  const finalClassName = classes.join(' ').trim()

  return (
    <div className={`govuk-grid-row ${finalClassName}`}>
      {blocks.map(({ count, title, props: blockProps, children: blockChildren }, index) => <InfoBlock key={index} count={count} title={title} {...blockProps}>{blockChildren}</InfoBlock>)}
      {children}
      {renderFeatures(props)}
    </div>
  )
}

export default InfoBlocks

InfoBlocks.propTypes = {
  blocks: PropTypes.array,
  children: PropTypes.node,
  className: PropTypes.string,
  renderFeatures: PropTypes.func
}

InfoBlocks.defaultProps = {
  blocks: [],
  className: ''
}
