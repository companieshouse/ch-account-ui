import { CH_EWF_HELP_SIGNIN_URL } from '../environment'
import { convertUrl } from '../translate'
/* eslint-disable no-template-curly-in-string */
const EWF_LOGIN_1 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.signInToWebFiling')
    }
  },
  {
    component: 'NotificationBanner',
    dynamicProps: {
      title: tokens('SHARED.InformationMessage'),
      heading: tokens('SHARED.IndustrialAction')
    },
    content: [
      {
        component: 'BodyText',
        props: {
          children: tokens('SHARED.NotificationBanner.Industrial.dueToIndustrialAction')
        }
      }
    ]
  },
  {
    conditional: {
      prop: '${notifyToken}',
      operator: 'eeq',
      value: 'resetSuccess'
    },
    component: 'NotificationBanner',
    dynamicProps: {
      type: 'success',
      title: tokens('SHARED.success'),
      heading: tokens('SHARED.youveSuccessfullyResetYourPassword')
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.signInToWebFiling')
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken1: {
          formGroup: 'usernameAndPassword',
          label: tokens('SHARED.emailAddress')
        },
        IDToken2: {
          formGroup: 'usernameAndPassword',
          label: tokens('SHARED.password')
        }
      }
    }
  },
  {
    component: 'Button',
    props: {
      children: tokens('SHARED.signIn'),
      type: 'submit',
      testId: 'submitButton',
      matomo: ['trackGoal', 5]
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        props: {
          children: tokens('EWF_LOGIN_1.[4].BodyText.createAWebFilingAccount'),
          href: '/account/register/_start',
          testId: 'registerNewAccountLink',
          matomo: ['trackGoal', 3]
        }
      }
    ]
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        props: {
          children: tokens('SHARED.iveForgottenMyPassword'),
          href: '/password-recovery/request',
          testId: 'forgottenMyPasswordLink',
          matomo: ['trackEvent', tokens('SHARED.signInToWebFiling'), tokens('SHARED.iveForgottenMyPassword')]
        }
      }
    ]
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        props: {
          children: tokens('SHARED.helpWithSigningIn'),
          href: convertUrl(lang, CH_EWF_HELP_SIGNIN_URL),
          testId: 'helpWithSigningInLink',
          matomo: ['trackEvent', tokens('SHARED.signInToWebFiling'), tokens('SHARED.helpWithSigningIn')]
        }
      }
    ]
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        dynamicProps: {
          href: '${links.ewfLegacyAuthUrl}'
        },
        props: {
          children: tokens('SHARED.imAnAgentOrLenderAndIWantToFileACharge'),
          testId: 'forgottenMyPasswordLink',
          matomo: ['trackEvent', tokens('SHARED.signInToWebFiling'), tokens('SHARED.imAnAgentOrLenderAndIWantToFileACharge')]
        }
      }
    ]
  }
]
export default EWF_LOGIN_1
