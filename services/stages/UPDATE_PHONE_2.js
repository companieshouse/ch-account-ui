/* eslint-disable no-template-curly-in-string */
// TODO: This stage should now be redundant, replaced by PHONE_OTP
const UPDATE_PHONE_2 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('UPDATE_PHONE_2.[0].BrowserTitle.checkYourPhone')
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.checkYourPhone'),
      size: 'l'
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
          fixedWidth: '10'
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
                  value: 0
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
]
export default UPDATE_PHONE_2
