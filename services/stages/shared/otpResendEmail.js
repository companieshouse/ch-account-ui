/* eslint-disable no-template-curly-in-string */
const otpResendEmail = (lang, tokens) => ([
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
          children: tokens('SHARED.BodyText.weveSentYouAnEmailToWhichContainsASecurityCode')
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
      handler: {
        name: 'onSecondarySubmit',
        params: {
          target: 'IDToken2',
          value: 0
        }
      },
      testId: 'otpResendEmail'
    }
  }
])

export default otpResendEmail
