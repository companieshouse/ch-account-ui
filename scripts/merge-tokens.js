const fs = require('fs')

const cyTokens = require('../services/lang/cy/content-tokens.json')
const currentTokens = require('../services/lang/en/content-tokens.json')

const mergedTokens = {}

Object.keys(cyTokens).forEach((key) => {
  mergedTokens[key] = { en: currentTokens[key], cy: cyTokens[key] }
})

console.log(mergedTokens)
fs.writeFileSync('../services/lang/content-tokens-cy.json', JSON.stringify(mergedTokens, null, 4))
