import PropTypes from 'prop-types'
import React from 'react'

const transform = (translationString, data) => {
  let finalTranslation = translationString

  if (translationString && translationString.indexOf('${')) {
    // Break out the data requests and render the data in place of tokens
    const regexp = /\${([\s\S]+?)}/g
    let matches

    while ((matches = regexp.exec(translationString))) {
      const matchString = matches[0]
      const dataPath = matches[1]

      finalTranslation = finalTranslation.replace(matchString, data[dataPath])
    }
  }
}

const TemplateText = (props) => {
  const { children, template = '', renderFeatures } = props
  const transformedText = transform(template)

  return (
    <>
      {children}
      {transformedText}
      {renderFeatures(props)}
    </>
  )
}

export default TemplateText

TemplateText.propTypes = {
  template: PropTypes.string.isRequired,
  children: PropTypes.node,
  renderFeatures: PropTypes.func
}

TemplateText.defaultProps = {
  template: '',
  renderFeatures: () => { return null }
}
