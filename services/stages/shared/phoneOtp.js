/* eslint-disable no-template-curly-in-string */
const phoneOtp = (lang, tokens) => ([
  {
    conditional: {
      prop: '${resend}',
      operator: 'is'
    },
    component: 'NotificationBanner',
    props: {
      title: tokens('SHARED.success'),
      heading: tokens('SHARED.textSent'),
      type: 'success'
    },
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens('SHARED.WeveSentAnotherText')
        }
      },
      {
        component: 'SpanText',
        props: {
          weight: 'bold'
        },
        dynamicProps: {
          children: '${phoneNumber}'
        }
      },
      {
        component: 'SpanText',
        props: {
          children: '. ' + tokens('SHARED.itMayTakeAFewMinutesToArrive')
        }
      }
    ]
  },
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
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken4: {
          label: tokens('SHARED.securityCode'),
          type: 'number',
          autoComplete: 'off',
          suffix: false,
          fixedWidth: '10',
          default: 0,
          customValidation: [
            {
              name: 'required',
              token: 'OTP_REQUIRED'
            }
          ]
        },
        IDToken5: {
          _hidden: true
        }
      }
    }
  },
  {
    component: 'Button',
    props: {
      children: tokens('SHARED.continue'),
      type: 'submit',
      testId: 'submitButton'
    }
  },
  {
    component: 'Details',
    props: {
      summary: tokens('SHARED.iHaveNotReceivedATextMessage')
    },
    content: [
      {
        component: 'BodyText',
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens('SHARED.ifItStillHasNotArrivedYouCan')
            }
          },
          {
            component: 'LinkText',
            props: {
              children: tokens('SHARED.askUsToSendYouAnotherTextMessage'),
              href: '',
              handler: {
                name: 'onSecondarySubmit',
                params: {
                  target: 'IDToken5',
                  value: 0,
                  noValidate: true
                }
              }
            }
          },
          {
            component: 'SpanText',
            props: {
              children: tokens('SHARED.')
            }
          }
        ]
      }
    ]
  }
])

export default phoneOtp
