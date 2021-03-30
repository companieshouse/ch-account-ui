import enFeatures from './lang/en/features.json'
import enTokens from './lang/en/tokens.json'

import cyFeatures from './lang/cy/features.json'
import cyTokens from './lang/cy/tokens.json'

const features = {
  en: enFeatures,
  cy: cyFeatures
}

const tokens = {
  en: enTokens,
  cy: cyTokens
}

export const getStageFeatures = (lang = 'en', stage = '', featureName = '') => {
  if (!features[lang]) {
    return [{
      feature: 'BodyText',
      children: `Cannot find features for lang "${lang}".`
    }, {
      feature: 'DisplayUiElements'
    }]
  }

  if (!stage || !features[lang][stage]) {
    return [{
      feature: 'BodyText',
      children: `Cannot find stage data for lang "${lang}" and stage "${stage}".  Either the journey page node has not been given a stage name or you are not correctly passing the stage name to the getStageFeatures(lang, stage, featureName) function!`
    }, {
      feature: 'DisplayUiElements'
    }]
  }

  if (!featureName) {
    return features[lang][stage]
  }

  if (!features[lang][stage][featureName]) {
    return [{
      feature: 'BodyText',
      children: `No feature data for lang "${lang}", stage "${stage}" and featureName "${featureName}". Please check your stage data to ensure you have defined a feature with this name!`
    }, {
      feature: 'DisplayUiElements'
    }]
  }

  return features[lang][stage][featureName]
}

/**
 * Converts a token to the corresponding human-readable string for the
 * given language.
 * @param {String} lang The language to use when translating.
 * @param {String} token The token to translate.
 * @param {String} [defaultErrorValue] The error to provide if either the
 * language or the token do not exist.
 * @returns {String} The human-readable translated token string.
 */
export const translate = (lang, token, defaultErrorValue = undefined) => {
  if (!tokens[lang]) {
    return defaultErrorValue !== undefined ? defaultErrorValue : `Translation tokens missing for lang "${lang}". Please check /services/lang/${lang}/tokens.json to make sure the file exists!`
  }

  if (tokens[lang][token] === undefined) {
    return defaultErrorValue !== undefined ? defaultErrorValue : `Translation text missing for lang "${lang}" and token "${token}". Please check /services/lang/${lang}/tokens.json to ensure you have defined a token with this name!`
  }

  return tokens[lang][token]
}
