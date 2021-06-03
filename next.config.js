const withTM = require('next-transpile-modules')(['@irrelon/path'])

const BASE_PATH = process.env.BASE_PATH
const FORGEROCK_AM = process.env.FORGEROCK_AM
const FORGEROCK_REALM = process.env.FORGEROCK_REALM
const FORGEROCK_SCOPE = process.env.FORGEROCK_SCOPE
const FORGEROCK_CLIENT_ID = process.env.FORGEROCK_CLIENT_ID
const FORGEROCK_REDIRECT = process.env.FORGEROCK_REDIRECT
const FORGEROCK_COMPANY_ENDPOINT = process.env.FORGEROCK_COMPANY_ENDPOINT
const FORGEROCK_USER_ENDPOINT = process.env.FORGEROCK_USER_ENDPOINT

module.exports = withTM({
  env: {
    BASE_PATH,
    FORGEROCK_AM,
    FORGEROCK_REALM,
    FORGEROCK_SCOPE,
    FORGEROCK_CLIENT_ID,
    FORGEROCK_REDIRECT,
    FORGEROCK_COMPANY_ENDPOINT,
    FORGEROCK_USER_ENDPOINT
  },
  future: {
    webpack5: true
  },
  basePath: BASE_PATH,
  trailingSlash: true,
  reactStrictMode: true
})
