import genericError from './shared/genericError.js'
import pageNotFoundError from './shared/pageNotFoundError'

const ONBOARDING_ERROR = (lang, tokens) => [
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
      value: ['ONBOARDING_USER_LOOKUP_ERROR', 'ONBOARDING_USER_NOT_FOUND_ERROR', 'ONBOARDING_ERROR_JWT_TYPE_UNKNOWN', 'ONBOARDING_ERROR_TOKEN_ISSUER_MISMATCH', 'ONBOARDING_TOKEN_ISSUED_IN_FUTURE', 'ONBOARDING_ERROR_TOKEN_ISSUED_IN_FUTURE']
    },
    component: 'Fragment',
    content: genericError(lang, tokens)
  },
  {
    conditional: {
      prop: '${errors.0.tokenNoNamespace}',
      operator: 'in',
      value: ['ONBOARDING_NO_TOKEN_ERROR']
    },
    component: 'Fragment',
    content: pageNotFoundError(lang, tokens)
  },
  {
    conditional: {
      prop: '${errors.0.tokenNoNamespace}',
      operator: 'in',
      value: ['ONBOARDING_DATE_EXPIRED_ERROR', 'ONBOARDING_NO_INVITE_FOUND']
    },
    component: 'Fragment',
    content: [
      {
        component: 'PageHeading',
        props: {
          children: 'Invitation has expired',
          showErrorSummary: false
        }
      },
      {
        component: 'BodyText',
        props: {
          children: 'The link to accept or decline authorisation to file online has expired.'
        }
      },
      {
        component: 'BodyText',
        props: {
          children: 'The person who gave you authorisation would need to do this again if you want to be authorised to file online for this company.'
        }
      },
      {
        component: 'BodyText',
        content: [
          {
            component: 'SpanText',
            props: {
              children: 'Alternatively, if you have access to the current authentication code, you can '
            }
          },
          {
            component: 'LinkText',
            dynamicProps: {
              href: '${links.ewfAuthenticatedEntry}'
            },
            props: {
              children: 'sign in to WebFiling',
              testId: 'webFilingLink'
            }
          },
          {
            component: 'SpanText',
            props: {
              children: ' and add the company to your account.'
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
      value: ['ONBOARDING_ERROR_TOKEN_EXPIRED']
    },
    component: 'Fragment',
    content: [
      {
        component: 'PageHeading',
        props: {
          children: 'Authorisation link has expired',
          showErrorSummary: false
        }
      },
      {
        component: 'BodyText',
        props: {
          children: 'The link to accept or decline authorisation to file online has expired.'
        }
      },
      {
        component: 'BodyText',
        props: {
          children: 'The person who gave you authorisation would need to do this again if you want to be authorised to file online for this company.'
        }
      },
      {
        component: 'BodyText',
        content: [
          {
            component: 'SpanText',
            props: {
              children: 'Alternatively, if you have access to the current authentication code, you can '
            }
          },
          {
            component: 'LinkText',
            dynamicProps: {
              href: '${links.ewfAuthenticatedEntry}'
            },
            props: {
              children: 'sign in to WebFiling',
              testId: 'webFilingLink'
            }
          },
          {
            component: 'SpanText',
            props: {
              children: ' and add the company to your account.'
            }
          }
        ]
      }
    ]
  }
]
export default ONBOARDING_ERROR
