/* eslint-disable no-template-curly-in-string */
const REGISTRATION_RESEND = (lang, tokens) => [
  {
    component: 'PageHeading',
    props: {
      children: tokens('REGISTRATION_RESEND.[0].PageHeading.sendANewEmail')
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken2: {
          _hidden: true
        }
      }
    }
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
          children: '${emailAddress}'
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
      testId: 'submitButton',
      matomo: ['trackEvent', tokens('REGISTRATION_RESEND.[0].PageHeading.sendANewEmail'), tokens('SHARED.sendEmail')]
    }
  },
  {
    component: 'BodyText',
    props: {},
    content: [
      {
        component: 'LinkText',
        props: {
          children: tokens('SHARED.giveUsADifferentEmailAddressStandalone'),
          handler: {
            name: 'onSecondarySubmit',
            params: {
              target: 'IDToken2',
              value: 1
            }
          },
          href: '',
          testId: 'changeEmail',
          matomo: ['trackEvent', tokens('REGISTRATION_RESEND.[0].PageHeading.sendANewEmail'), tokens('SHARED.giveUsADifferentEmailAddressStandalone')]
        }
      }
    ]
  }
]
export default REGISTRATION_RESEND
