
const REGISTRATION_MFA = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['SHARED.verifyYourMobileNumber']
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens['SHARED.checkYourPhone']
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens['SHARED.weveSentATextMessageWithASecurityCode']
        }
      },
      {
        component: 'SpanText',
        props: {
          weight: 'bold'
        },
        content: [
          {
            component: 'ObfuscatePhoneNumber',
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
      children: tokens['SHARED.itMayTakeAFewMinutesToArrive']
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken3: {
          label: tokens['SHARED.securityCode'],
          type: 'number',
          autoComplete: 'off',
          suffix: false,
          fixedWidth: '10',
          customValidation: [
            {
              name: 'required',
              token: 'OTP_REQUIRED'
            }
          ]
        }
      }
    }
  },
  {
    component: 'Button',
    props: {
      children: tokens['SHARED.continue'],
      type: 'submit',
      testId: 'submitButton'
    }
  },
  {
    component: 'Details',
    props: {
      summary: tokens['SHARED.iHaveNotReceivedATextMessage']
    },
    content: [
      {
        component: 'BodyText',
        props: {
          children: tokens['SHARED.theTextMessageMayTakeAFewMinutesTo']
        }
      },
      {
        component: 'BodyText',
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens['SHARED.ifItDoesNotArriveYouCan']
            }
          },
          {
            component: 'LinkText',
            props: {
              children: tokens['SHARED.askUsToSendYouAnotherTextMessage'],
              href: '/account/register/_restart/'
            }
          },
          {
            component: 'SpanText',
            props: {
              children: tokens['SHARED.']
            }
          }
        ]
      }
    ]
  }
]
export default REGISTRATION_MFA
