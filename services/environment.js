// These settings default to dev environment values if no value is present
export const ENVIRONMENT = process.env.ENVIRONMENT || 'dev'
export const FORGEROCK_AM = process.env.FORGEROCK_AM || 'https://openam-companieshouse-uk-dev.id.forgerock.io/am/'
export const FORGEROCK_REALM = process.env.FORGEROCK_REALM || '/alpha'
export const FORGEROCK_SCOPE = process.env.FORGEROCK_SCOPE || 'openid fr:idm:*'
export const FORGEROCK_CLIENT_ID = process.env.FORGEROCK_CLIENT_ID || 'ForgeRockSDKClient'
export const FORGEROCK_REDIRECT = process.env.FORGEROCK_REDIRECT || 'http://localhost:3000/account/home/'

export const FORGEROCK_TREE_LOGIN = process.env.FORGEROCK_TREE_LOGIN || 'Login'
export const FORGEROCK_TREE_REGISTER = process.env.FORGEROCK_TREE_REGISTER || 'CHRegistration'
export const FORGEROCK_TREE_REGISTER_VERIFY = process.env.FORGEROCK_TREE_REGISTER_VERIFY || 'CHVerifyReg'
export const FORGEROCK_TREE_FMP = process.env.FORGEROCK_TREE_FMP || 'CHResetPassword'
export const FORGEROCK_TREE_FMP_VERIFY = process.env.FORGEROCK_TREE_FMP_VERIFY || 'CHCompleteResetPwd'

console.log(`Running as environment: ${ENVIRONMENT}`)
