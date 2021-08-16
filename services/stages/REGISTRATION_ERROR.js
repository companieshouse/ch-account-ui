import genericError from './shared/genericError.js'
import pageNotFoundError from './shared/pageNotFoundError.js'

const REGISTRATION_ERROR = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.sorryThereIsAProblemWithTheService')
    }
  },
  {
    conditional: {
      prop: '${errors.0.tokenNoNamespace}',
      operator: 'in',
      value: ['REGISTRATION_GENERAL_ERROR', 'REGISTRATION_ERROR_JWT_TYPE_UNKNOWN', 'REGISTRATION_TOKEN_ISSUED_IN_FUTURE', 'REGISTRATION_ERROR_TOKEN_ISSUER_MISMATCH']
    },
    component: 'Fragment',
    content: genericError(lang, tokens)
  },
  {
    conditional: {
      prop: '${errors.0.tokenNoNamespace}',
      operator: 'eeq',
      value: 'REGISTRATION_SEND_EMAIL_ERROR'
    },
    component: 'Fragment',
    content: [
      {
        component: 'PageHeading',
        props: {
          children: tokens('SHARED.sorryThereIsAProblemWithTheService'),
          showErrorSummary: false
        }
      },
      {
        component: 'BodyText',
        props: {
          children: tokens('SHARED.weHaveNotSavedYourInformation')
        }
      },
      {
        component: 'BodyText',
        content: [
          {
            component: 'LinkText',
            props: {
              children: tokens('SHARED.signBackInToYourAccount'),
              href: '/account/login/',
              testId: 'contactCompaniesHouseLink'
            }
          },
          {
            component: 'SpanText',
            props: {
              children: tokens('SHARED.toTryAgain')
            }
          }
        ]
      }
    ]
  },
  {
    conditional: {
      prop: '${errors.0.tokenNoNamespace}',
      operator: 'in',
      value: ['REGISTRATION_NO_TOKEN_ERROR', 'REGISTRATION_TOKEN_PARSING_ERROR']
    },
    component: 'Fragment',
    content: pageNotFoundError(lang, tokens)
  },
  {
    conditional: {
      prop: '${errors.0.tokenNoNamespace}',
      operator: 'eeq',
      value: 'REGISTRATION_ERROR_TOKEN_EXPIRED'
    },
    component: 'Fragment',
    content: [
      {
        component: 'PageHeading',
        props: {
          children: tokens('REGISTRATION_ERROR.[4].Fragment.verificationLinkHasExpired'),
          showErrorSummary: false
        }
      },
      {
        component: 'BodyText',
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens('REGISTRATION_ERROR.[4].Fragment.theLinkToVerifyYourEmailAddressHowNowExpired')
            }
          },
          {
            component: 'LinkText',
            props: {
              children: tokens('REGISTRATION_ERROR.[4].Fragment.registerANewAccount'),
              href: '/account/register/_start/',
              testId: 'registrationLink'
            }
          },
          {
            component: 'SpanText',
            props: {
              children: '.'
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
      value: 'REGISTRATION_ERROR_USER_ALREADY_EXIST'
    },
    component: 'Fragment',
    content: [
      {
        component: 'PageHeading',
        props: {
          children: tokens('REGISTRATION_ERROR.[4].Fragment.userAlreadyExists'),
          showErrorSummary: false
        }
      },
      {
        component: 'BodyText',
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens('REGISTRATION_ERROR.[4].Fragment.anAccountWithThisEmailAddressAlreadyExists')
            }
          },
          {
            component: 'LinkText',
            props: {
              children: tokens('REGISTRATION_ERROR.[4].Fragment.registerANewAccount'),
              href: '/account/register/_start/',
              testId: 'registrationLink'
            }
          },
          {
            component: 'SpanText',
            props: {
              children: '.'
            }
          }
        ]
      }
    ]
  }

]
export default REGISTRATION_ERROR
