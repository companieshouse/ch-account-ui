import PropTypes from 'prop-types'
import React from 'react'
import HeadingCount from '../../services/HeadingCount'

const HeadingText = ({ type = '', label = '', size = 'xl', children, className = '', headingCount }) => {
  const [tag, setTag] = React.useState(type)
  const classes = [className]
  const finalClassName = classes.join(' ').trim()

  if (headingCount) {
    React.useEffect(() => {
      headingCount.use()
      setTag(`h${headingCount.count}`)
    })
  }

  if (!tag) return null

  const HeadingTag = `${tag}`

  return (
    <HeadingTag className={`govuk-heading-${size} ${finalClassName}`}>{label}{children}</HeadingTag>
  )
}

export default HeadingText

HeadingText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  headingCount: PropTypes.instanceOf(HeadingCount),
  label: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string
}

HeadingText.defaultProps = {
  className: '',
  label: '',
  size: 'xl',
  type: ''
}
