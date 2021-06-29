
const RESET_PASSWORD_3 = (lang, tokens) => [
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
    component: 'BodyText',
    props: {
      children: tokens['SHARED.itMayTakeAFewMinutesToArrive']
    }
  },
  {
    component: 'DisplayUiElements'
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
  }
]
export default RESET_PASSWORD_3
