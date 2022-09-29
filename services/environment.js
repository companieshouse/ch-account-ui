// These settings default to dev environment values if no value is present
export const ENVIRONMENT = process.env.ENVIRONMENT || 'dev'
export const FORGEROCK_AM = process.env.FORGEROCK_AM || 'https://idam.amido.aws.chdev.org/am/'
export const FORGEROCK_USER_ENDPOINT = process.env.FORGEROCK_USER_ENDPOINT || 'https://idam.amido.aws.chdev.org/openidm/managed/alpha_user/'
export const FORGEROCK_IDM_COMPANY_ENDPOINT = process.env.FORGEROCK_IDM_COMPANY_ENDPOINT || 'https://openam-companieshouse-uk-dev.id.forgerock.io/openidm/endpoint/company'
export const FORGEROCK_REALM = process.env.FORGEROCK_REALM || '/alpha'
export const FORGEROCK_SCOPE = process.env.FORGEROCK_SCOPE || 'openid email phone profile fr:idm:*'
export const FORGEROCK_CLIENT_ID = process.env.FORGEROCK_CLIENT_ID || 'ForgeRockSDKClient'
export const FORGEROCK_REDIRECT = process.env.FORGEROCK_REDIRECT || 'http://localhost:3000/account/home/'

export const FORGEROCK_TREE_LOGIN = process.env.FORGEROCK_TREE_LOGIN || 'CHLogin'
export const FORGEROCK_TREE_WF = process.env.FORGEROCK_TREE_WF || 'CHWebFiling'
export const FORGEROCK_TREE_WF_LOGIN = process.env.FORGEROCK_TREE_WF_LOGIN || 'CHWebFiling-Login'
export const FORGEROCK_TREE_REGISTER = process.env.FORGEROCK_TREE_REGISTER || 'CHRegistration'
export const FORGEROCK_TREE_REGISTER_VERIFY = process.env.FORGEROCK_TREE_REGISTER_VERIFY || 'CHVerifyReg'
export const FORGEROCK_TREE_FMP = process.env.FORGEROCK_TREE_FMP || 'CHResetPassword'
export const FORGEROCK_TREE_CHANGE_PREFS = process.env.FORGEROCK_TREE_CHANGE_PREFS || 'CHManageEmailConsent'
export const FORGEROCK_TREE_CHANGE_EMAIL_ADDRESS = process.env.FORGEROCK_TREE_CHANGE_EMAIL_ADDRESS || 'CHChangeEmailAddress'
export const FORGEROCK_TREE_FMP_VERIFY = process.env.FORGEROCK_TREE_FMP_VERIFY || 'CHResetPassword'
export const FORGEROCK_TREE_COMPANY_ASSOCIATION = process.env.FORGEROCK_TREE_COMPANY_ASSOCIATION || 'CHCompanyAssociation'
export const FORGEROCK_TREE_INVITE_USER = process.env.FORGEROCK_TREE_INVITE_USER || 'CHInviteUser'
export const FORGEROCK_TREE_REMOVE_AUTHORISED_USER = process.env.FORGEROCK_TREE_REMOVE_AUTHORISED_USER || 'CHRemoveAuthorisedUser'
export const FORGEROCK_TREE_REQUEST_AUTH_CODE = process.env.FORGEROCK_TREE_REQUEST_AUTH_CODE || 'RequestAuthCode'
export const FORGEROCK_TREE_CHANGE_PASSWORD = process.env.FORGEROCK_TREE_CHANGE_PASSWORD || 'CHChangePassword'
export const FORGEROCK_TREE_CHANGE_PHONE_NUMBER = process.env.FORGEROCK_TREE_CHANGE_PHONE_NUMBER || 'CHChangePhoneNumber'
export const FORGEROCK_TREE_CHANGE_NAME = process.env.FORGEROCK_TREE_CHANGE_NAME || 'CHChangeName'
export const FORGEROCK_TREE_ONBOARDING = process.env.FORGEROCK_TREE_ONBOARDING || 'CHOnboarding'
export const FORGEROCK_TREE_SCRS_ACTIVATION = process.env.FORGEROCK_TREE_SCRS_ACTIVATION || 'CHSCRSActivation'

export const CH_BASE_EWF_URL = process.env.CH_BASE_EWF_URL || 'https://ewf-kermit.companieshouse.gov.uk'

export const CH_EWF_REQUEST_AUTH_CODE_URL = process.env.CH_EWF_REQUEST_AUTH_CODE_URL || 'https://ewf-kermit.companieshouse.gov.uk/request-auth-code'
export const CH_EWF_REQUEST_AUTH_CODE_HOME_URL = process.env.CH_EWF_REQUEST_AUTH_CODE_HOME_URL || 'https://find-and-update.company-information.service.gov.uk/auth-code-requests/start'
export const CH_EWF_LEGACY_AUTH_URL = process.env.CH_EWF_LEGACY_AUTH_URL || 'https://ewf-kermit-legacy.companieshouse.gov.uk/'
export const CH_EWF_AUTHENTICATED_ENTRY_URL = process.env.CH_EWF_AUTHENTICATED_ENTRY_URL || 'https://ewf-kermit.companieshouse.gov.uk/file-for-a-company'
export const CH_EWF_RECENT_FILINGS_URL = process.env.CH_EWF_RECENT_FILINGS_URL || 'https://ewf-kermit.companieshouse.gov.uk/recent-filings'
export const CH_EWF_IDAM_LOGOUT_URL = process.env.CH_EWF_IDAM_LOGOUT_URL || 'https://ewf-kermit.companieshouse.gov.uk/idam-logout'
export const CH_GOVUK_LINK = process.env.CH_GOVUK_LINK || 'https://gov.uk'

export const CH_BASE_URL = process.env.CH_BASE_URL || 'companieshouse.gov.uk'

export const ANALYTICS_TRACKER_URL = process.env.ANALYTICS_TRACKER_URL || 'matomo.platform.aws.chdev.org'
export const ANALYTICS_SITE_ID = process.env.ANALYTICS_SITE_ID || '23'

export const CH_FEEDBACK_URL = process.env.CH_FEEDBACK_URL || 'https://www.smartsurvey.co.uk/s/chaccount'

export const VERSION = process.env.VERSION || 'xx.xx.xx.xx'

export const MATOMO_LOGGING = false

// console.log(`Running as environment: ${ENVIRONMENT}`)
