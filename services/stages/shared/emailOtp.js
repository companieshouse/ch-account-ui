const emailOtp = (lang, tokens) => ([
  {
    component: 'PageHeading',
    props: {
      children: tokens['SHARED.checkYourEmail']
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'SpanText',
        dynamicProps: {
          children: tokens['EWF_LOGIN_OTP.[3].BodyText.weveSentYouAnEmailWithASecurityCodeToEmail']
        }
      }
    ]
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken3: {
          label: tokens['SHARED.securityCode'],
          autoComplete: 'off',
          type: 'number',
          suffix: false,
          fixedWidth: '10',
          customValidation: [
            {
              name: 'required',
              token: 'OTP_REQUIRED'
            }
          ]
        },
        IDToken4: {
          label: tokens['SHARED.securityCode'],
          autoComplete: 'off',
          type: 'number',
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
    conditional: {
      prop: '${type}',
      operator: 'nee',
      value: 'sms'
    },
    component: 'Details',
    props: {
      summary: tokens['SHARED.iHaveNotReceivedAnEmail']
    },
    content: [
      {
        component: 'BodyText',
        props: {
          children: tokens['SHARED.theEmailMayTakeAFewMinutesToArriveItsSubjectOTP']
        }
      },
      {
        component: 'BodyText',
        props: {},
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens['SHARED.checkYourJunkFolderIfItStillHasNotArrivedYou']
            }
          },
          {
            component: 'LinkText',
            props: {
              children: tokens['SHARED.askUsToSendYouAnotherEmail'],
              href: '/password-recovery/_restart/',
              testId: 'restartPasswordRecoveryLink'
            }
          },
          {
            component: 'SpanText',
            props: {
              children: tokens['SHARED.']
            }
          }
        ]
      },
      {
        component: 'BodyText',
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens['SHARED.ifYouHaveGivenUsTheWrongEmailAddressYou']
            }
          },
          {
            component: 'LinkText',
            props: {
              children: tokens['SHARED.giveUsADifferentEmailAddress'],
              href: '/password-recovery/_restart/',
              testId: 'restartPasswordRecoveryLink'
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
])

export default emailOtp
