import PropTypes from 'prop-types'
import React from 'react'
import HeadingCount from '../../../services/HeadingCount'

const HeadingText = (props) => {
  const { type = '', label = '', size = 'xl', caption, children, className = '', headingCount, weight = 'bold', renderFeatures } = props
  const [tag, setTag] = React.useState(type)
  const classes = [className]

  if (weight === 'regular') classes.push('govuk-!-font-weight-regular')
  if (weight === 'bold') classes.push('govuk-!-font-weight-bold')

  const finalClassName = classes.join(' ').trim()

  if (headingCount && !type) {
    React.useEffect(() => {
      headingCount.use()
      setTag(`h${headingCount.count}`)
    }, [])
  }

  if (!tag) {
    console.warn("A HeadingText component was asked to render but didn't know what tag to use. Either pass a `headingCount` or a `type` prop.")
    return null
  }

  const HeadingTag = `${tag}`

  return (
    <>
      {Boolean(caption) === true && <span className="govuk-caption-xl">{caption}</span>}
      <HeadingTag className={`govuk-heading-${size} ${finalClassName}`}>{label}{children}{renderFeatures(props)}</HeadingTag>
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
  weight: PropTypes.string,
  renderFeatures: PropTypes.func
}

HeadingText.defaultProps = {
  className: '',
  label: '',
  size: 'xl',
  type: '',
  weight: 'bold',
  renderFeatures: () => { return null }
}
