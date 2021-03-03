import PropTypes from 'prop-types'
import React from 'react'
import Button from './interaction/Button'
import HeadingText from './typeography/HeadingText'
import BodyText from './typeography/BodyText'
import LinkText from './interaction/LinkText'
import DisplayUiElements from '../forgerock-ui/DisplayUiElements'
import PageHeading from './typeography/PageHeading'
import List from './typeography/List'
import InsetText from './typeography/InsetText'
import Details from './typeography/Details'
import TemplateText from './typeography/TemplateText'
import SpanText from './typeography/SpanText'
import NotificationBanner from './typeography/NotificationBanner'

const featureMap = {
  Button,
  HeadingText,
  BodyText,
  SpanText,
  LinkText,
  DisplayUiElements,
  PageHeading,
  List,
  InsetText,
  Details,
  TemplateText,
  NotificationBanner
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
          return <div key={`${uiStage}_${feature.feature}_${index}`}>Unknown feature &quot;{feature.feature}&quot; - please open ./components/general-ui/UiFeatures and add the {feature.feature} component to the featureMap object to enable rendering this feature.</div>
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