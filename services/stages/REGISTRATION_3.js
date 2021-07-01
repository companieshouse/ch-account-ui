
const REGISTRATION_3 = (lang, tokens) => [
  {
    component: 'PageHeading',
    props: {
      children: tokens['REGISTRATION_3.[0].PageHeading.verifyYourEmailAddress']
    }
  },
  {
    component: 'DisplayUiElements'
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens['SHARED.weveSentAnEmailTo']
        }
      },
      {
        component: 'SpanText',
        dynamicProps: {
          children: '${email}'
        },
        props: {
          weight: 'bold'
        }
      },
      {
        component: 'SpanText',
        props: {
          children: tokens['REGISTRATION_3.[2].BodyText.whichContainsAVerificationLink']
        }
      }
    ]
  },
  {
    component: 'List',
    props: {
      type: 'number',
      items: [
        'Open the email.',
        'Select the verification link in the email.'
      ]
    }
  },
  {
    component: 'InsetText',
    props: {
      children: tokens['REGISTRATION_3.[4].InsetText.theVerificationLinkWillExpire']
    }
  },
  {
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
export default REGISTRATION_3
