/* eslint-disable no-template-curly-in-string */
const REGISTRATION_3 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('REGISTRATION_3.[0].PageHeading.verifyYourEmailAddress')
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('REGISTRATION_3.[0].PageHeading.verifyYourEmailAddress')
    }
  },
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
          children: tokens('SHARED.WeveSentAnotherEmail')
        }
      },
      {
        component: 'SpanText',
        props: {
          weight: 'bold'
        },
        dynamicProps: {
          children: '${email}'
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
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken5: {
          _hidden: true
        }
      }
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens('SHARED.weveSentAnEmailTo')
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
          children: tokens('REGISTRATION_3.[2].BodyText.whichContainsAVerificationLink')
        }
      }
    ]
  },
  {
    component: 'List',
    props: {
      type: 'number',
      items: [
        tokens('REGISTRATION_3.[6].List.openTheEmail'),
        tokens('REGISTRATION_3.[6].List.selectTheVerificationLink')
      ]
    }
  },
  {
    component: 'InsetText',
    props: {
      children: tokens('REGISTRATION_3.[4].InsetText.theVerificationLinkWillExpire')
    }
  },
  {
    component: 'Details',
    props: {
      summary: tokens('SHARED.iHaveNotReceivedAnEmail')
    },
    content: [
      {
        component: 'BodyText',
        props: {
          children: tokens('SHARED.theEmailMayTakeAFewMinutesToArriveItsSubjectVerify')
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
                  value: 0,
                  noValidate: true
                }
              },
              href: '',
              testId: 'resendEmailLink'
            }
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
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens('SHARED.ifYouHaveGivenUsTheWrongEmailAddressYou')
            }
          },
          {
            component: 'LinkText',
            props: {
              children: tokens('SHARED.giveUsADifferentEmailAddress'),
              handler: {
                name: 'onSecondarySubmit',
                params: {
                  target: 'IDToken5',
                  value: 1
                }
              },
              href: '',
              testId: 'changeEmail'
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
export default REGISTRATION_3
