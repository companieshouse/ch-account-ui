/* eslint-disable no-template-curly-in-string */
import genericError from './shared/genericError.js'

const RESET_PASSWORD_ERROR = (lang, tokens) => [
  {
    conditional: {
      prop: '${errors.0.tokenNoNamespace}',
      operator: 'in',
      value: ['RESET_PASSWORD_GENERAL_ERROR', 'RESET_PASSWORD_EMAIL_SEND_ERROR', 'RESET_PASSWORD_TOKEN_PARSING_ERROR']
    },
    component: 'Fragment',
    content: [
      {
        component: 'BrowserTitle',
        props: {
          title: tokens('SHARED.sorryThereIsAProblemWithTheService')
        }
      },
      ...genericError(lang, tokens)
    ]
  },
  {
    conditional: {
      prop: '${errors.0.tokenNoNamespace}',
      operator: 'eeq',
      value: 'USER_EMAIL_NOT_FOUND'
    },
    component: 'Fragment',
    content: [
      {
        component: 'BrowserTitle',
        props: {
          title: tokens('SHARED.sorryThereIsAProblemWithTheService')
        }
      },
      {
        component: 'PageHeading',
        props: {
          showErrorSummary: false,
          children: tokens('SHARED.sorryThereIsAProblemWithTheService')
        }
      },
      {
        component: 'BodyText',
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens('SHARED.ifTheEmailAddressNotAssociated')
            }
          },
          {
            component: 'LinkText',
            props: {
              children: tokens('SHARED.registerANewAccount'),
              href: '/register/_start',
              testId: 'registerNewAccountResetPassword',
              matomo: ['trackEvent', tokens('SHARED.sorryThereIsAProblem'), 'Email not associated']
            }
          }
        ]
      }
    ]

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
        component: 'BrowserTitle',
        props: {
          title: tokens('RESET_PASSWORD_ERROR.[1].PageHeading.passwordResetLinkHasExpired')
        }
      },
      {
        component: 'PageHeading',
        props: {
          showErrorSummary: false,
          children: tokens('RESET_PASSWORD_ERROR.[1].PageHeading.passwordResetLinkHasExpired')
        }
      },
      {
        component: 'ErrorPageSummary',
        content: [
          {
            component: 'LinkText',
            props: {
              children: tokens('RESET_PASSWORD_ERROR.[3].ErrorPageSummary.startAgainToResetYourPassword'),
              href: '/account/register/_restart/',
              testId: 'startRegistrationAgainLink',
              matomo: ['trackEvent', tokens('RESET_PASSWORD_ERROR.[1].PageHeading.passwordResetLinkHasExpired'), tokens('RESET_PASSWORD_ERROR.[3].ErrorPageSummary.startAgainToResetYourPassword')]
            }
          }
        ]
      }
    ]
  }
]
export default RESET_PASSWORD_ERROR
