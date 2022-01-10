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
          children: tokens('SHARED.weveSentATextMessageWithASecurityCode')
        }
      },
      {
        component: 'SpanText',
        props: {
          weight: 'bold'
        },
        content: [
          {
            component: 'PadPhoneNumber',
            dynamicProps: {
              phoneNumber: '${phoneNumber}'
            }
          }
        ]
      },
      {
        component: 'SpanText',
        props: {
          children: tokens('SHARED.')
        }
      }
    ]
  },
  {
    component: 'BodyText',
    props: {
      children: tokens('SHARED.itMayTakeAFewMinutesToArrive')
    }
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
