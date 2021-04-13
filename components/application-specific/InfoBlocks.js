import PropTypes from 'prop-types'
import React from 'react'
import InfoBlock from './InfoBlock'
import Row from '../general-ui/layout/Row'

const InfoBlocks = (props) => {
  const { blocks = [], children, className = '', renderFeatures } = props
  const classes = [className]

  const finalClassName = classes.join(' ').trim()

  return (
    <Row className={finalClassName}>
      {blocks.map(({ count, title, props: blockProps, children: blockChildren }, index) => <InfoBlock key={index} count={count} title={title} {...blockProps}>{blockChildren}</InfoBlock>)}
      {children}
      {renderFeatures(props)}
    </Row>
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
  className: '',
  renderFeatures: () => {}
}
