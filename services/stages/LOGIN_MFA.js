/* eslint-disable no-template-curly-in-string */
const LOGIN_MFA = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.verifyYourMobileNumber')
    }
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
        IDToken1: {
          label: tokens('SHARED.securityCode'),
          type: 'text',
          inputMode: 'numeric',
          autoComplete: 'off'
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
      summary: tokens('SHARED.iHaveNotReceivedATextMessage'),
      matomo: ['trackEvent', tokens('SHARED.checkYourPhone'), tokens('SHARED.iHaveNotReceivedATextMessage')]
    },
    content: [
      {
        component: 'BodyText',
        props: {
          children: tokens('SHARED.theTextMessageMayTakeAFewMinutesTo')
        }
      },
      {
        component: 'BodyText',
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens('SHARED.ifItDoesNotArriveYouCan')
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
              },
              matomo: ['trackEvent', tokens('SHARED.checkYourPhone'), tokens('SHARED.askUsToSendYouAnotherTextMessage')]
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
]
export default LOGIN_MFA
