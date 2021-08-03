const withTM = require('next-transpile-modules')(['@irrelon/path'])

const BASE_PATH = process.env.BASE_PATH
const ENVIRONMENT = process.env.ENVIRONMENT
const FORGEROCK_AM = process.env.FORGEROCK_AM
const FORGEROCK_REALM = process.env.FORGEROCK_REALM
const FORGEROCK_SCOPE = process.env.FORGEROCK_SCOPE
const FORGEROCK_CLIENT_ID = process.env.FORGEROCK_CLIENT_ID
const FORGEROCK_REDIRECT = process.env.FORGEROCK_REDIRECT
const FORGEROCK_COMPANY_ENDPOINT = process.env.FORGEROCK_COMPANY_ENDPOINT
const FORGEROCK_USER_ENDPOINT = process.env.FORGEROCK_USER_ENDPOINT
const CH_EWF_REQUEST_AUTH_CODE_URL = process.env.CH_EWF_REQUEST_AUTH_CODE_URL
const CH_EWF_LEGACY_AUTH_URL = process.env.CH_EWF_LEGACY_AUTH_URL
const CH_EWF_AUTHENTICATED_ENTRY_URL = process.env.CH_EWF_AUTHENTICATED_ENTRY_URL

module.exports = withTM({
  env: {
    BASE_PATH,
    ENVIRONMENT,
    FORGEROCK_AM,
    FORGEROCK_REALM,
    FORGEROCK_SCOPE,
    FORGEROCK_CLIENT_ID,
    FORGEROCK_REDIRECT,
    FORGEROCK_COMPANY_ENDPOINT,
    FORGEROCK_USER_ENDPOINT,
    CH_EWF_REQUEST_AUTH_CODE_URL,
    CH_EWF_LEGACY_AUTH_URL,
    CH_EWF_AUTHENTICATED_ENTRY_URL
  },
  future: {
    webpack5: true
  },
  basePath: BASE_PATH,
  trailingSlash: true,
  reactStrictMode: true
})
