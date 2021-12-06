/* eslint-disable no-template-curly-in-string */
const emailOtp = (lang, tokens) => ([
  {
    conditional: {
      prop: '${resend}',
      operator: 'is'
    },
    component: 'NotificationBanner',
    props: {
      title: tokens('SHARED.success'),
      heading: tokens('SHARED.emailSent'),
      type: 'success'
    },
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens('SHARED.WeveSentAnotherEmailOTP')
        }
      },
      {
        component: 'SpanText',
        props: {
          weight: 'bold'
        },
        dynamicProps: {
          children: '${emailAddress}'
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
      children: tokens('SHARED.checkYourEmail')
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'SpanText',
        dynamicProps: {
          children: tokens('EWF_LOGIN_OTP.[3].BodyText.weveSentYouAnEmailWithASecurityCodeToEmail')
        }
      }
    ]
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken3: {
          label: tokens('SHARED.securityCode'),
          autoComplete: 'off',
          type: 'number',
          suffix: false,
          fixedWidth: '10'
        },
        IDToken4: {
          label: tokens('SHARED.securityCode'),
          autoComplete: 'off',
          type: 'number',
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
    conditional: {
      prop: '${type}',
      operator: 'nee',
      value: 'sms'
    },
    component: 'Details',
    props: {
      summary: tokens('SHARED.iHaveNotReceivedAnEmail')
    },
    content: [
      {
        component: 'BodyText',
        props: {
          children: tokens('SHARED.theEmailMayTakeAFewMinutesToArriveItsSubjectOTP')
        }
      },
      {
        component: 'BodyText',
        props: {},
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens('SHARED.checkYourJunkFolderIfItStillHasNotArrivedYou')
            }
          },
          {
            component: 'LinkText',
            props: {
              children: tokens('SHARED.askUsToSendYouAnotherEmail'),
              handler: {
                name: 'onSecondarySubmit',
                params: {
                  target: 'IDToken5',
                  value: 0
                }
              },
              href: '',
              testId: 'resendEmail'
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

export default emailOtp
