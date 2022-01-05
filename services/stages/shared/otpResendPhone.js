/* eslint-disable no-template-curly-in-string */
const otpResendPhone = (lang, tokens) => ([
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.checkYourPhone')
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens('SHARED.wellSendAnotherText')
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
      children: tokens('SHARED.sendText'),
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
          children: tokens('SHARED.giveUsADifferentTextAddress'),
          handler: {
            name: 'onSecondarySubmit',
            params: {
              target: 'IDToken2',
              value: 1
            }
          },
          href: '',
          testId: 'otpResendSMS'
        }
      }
    ]
  }
])

export default otpResendPhone
