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
    component: 'NotificationBanner',
    dynamicProps: {
      title: tokens('SHARED.NotificationBanner.CHConfimationJourney.title'),
      heading: tokens('SHARED.NotificationBanner.CHConfimationJourney.heading')
    },
    content: [
      {
        component: 'BodyText',
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens('SHARED.NotificationBanner.CHConfirmationJourney.ifYouHaveAPrivateCompany')
            }
          },
          {
            component: 'LinkText',
            props: {
              children: tokens('SHARED.NotificationBanner.CHConfirmationJourney.newFileAConfirmation'),
              href: 'https://find-and-update.company-information.service.gov.uk/confirmation-statement'
            }
          },
          {
            component: 'SpanText',
            dynamicProps: {
              children: '.'
            }
          }
        ]
      },
      {
        component: 'BodyText',
        props: {
          children: tokens('SHARED.NotificationBanner.CHConfirmationJourney.youWillNotBeAble')
        }
      }
    ]
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
      matomo: ['trackEvent', 'sign-in', 'sign-in', '[name]optional', '[value]optional']
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
          matomo: ['trackGoal', 2]
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
          matomo: ['trackEvent', 'forgotPassword', 'forgotPasswordAction']
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
          testId: 'forgottenMyPasswordLink'
        }
      }
    ]
  }
]
export default EWF_LOGIN_1
