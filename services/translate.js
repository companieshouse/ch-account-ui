import getStage from './stages/stages'
import tokens from './lang/tokens.json'
import log from './log'

/**
 * Returns object containing the static stage definition populated with translated tokens
 * @param lang The language to use when populating tokens
 * @param stage The stage key to get
 * @returns {[{feature: string, props: {children: string}}, {component: string, feature: string}]|*}
 */
export const getStageFeatures = (lang = 'en', stage = '') => {
  const stageFeatures = getStage(stage, lang)

  if (!stageFeatures) {
    return [{
      feature: 'BodyText',
      props: {
        children: `Cannot find stage data for stage "${stage}".  Either the journey page node has not been given a stage name or you are not correctly passing the stage name to the getStageFeatures(lang, stage) function!`
      }
    }, {
      feature: 'DisplayUiElements',
      component: 'DisplayUiElements'
    }]
  }

  return stageFeatures
}

/**
 * Converts a dynamic token to the corresponding human-readable string for the
 * given language.
 * @param {String} lang The language to use when translating.
 * @param {String} token The token to translate.
 * @param {String} [defaultErrorValue] The error to provide if either the
 * language or the token do not exist.
 * @returns {String} The human-readable translated token string.
 */
export const translate = (lang, token, defaultErrorValue = undefined) => {
  if (!tokens[token] || !tokens[token][lang]) {
    log.warn(`Missing token for lang: ${lang} token: ${token}`)
    return defaultErrorValue !== undefined ? defaultErrorValue : `Translation text missing for lang "${lang}" and token "${token}". Please check /services/lang/${lang}/tokens.json to ensure you have defined a token with this name!`
  }

  return tokens[token][lang]
}
