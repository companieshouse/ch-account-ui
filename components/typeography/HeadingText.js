import PropTypes from 'prop-types'
import React from 'react'
import HeadingCount from '../../services/HeadingCount'

const HeadingText = ({ type = '', label = '', size = 'xl', caption, children, className = '', headingCount, weight = 'bold' }) => {
  const [tag, setTag] = React.useState(type)
  const classes = [className]

  if (weight === 'regular') classes.push('govuk-!-font-weight-regular')
  if (weight === 'bold') classes.push('govuk-!-font-weight-bold')

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
    <>
      {Boolean(caption) === true && <span className="govuk-caption-xl">{caption}</span>}
      <HeadingTag className={`govuk-heading-${size} ${finalClassName}`}>{label}{children}</HeadingTag>
    </>
  )
}

export default HeadingText

HeadingText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  headingCount: PropTypes.instanceOf(HeadingCount),
  label: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  caption: PropTypes.string,
  weight: PropTypes.string
}

HeadingText.defaultProps = {
  className: '',
  label: '',
  size: 'xl',
  type: '',
  weight: 'bold'
}
