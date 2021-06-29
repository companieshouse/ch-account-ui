
const RESET_PASSWORD_6 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['RESET_PASSWORD_6.[0].PageHeading.checkYourEmails']
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens['RESET_PASSWORD_6.[0].PageHeading.checkYourEmails']
    }
  },
  {
    component: 'DisplayUiElements'
  },
  {
    component: 'BodyText',
    props: {},
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
          children: tokens['RESET_PASSWORD_6.[2].BodyText.email']
        },
        props: {
          weight: 'bold'
        }
      },
      {
        component: 'SpanText',
        props: {
          children: tokens['RESET_PASSWORD_6.[2].BodyText.whichContainsLinkToResetYourPassword']
        }
      }
    ]
  },
  {
    component: 'InsetText',
    props: {
      children: tokens['RESET_PASSWORD_6.[3].InsetText.theLinkWillExpireIn6Hours']
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
export default RESET_PASSWORD_6
