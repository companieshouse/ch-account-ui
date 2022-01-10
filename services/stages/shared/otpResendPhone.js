/* eslint-disable no-template-curly-in-string */
const otpResendPhone = (lang, tokens) => ([
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.checkYourPhone')
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
          children: tokens('SHARED.wellSendAnotherTextMessageWithASecurityCode')
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
      handler: {
        name: 'onSecondarySubmit',
        params: {
          target: 'IDToken2',
          value: 0
        }
      },
      testId: 'otpResendSMS'
    }
  }
])

export default otpResendPhone
