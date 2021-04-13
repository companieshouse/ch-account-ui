// These settings default to dev environment values if no value is present
export const ENVIRONMENT = process.env.ENVIRONMENT || 'dev'
export const FORGEROCK_AM = process.env.FORGEROCK_AM || 'https://openam-companieshouse-uk-dev.id.forgerock.io/am/'
export const FORGEROCK_REALM = process.env.FORGEROCK_REALM || '/alpha'
export const FORGEROCK_SCOPE = process.env.FORGEROCK_SCOPE || 'openid email phone profile fr:idm:*'
export const FORGEROCK_CLIENT_ID = process.env.FORGEROCK_CLIENT_ID || 'ForgeRockSDKClient'
export const FORGEROCK_REDIRECT = process.env.FORGEROCK_REDIRECT || 'http://localhost:3000/account/home/'

export const FORGEROCK_TREE_LOGIN = process.env.FORGEROCK_TREE_LOGIN || 'Login'
export const FORGEROCK_TREE_REGISTER = process.env.FORGEROCK_TREE_REGISTER || 'CHRegistration'
export const FORGEROCK_TREE_REGISTER_VERIFY = process.env.FORGEROCK_TREE_REGISTER_VERIFY || 'CHVerifyReg'
export const FORGEROCK_TREE_FMP = process.env.FORGEROCK_TREE_FMP || 'CHResetPassword'
export const FORGEROCK_TREE_FMP_VERIFY = process.env.FORGEROCK_TREE_FMP_VERIFY || 'CHResetPassword'
export const FORGEROCK_TREE_ASSOCIATE_USER_WITH_COMPANY = process.env.FORGEROCK_TREE_ASSOCIATE_USER_WITH_COMPANY || 'AssociateUser'
export const FORGEROCK_TREE_REQUEST_AUTH_CODE = process.env.FORGEROCK_TREE_REQUEST_AUTH_CODE || 'RequestAuthCode'
export const FORGEROCK_TREE_CHANGE_PASSWORD = process.env.FORGEROCK_TREE_CHANGE_PASSWORD || 'CHChangePassword'

export const CH_COOKIE_NAME = process.env.CH_COOKIE_NAME || '_ch_identity'
export const ID_COOKIE_NAME = process.env.ID_COOKIE_NAME || '_profile'

console.log(`Running as environment: ${ENVIRONMENT}`)
