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
            prop: '${restartPath}',
            operator: 'is'
          },
          component: 'LinkText',
          dynamicProps: {
            href: '{restartPath}'
          },
          props: {
            children: 'Sign back in to your account.',
            testId: 'loginExistingAccountLink'
          }
        },
        {
          component: 'LinkText',
          conditional: {
            prop: '${restartPath}',
            operator: 'not'
          },
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
      component: 'PageHeading',
      props: {
        children: 'Account locked',
        showErrorSummary: false
      }
    },
    {
      component: 'BodyText',
      props: {
        children: 'You have entered incorrect details too many times.'
      }
    },
    {
      component: 'BodyText',
      props: {
        children: 'Your account is now locked for 5 minutes.'
      }
    },
    {
      component: 'BodyText',
      content: [
        {
          component: 'SpanText',
          props: {
            children: 'You can '
          }
        },
        {
          component: 'LinkText',
          props: {
            children: 'reset your password',
            href: '/password-recovery/request/',
            testId: 'accountHomeLink'
          }
        },
        {
          component: 'SpanText',
          props: {
            children: ' if you\'ve forgotten it.'
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
