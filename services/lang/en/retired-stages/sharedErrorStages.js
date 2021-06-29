/* eslint-disable no-template-curly-in-string */
import genericError from './genericError.json'

const sharedErrorStages = {
  NO_SESSION_ERROR: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'You are now signed out'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: 'You are now signed out',
        showErrorSummary: false
      }
    },
    {
      component: 'BodyText',
      props: {
        children: 'For your security, we\'ve signed you out.'
      }
    },
    {
      component: 'BodyText',
      props: {
        children: 'We have not saved your information.'
      }
    },
    {
      component: 'BodyText',
      content: [
        {
          conditional: {
            prop: '${links.resumePath}',
            operator: 'is'
          },
          component: 'LinkText',
          dynamicProps: {
            href: '${links.resumePath}'
          },
          props: {
            children: 'Sign back in to your account.',
            testId: 'loginExistingAccountLink'
          }
        },
        {
          conditional: {
            prop: '${links.resumePath}',
            operator: 'not'
          },
          component: 'LinkText',
          props: {
            children: 'Sign back in to your account.',
            href: '/account/login',
            testId: 'loginExistingAccountLink'
          }
        }
      ]
    }
  ],
  LIMIT_EXCEEDED_ERROR: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'You are now signed out'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: 'You are now signed out',
        showErrorSummary: false
      }
    },
    {
      component: 'BodyText',
      props: {
        children: 'You have entered an incorrect code too many times. For your security, we\'ve signed you out.'
      }
    },
    {
      component: 'BodyText',
      content: [
        {
          conditional: {
            prop: '${links.resumePath}',
            operator: 'is'
          },
          component: 'LinkText',
          dynamicProps: {
            href: '${links.resumePath}'
          },
          props: {
            children: 'Sign back in to your account',
            testId: 'loginExistingAccountLink'
          }
        },
        {
          conditional: {
            prop: '${links.resumePath}',
            operator: 'not'
          },
          component: 'LinkText',
          props: {
            children: 'Sign back in to your account',
            href: '/account/login',
            testId: 'loginExistingAccountLink'
          }
        },
        {
          component: 'SpanText',
          props: {
            children: ' to try again.'
          }
        }
      ]
    }
  ],
  LOGOUT_ERROR: genericError,
  GENERIC_ERROR: genericError,
  SEND_MFA_SMS_ERROR: genericError,
  SEND_MFA_EMAIL_ERROR: genericError
}
export default sharedErrorStages
