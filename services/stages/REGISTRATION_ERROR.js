import genericError from '../lang/en/retired-stages/genericError.json'

const REGISTRATION_ERROR = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['REGISTRATION_ERROR.[0].BrowserTitle.registrationError']
    }
  },
  {
    conditional: {
      prop: '${errors.0.tokenNoNamespace}',
      operator: 'eeq',
      value: 'REGISTRATION_GENERAL_ERROR'
    },
    component: 'Fragment',
    content: genericError
  },
  {
    conditional: {
      prop: '${errors.0.tokenNoNamespace}',
      operator: 'eeq',
      value: 'REGISTRATION_SEND_EMAIL_ERROR'
    },
    component: 'Fragment',
    content: genericError
  },
  {
    conditional: {
      prop: '${errors.0.tokenNoNamespace}',
      operator: 'eeq',
      value: 'REGISTRATION_NO_TOKEN_ERROR'
    },
    component: 'Fragment',
    content: [
      {
        component: 'PageHeading',
        props: {
          children: 'Page not found',
          showErrorSummary: false
        }
      },
      {
        component: 'BodyText',
        props: {
          children: ['If you typed the link, check it is correct.']
        }
      },
      {
        component: 'BodyText',
        props: {
          children: 'If you pasted the link, check you copied the entire link.'
        }
      },
      {
        component: 'BodyText',
        content: [
          {
            component: 'SpanText',
            props: {
              children: 'If the link is correct, you must '
            }
          },
          {
            component: 'LinkText',
            props: {
              children: 'start again to register a new account',
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
      value: 'REGISTRATION_TOKEN_PARSING_ERROR'
    },
    component: 'Fragment',
    content: [
      {
        component: 'PageHeading',
        props: {
          children: 'Page not found',
          showErrorSummary: false
        }
      },
      {
        component: 'BodyText',
        props: {
          children: ['If you typed the link, check it is correct.']
        }
      },
      {
        component: 'BodyText',
        props: {
          children: 'If you pasted the link, check you copied the entire link.'
        }
      },
      {
        component: 'BodyText',
        content: [
          {
            component: 'SpanText',
            props: {
              children: 'If the link is correct, you must '
            }
          },
          {
            component: 'LinkText',
            props: {
              children: 'start again to register a new account',
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
      value: 'REGISTRATION_TOKEN_EXPIRED_ERROR'
    },
    component: 'Fragment',
    content: [
      {
        component: 'PageHeading',
        props: {
          children: 'Verification link has expired',
          showErrorSummary: false
        }
      },
      {
        component: 'BodyText',
        content: [
          {
            component: 'SpanText',
            props: {
              children: 'The link to verify your email address has now expired. You must start again to '
            }
          },
          {
            component: 'LinkText',
            props: {
              children: 'register a new account',
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
          children: 'User already exists',
          showErrorSummary: false
        }
      },
      {
        component: 'BodyText',
        content: [
          {
            component: 'SpanText',
            props: {
              children: 'An account with this email address already exists '
            }
          },
          {
            component: 'LinkText',
            props: {
              children: 'register a new account',
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
