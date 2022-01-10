/* eslint-disable no-template-curly-in-string */
const otpResendEmail = (lang, tokens) => ([
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.checkYourEmail')
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
          children: tokens('SHARED.giveUsADifferentEmailAddress'),
          handler: {
            name: 'onSecondarySubmit',
            params: {
              target: 'IDToken2',
              value: 0
            }
          },
          href: '',
          testId: 'otpResendEmail'
        }
      }
    ]
  }
])

export default otpResendEmail
