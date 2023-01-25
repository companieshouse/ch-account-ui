/* eslint-disable no-template-curly-in-string */
import genericError from './shared/genericError.js'
import pageNotFoundError from './shared/pageNotFoundError.js'

const ONBOARDING_ERROR = (lang, tokens) => [
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
      value: ['ONBOARDING_USER_LOOKUP_ERROR', 'ONBOARDING_ERROR_JWT_TYPE_UNKNOWN', 'ONBOARDING_ERROR_TOKEN_ISSUER_MISMATCH', 'ONBOARDING_TOKEN_ISSUED_IN_FUTURE', 'ONBOARDING_ERROR_TOKEN_ISSUED_IN_FUTURE']
    },
    component: 'Fragment',
    content: genericError(lang, tokens, '${errors.0.tokenNoNamespace}')
  },
  {
    conditional: {
      prop: '${errors.0.tokenNoNamespace}',
      operator: 'in',
      value: ['ONBOARDING_NO_TOKEN_ERROR', 'ONBOARDING_TOKEN_PARSING_ERROR']
    },
    component: 'Fragment',
    content: pageNotFoundError(lang, tokens)
  },
  {
    conditional: {
      prop: '${errors.0.tokenNoNamespace}',
      operator: 'in',
      value: ['ONBOARDING_DATE_EXPIRED_ERROR', 'ONBOARDING_NO_INVITE_FOUND', 'ONBOARDING_USER_NOT_FOUND_ERROR']
    },
    component: 'Fragment',
    content: [
      {
        component: 'PageHeading',
        props: {
          children: tokens('ONBOARDING_ERROR.[3].Fragment.invitationHasExpired'),
          showErrorSummary: false
        }
      },
      {
        component: 'BodyText',
        props: {
          children: tokens('SHARED.theLinkToAcceptOrDeclineAuthorisationToFile')
        }
      },
      {
        component: 'BodyText',
        props: {
          children: tokens('SHARED.thePersonWhoGaveYouAuthorisationWouldNeedTo')
        }
      },
      {
        component: 'BodyText',
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens('SHARED.alternativelyIfYouHaveAccessToTheCurrent')
            }
          },
          {
            component: 'LinkText',
            dynamicProps: {
              href: '${links.ewfAuthenticatedEntry}'
            },
            props: {
              children: tokens('SHARED.signInToWebFilingLink'),
              testId: 'webFilingLink',
              matomo: ['trackEvent', tokens('ONBOARDING_ERROR.[4].Fragment.linkRedirectedToWrongPage'), tokens('SHARED.signInToWebFilingLink')]
            }
          },
          {
            component: 'SpanText',
            props: {
              children: tokens('SHARED.andAddTheCompanyToYourAccount')
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
          children: tokens('ONBOARDING_ERROR.[4].Fragment.authorisationLinkHasExpired'),
          showErrorSummary: false
        }
      },
      {
        component: 'BodyText',
        props: {
          children: tokens('SHARED.theLinkToAcceptOrDeclineAuthorisationToFile')
        }
      },
      {
        component: 'BodyText',
        props: {
          children: tokens('SHARED.thePersonWhoGaveYouAuthorisationWouldNeedTo')
        }
      },
      {
        component: 'BodyText',
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens('SHARED.alternativelyIfYouHaveAccessToTheCurrent')
            }
          },
          {
            component: 'LinkText',
            dynamicProps: {
              href: '${links.ewfAuthenticatedEntry}'
            },
            props: {
              children: tokens('SHARED.signInToWebFilingLink'),
              testId: 'webFilingLink',
              matomo: ['trackEvent', tokens('ONBOARDING_ERROR.[4].Fragment.linkRedirectedToWrongPage'), tokens('SHARED.signInToWebFilingLink')]
            }
          },
          {
            component: 'SpanText',
            props: {
              children: tokens('SHARED.andAddTheCompanyToYourAccount')
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
      value: ['ACTIVE_SESSION_ERROR']
    },
    component: 'Fragment',
    content: [
      {
        component: 'PageHeading',
        props: {
          children: tokens('ONBOARDING_ERROR.[4].Fragment.linkRedirectedToWrongPage'),
          showErrorSummary: false
        }
      },
      {
        component: 'BodyText',
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens('ONBOARDING_ERROR.[4].Fragment.toTryAgain')
            }
          },
          {
            component: 'LinkText',
            props: {
              href: '/account/logout/',
              children: tokens('SHARED.signOut'),
              matomo: ['trackEvent', tokens('ONBOARDING_ERROR.[4].Fragment.linkRedirectedToWrongPage'), tokens('SHARED.signOut')]
            }
          },
          {
            component: 'SpanText',
            props: {
              children: tokens('ONBOARDING_ERROR.[4].Fragment.ofTheService')
            }
          }
        ]
      },
      {
        component: 'BodyText',
        props: {
          children: tokens('ONBOARDING_ERROR.[4].Fragment.thenReturnToTheEmailWeSent')
        }
      }
    ]
  }
]
export default ONBOARDING_ERROR
