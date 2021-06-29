
const EWF_LOGIN_OTP = (lang, tokens) => [
  {
    conditional: {
      prop: '${type}',
      operator: 'eeq',
      value: 'sms'
    },
    component: 'PageHeading',
    props: {
      children: tokens['SHARED.checkYourPhone']
    }
  },
  {
    conditional: {
      prop: '${type}',
      operator: 'nee',
      value: 'sms'
    },
    component: 'PageHeading',
    props: {
      children: tokens['EWF_LOGIN_OTP.[1].PageHeading.checkYourEmail']
    }
  },
  {
    conditional: {
      prop: '${type}',
      operator: 'eeq',
      value: 'sms'
    },
    component: 'BodyText',
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens['SHARED.weveSentYouATextMessageWithASecurityCode']
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
    conditional: {
      prop: '${type}',
      operator: 'nee',
      value: 'sms'
    },
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
          label: tokens['EWF_LOGIN_OTP.[5].DisplayUiElements.securityCode'],
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
      operator: 'eeq',
      value: 'sms'
    },
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
              children: tokens['SHARED.ifItStillHasNotArrivedYouCan']
            }
          },
          {
            component: 'LinkText',
            props: {
              children: tokens['SHARED.askUsToSendYouAnotherTextMessage'],
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
          children: tokens['SHARED.theEmailMayTakeAFewMinutesToArriveItsSubject']
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
]
export default EWF_LOGIN_OTP
