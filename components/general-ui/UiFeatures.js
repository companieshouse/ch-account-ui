import PropTypes from 'prop-types'
import React from 'react'
import Button from './interaction/Button'
import HeadingText from './typeography/HeadingText'
import BodyText from './typeography/BodyText'
import LinkText from './interaction/LinkText'
import DisplayUiElements from '../forgerock-ui/DisplayUiElements'
import PageHeading from './typeography/PageHeading'

const featureMap = {
  Button,
  HeadingText,
  BodyText,
  LinkText,
  DisplayUiElements,
  PageHeading
}

const UiFeatures = (props) => {
  const uiStage = props.uiStage
  const { uiFeatures = [], ...otherProps } = props

  if (!uiFeatures.length) return null

  if (!uiStage) console.warn('The stage name has not been set for this page in ForgeRock. The page may not render the correct text or title!')

  return (
    <>
      {uiFeatures.map((feature, index) => {
        const FeatureClass = featureMap[feature.feature]

        if (!FeatureClass) {
          return <div key={`${uiStage}_${feature.feature}_${index}`}>Unknown feature &quot;{feature.feature}&quot;</div>
        }

        return <FeatureClass key={`${uiStage}_${feature.feature}_${index}`} {...otherProps} {...feature.props}>{feature.children}</FeatureClass>
      })}
    </>
  )
}

export default UiFeatures

UiFeatures.propTypes = {
  uiFeatures: PropTypes.array,
  uiStage: PropTypes.string
}

UiFeatures.defaultProps = {
  uiFeatures: [],
  uiStage: ''
}
