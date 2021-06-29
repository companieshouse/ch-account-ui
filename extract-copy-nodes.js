// node --experimental-json-modules extract-copy-nodes.js
import features from './services/lang/en/retired-stages/features.js'
import set from 'lodash.set'
import camelCase from 'lodash.camelcase'
import findKey from 'lodash.findkey'
import fs from 'fs'

const keys = { }
const imports = []
const tokenisedStages = {}

const flatten = function (data) {
  const result = {}
  function recurse (cur, prop) {
    if (Object(cur) !== cur) {
      result[prop] = cur
    } else if (Array.isArray(cur)) {
      for (var i = 0, l = cur.length; i < l; i++) { recurse(cur[i], prop + '[' + i + ']') }
      if (l == 0) { result[prop] = [] }
    } else {
      let isEmpty = true
      for (const p in cur) {
        isEmpty = false
        recurse(cur[p], prop ? prop + '.' + p : p)
      }
      if (isEmpty && prop) { result[prop] = {} }
    }
  }
  recurse(data, '')
  return result
}

const validateProp = (key) => {
  const invalidProps = ['.children', '.label', '.hint', '.title', '.heading', '.summary']
  for (const prop of invalidProps) {
    if (key.endsWith(prop)) {
      return true
    }
  }
  return false
}

function getKeyByValue (object, value) {
  return Object.keys(object).find(key => object[key] === value)
}

function order (unordered) {
  return Object.keys(unordered).sort().reduce(
    (obj, key) => {
      obj[key] = unordered[key]
      return obj
    },
    {}
  )
}

function find (obj, item) {
  for (const key in obj) {
    if (obj[key] && typeof obj[key] === 'object') {
      const result = find(obj[key], item)
      if (result) {
        result.unshift(key)
        return result
      }
    } else if (obj[key] === item) {
      return [key]
    }
  }
}

function createTokenName (value) {
  const camelCaseValue = camelCase(value)
  let cropped = camelCaseValue.substring(0, 45)
  const wordBoundaries = cropped.match(/[A-Z]/g)
  if (wordBoundaries?.length && value.length > 45) {
    cropped = cropped.substring(0, cropped.lastIndexOf(wordBoundaries.pop()))
  }
  return cropped
}

const replaceInStages = (stages, value, newValue) => {
  Object.keys(stages).forEach((key) => {
    const stage = stages[key]

    const path = find(stage, value)
    if (path) {
      console.log(newValue)
      set(stage, path.join('.'), newValue)
    }
  })

  return stages
}

// Loop through all the current features
Object.keys(features).forEach((key) => {
  const stage = features[key]
  const tokenisedStage = stage
  // keys = { ...flatten(stage), ...keys }

  stage.forEach((componentDefinition, index) => {
    const tokenisedComponentDefinition = componentDefinition
    const prefix = `${key}.[${index}]`
    const componentName = componentDefinition.component
    const nodes = flatten(componentDefinition)
    const copyNodes = Object.keys(nodes)
      .filter((key) => {
        if (!validateProp(key)) {
          return false
        }

        if (key === 'component') {
          return false
        }
        return true
      })
      .reduce((obj, key) => {
        obj[key] = nodes[key]
        return obj
      }, {})

    // Replace values with tokens in the cloned definition
    Object.keys(copyNodes).map((key) => {
      const value = copyNodes[key]
      if (!value) {
        return
      }

      // Check if the value exists in the current keys
      const existingToken = getKeyByValue(keys, value)

      if (existingToken) {
        // If it already exists as a shared token set as this
        if (existingToken.startsWith('SHARED.')) {
          set(tokenisedComponentDefinition, key, `tokenStart//tokens['${existingToken}']//tokenEnd`)
        } else {
          // If it exists as a unique token create a SHARED one, set it, replace in keys and update the previous stages
          const sharedToken = `SHARED.${createTokenName(value).substring(0, 45)}`
          const sharedPlaceholder = `tokenStart//tokens['${sharedToken}']//tokenEnd`
          set(tokenisedComponentDefinition, key, sharedPlaceholder)
          delete keys[existingToken]

          const uniquePlaceholder = `tokenStart//tokens['${existingToken}']//tokenEnd`
          replaceInStages(tokenisedStages, uniquePlaceholder, sharedPlaceholder)
          keys[sharedToken] = value
        }
      } else {
        // If it's unique create the key and set
        const uniqueToken = `${prefix}.${componentName}.${createTokenName(value).substring(0, 45)}`
        const uniquePlaceholder = `tokenStart//tokens['${uniqueToken}']//tokenEnd`
        set(tokenisedComponentDefinition, key, uniquePlaceholder)
        keys[uniqueToken] = value
      }
    })
    tokenisedStage[index] = tokenisedComponentDefinition
  })

  tokenisedStages[key] = tokenisedStage
})

// Write all the tokenised stages to file
Object.keys(tokenisedStages).forEach((key) => {
  const stage = tokenisedStages[key]
  // Write the stage to a JS file and replace the tokens placeholder with refs
  const data = JSON.stringify(stage, null, 2)
  const jsData = data.replace(/"tokenStart\/\/(.*)\/\/tokenEnd"/g, '$1')
  const template = `
  const ${key} = (lang, tokens) => ${jsData}
  export default ${key}
  `
  fs.writeFileSync(`./services/stages/${key}.js`, template)

  imports.push({ key, fileName: `../../stages/${key}.js` })
})

// Write all the generated tokens to a file
fs.writeFileSync('./services/lang/en/content-tokens.json', JSON.stringify(order(keys), null, 4))

// Write the imports to console for copy and paste
imports.forEach((importFile) => {
  console.log(`import ${importFile.key} from './${importFile.key}.js'`)
})
imports.forEach((importFile) => {
  console.log(`${importFile.key},`)
})
