/* eslint-disable no-template-curly-in-string */
const RESET_PASSWORD_6 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.checkYourEmail'),
      cleanTitle: false
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
          children: tokens('SHARED.WeveSentAnotherEmailOTP')
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
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.checkYourEmail')
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken2: {
          _hidden: true
        }
      }
    }
  },
  {
    component: 'BodyText',
    props: {},
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens('RESET_PASSWORD_6.[1].BodyText.ifThereIsAnAccount')
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
          children: tokens('RESET_PASSWORD_6.[2].SpanText.youllGetAnEmailWithALink')
        }
      }
    ]
  },
  {
    component: 'InsetText',
    props: {
      children: tokens('RESET_PASSWORD_6.[3].InsetText.theLinkWillExpireIn6Hours')
    }
  },
  {
    component: 'Details',
    props: {
      summary: tokens('SHARED.iHaveNotReceivedAnEmail'),
      matomo: ['trackEvent', tokens('SHARED.checkYourEmail'), tokens('SHARED.iHaveNotReceivedAnEmail')]
    },
    content: [
      {
        component: 'BodyText',
        props: {
          children: tokens('SHARED.theEmailMayTakeAFewMinutesToArriveItsSubjectReset')
        }
      },
      {
        component: 'BodyText',
        props: {},
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens('SHARED.checkTheEmailAddress')
            }
          },
          {
            component: 'LinkText',
            props: {
              children: tokens('SHARED.reEnterYourEmailAddress'),
              href: '/password-recovery/_restart/',
              testId: 'reEnterEmailAddressLink',
              matomo: ['trackEvent', tokens('SHARED.checkYourEmail'), tokens('SHARED.reEnterYourEmailAddress')]
            }
          }
        ]
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
              children: tokens('RESET_PASSWORD_6.askUsToSendYouAnotherEmail'),
              handler: {
                name: 'onSecondarySubmit',
                params: {
                  target: 'IDToken2',
                  value: 0,
                  noValidate: true
                }
              },
              href: '',
              testId: 'resendEmailLink',
              matomo: ['trackEvent', tokens('SHARED.checkYourEmail'), tokens('SHARED.askUsToSendYouAnotherEmail')]
            }
          }
        ]
      },
      {
        component: 'BodyText',
        props: {},
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens('SHARED.ifTheEmailAddressNotAssociated')
            }
          },
          {
            component: 'LinkText',
            props: {
              children: tokens('RESET_PASSWORD_6.registerANewAccount'),
              href: '/register/_start',
              testId: 'registerNewAccountResetPassword',
              matomo: ['trackEvent', tokens('SHARED.checkYourEmail'), 'Email not associated']
            }
          }
        ]
      }
    ]
  }
]
export default RESET_PASSWORD_6
