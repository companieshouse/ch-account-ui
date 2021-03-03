import en from './lang/en.json'

const langPacks = {
  en
}

export const getStageFeatures = (lang = 'en', stage = '', featureName = '') => {
  if (!langPacks[lang]) {
    return [{
      feature: 'BodyText',
      children: `Cannot find langPack for lang "${lang}".`
    }]
  }

  if (!stage || !langPacks[lang][stage]) {
    return [{
      feature: 'BodyText',
      children: `Cannot find stage data for lang "${lang}" and stage "${stage}".  Either the journey page node has not been given a stage name or you are not correctly passing the stage name to the getStageFeatures(lang, stage, featureName) function!`
    }]
  }

  if (!featureName) {
    return langPacks[lang][stage]
  }

  if (!langPacks[lang][stage][featureName]) {
    return [{
      feature: 'BodyText',
      children: `No feature data for lang "${lang}", stage "${stage}" and featureName "${featureName}". Please check your stage data to ensure you have defined a feature with this name!`
    }]
  }

  return langPacks[lang][stage][featureName]
}
