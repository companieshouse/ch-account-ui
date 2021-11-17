/* eslint-disable no-template-curly-in-string */
const REGISTRATION_RESEND = (lang, tokens) => [
  {
    component: 'PageHeading',
    props: {
      children: tokens('REGISTRATION_RESEND.[0].PageHeading.sendANewEmail')
    }
  },
  {
    component: 'DisplayUiElements'
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens('SHARED.wellSendAnotherEmail')
        }
      },
      {
        component: 'SpanText',
        dynamicProps: {
          children: '${email}'
        },
        props: {
          weight: 'bold'
        }
      },
      {
        component: 'SpanText',
        props: {
          children: tokens('REGISTRATION_RESEND.[2].BodyText.whichContainsAVerificationLink')
        }
      }
    ]
  },
  {
    component: 'Button',
    props: {
      children: tokens('SHARED.sendEmail'),
      type: 'submit',
      testId: 'submitButton'
    }
  },
  {
    component: 'BodyText',
    props: {},
    content: [
      {
        component: 'LinkText',
        props: {
          children: tokens('SHARED.useADifferentEmail'),
          href: '/password-recovery/_restart/', // this may need to change
          testId: 'restartPasswordRecoveryLink'
        }
      }
    ]
  }
]
export default REGISTRATION_RESEND
