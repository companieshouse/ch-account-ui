import PropTypes from 'prop-types'
import React from 'react'
import HeadingText from '../general-ui/typeography/HeadingText'

const InfoBlock = (props) => {
  const { countHeadingType = 'h2', titleHeadingType = 'h3', count = '', title = '', children, className = '', renderFeatures } = props
  const classes = [className]

  const finalClassName = classes.join(' ').trim()

  return (
    <div className={`govuk-grid-column-one-third infoBlock ${finalClassName}`}>
      {Boolean(count) === true && <HeadingText type={countHeadingType} size="m">{count}</HeadingText>}
      {Boolean(title) === true && <HeadingText type={titleHeadingType} size="m">{title}</HeadingText>}
      {children}
      {renderFeatures(props)}
      <style jsx>{`
        .infoBlock {
          padding: 2em;
          height: 300px;
          width: 310px;
          margin-right: 10px;
          background-color: #f3f2f1;
        }
      `}</style>
    </div>
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
