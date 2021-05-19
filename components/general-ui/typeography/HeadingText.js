import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import HeadingCount from '../../../services/HeadingCount'

const HeadingText = (props) => {
  const { type, label, size, caption, children, className, headingCount, weight, renderFeatures, anchor } = props
  const headingEl = useRef(null)

  const [tag, setTag] = React.useState(type)
  const classes = [className]

  if (weight === 'regular') classes.push('govuk-!-font-weight-regular')
  if (weight === 'bold') classes.push('govuk-!-font-weight-bold')

  const finalClassName = classes.join(' ').trim()

  React.useEffect(() => {
    if (anchor && headingEl.current) {
      const hash = window.location.hash.replace('#', '')
      if (hash === anchor) {
        headingEl.current.scrollIntoView({ behavior: 'smooth' })
        headingEl.current.focus()
      }
    }
  })

  React.useEffect(() => {
    if (headingCount && !type) {
      headingCount.use()
      setTag(`h${headingCount.count}`)
    }
  }, [headingCount, type])

  if (!tag) {
    console.warn("A HeadingText component was asked to render but didn't know what tag to use. Either pass a `headingCount` or a `type` prop.")
    return null
  }

  const HeadingTag = `${tag}`

  return (
    <>
      {Boolean(caption) === true && <span className="govuk-caption-xl">{caption}</span>}
      <HeadingTag ref={headingEl} className={`govuk-heading-${size} ${finalClassName}`}>{label}{children}{renderFeatures(props)}</HeadingTag>
    </>
  )
}

export default HeadingText

HeadingText.propTypes = {
  anchor: PropTypes.string,
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
