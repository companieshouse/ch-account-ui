import PropTypes from 'prop-types'
import React from 'react'
import HeadingText from '../general-ui/typeography/HeadingText'
import Column from '../general-ui/layout/Column'
import BodyText from '../general-ui/typeography/BodyText'
import LinkText from '../general-ui/interaction/LinkText'

/*
  This component is a child component of InfoBlocks.js
  and wouldn't normally be used alone. If you are looking
  for a "card-like" box around some content, see BoxCard.js
 */

const InfoBlock = (props) => {
  const { count, countLabel, children, className, width, testId, header, href, headingCount } = props
  const classes = [className]

  const finalClassName = classes.join(' ').trim()

  return (
    <Column width={width} className={`infoBlock ${finalClassName}`}>
      <div id={testId} className="infoBlock__wrapper">
        <HeadingText headingCount={headingCount} size="m">
          <LinkText testId={`${testId}Link`} href={href}>{header}</LinkText>
        </HeadingText>
        {count !== undefined ? <BodyText className="infoBlock__count">{`${count} ${countLabel}`}</BodyText> : null}
        {children}
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
  countLabel: PropTypes.string,
  renderFeatures: PropTypes.func,
  title: PropTypes.string,
  titleHeadingType: PropTypes.string,
  width: PropTypes.string,
  testId: PropTypes.string,
  header: PropTypes.string,
  href: PropTypes.string,
  headingCount: PropTypes.string
}

InfoBlock.defaultProps = {
  className: '',
  countHeadingType: 'h2',
  renderFeatures: () => { return null },
  titleHeadingType: 'h3',
  title: '',
  width: 'one-third'
}
