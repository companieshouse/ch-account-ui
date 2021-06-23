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
  const { countHeadingType, titleHeadingType, count, title, children, className, renderFeatures, width } = props
  const classes = [className]

  const finalClassName = classes.join(' ').trim()

  return (
    <Column width={width} className={`infoBlock ${finalClassName}`}>
      <div className="infoBlock__wrapper">
        {count && <HeadingText className="infoBlock__count" type={countHeadingType} size="l">{count}</HeadingText>}
        {title !== '' && <HeadingText type={titleHeadingType} size="l">{title}</HeadingText>}
        {children}
        {renderFeatures(props)}
      </div>
    </Column>
  )
}

export default InfoBlock

InfoBlock.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  count: PropTypes.number,
  countHeadingType: PropTypes.string,
  renderFeatures: PropTypes.func,
  title: PropTypes.string,
  titleHeadingType: PropTypes.string,
  width: PropTypes.string
}

InfoBlock.defaultProps = {
  className: '',
  countHeadingType: 'h2',
  renderFeatures: () => { return null },
  titleHeadingType: 'h3',
  title: '',
  width: 'one-third'
}
