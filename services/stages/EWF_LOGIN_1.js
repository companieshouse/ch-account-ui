/* eslint-disable no-template-curly-in-string */
const EWF_LOGIN_1 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.signInToWebFiling')
    }
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
      matomo: ['trackGoal', 3]
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
