import genericError from './shared/genericError.js'

const RESET_PASSWORD_ERROR = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['SHARED.sorryThereIsAProblemWithTheService']
    }
  },
  {
    conditional: {
      prop: '${errors.0.tokenNoNamespace}',
      operator: 'in',
      value: ['RESET_PASSWORD_GENERAL_ERROR', 'RESET_PASSWORD_EMAIL_SEND_ERROR', 'RESET_PASSWORD_TOKEN_PARSING_ERROR']
    },
    component: 'Fragment',
    content: genericError(lang, tokens)
  },
  {
    conditional: {
      prop: '${errors.0.tokenNoNamespace}',
      operator: 'eeq',
      value: 'RESET_PASSWORD_ERROR_TOKEN_EXPIRED'
    },
    component: 'Fragment',
    content: [
      {
        component: 'PageHeading',
        props: {
          showErrorSummary: false,
          children: tokens['RESET_PASSWORD_ERROR.[1].PageHeading.passwordResetLinkHasExpired']
        }
      },
      {
        component: 'ErrorPageSummary',
        content: [
          {
            component: 'LinkText',
            props: {
              children: tokens['RESET_PASSWORD_ERROR.[3].ErrorPageSummary.startAgainToResetYourPassword'],
              href: '/account/register/_restart/',
              testId: 'startRegistrationAgainLink'
            }
          }
        ]
      }
    ]
  }
]
export default RESET_PASSWORD_ERROR
