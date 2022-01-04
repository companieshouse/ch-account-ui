/* eslint-disable no-template-curly-in-string */
const otpResend = (lang, tokens) => ([
  {
    component: 'PageHeading',
    children: 'GENERIC RESEND'
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
  }
])
export default otpResend
