import PropTypes from 'prop-types'
import React from 'react'
import HeadingText from '../general-ui/typeography/HeadingText'
import Column from '../general-ui/layout/Column'

/*
  This component is a child component of InfoBlocks.js
  and wouldn't normally be used alone. If you are looking
  for a "card-like" box around some content, see BoxCard.js
 */

const InfoBlock = (props) => {
  const { countHeadingType = 'h2', titleHeadingType = 'h3', count = '', title = '', children, className = '', renderFeatures } = props
  const classes = [className]

  const finalClassName = classes.join(' ').trim()

  return (
    <Column width="one-third" className={`infoBlock ${finalClassName}`}>
      {count !== '' && <HeadingText type={countHeadingType} size="m">{count}</HeadingText>}
      {title !== '' && <HeadingText type={titleHeadingType} size="m">{title}</HeadingText>}
      {children}
      {renderFeatures(props)}
    </Column>
  )
}

export default InfoBlock

InfoBlock.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  count: PropTypes.string,
  countHeadingType: PropTypes.string,
  renderFeatures: PropTypes.func,
  title: PropTypes.string,
  titleHeadingType: PropTypes.string
}

InfoBlock.defaultProps = {
  className: '',
  countHeadingType: 'h2',
  renderFeatures: () => { return null },
  titleHeadingType: 'h3',
  count: '',
  title: ''
}
