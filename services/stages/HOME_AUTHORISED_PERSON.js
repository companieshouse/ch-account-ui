/* eslint-disable no-template-curly-in-string */
const HOME_AUTHORISED_PERSON = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('HOME_AUTHORISED_PERSON.[0].BrowserTitle.authorisedPersonsDetails'),
      cleanTitle: false
    }
  },
  {
    conditional: {
      prop: '${notifyToken}',
      operator: 'eeq',
      value: 'resendSuccess'
    },
    component: 'NotificationBanner',
    props: {
      type: 'success',
      title: tokens('SHARED.success'),
      testId: 'notification-banner-auth-success',
      heading: tokens('HOME_AUTHORISED_PERSON.[2].NotificationBanner.emailSent')
    },
    dynamicProps: {
      notifyId: '${notifyId}'
    },
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens('HOME_AUTHORISED_PERSON.[2].NotificationBanner.weveSentAnotherEmailTo')
        }
      },
      {
        component: 'SpanText',
        props: {
          weight: 'bold'
        },
        dynamicProps: {
          children: '${user.email}'
        }
      },
      {
        component: 'SpanText',
        dynamicProps: {
          children: '.'
        }
      }
    ]
  },
  {
    component: 'Caption',
    props: {
      showErrorSummary: true
    },
    dynamicProps: {
      children: '${company.name}'
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.authorisedPersonsDetails'),
      showErrorSummary: false
    }
  },
  {
    component: 'SummaryList',
    dynamicProps: {
      'listItems.0.value': '${user.name}',
      'listItems.1.value': '${user.email}',
      'listItems.2.value': {
        component: 'Fragment',
        content: [
          {
            conditional: {
              prop: '${user.membershipStatus}',
              operator: 'eeq',
              value: 'confirmed'
            },
            component: 'Tag',
            props: {
              colour: 'green',
              children: tokens('SHARED.confirmed')
            }
          },
          {
            conditional: {
              prop: '${user.membershipStatus}',
              operator: 'eeq',
              value: 'pending'
            },
            component: 'Tag',
            props: {
              colour: 'yellow',
              children: tokens('SHARED.awaitingConfirmation')
            }
          },
          {
            conditional: {
              prop: '${user.membershipStatus}',
              operator: 'eeq',
              value: 'pending'
            },
            component: 'BodyText',
            content: [
              {
                component: 'Br'
              },
              {
                component: 'Fragment',
                dynamicProps: {
                  children: tokens('HOME_AUTHORISED_PERSON.[3].SummaryList.weHaveSentAnEmailToUserMailThisPersonMust')
                }
              }
            ]
          }
        ]
      },
      'listItems.2.action': {
        conditional: {
          prop: '${user.membershipStatus}',
          operator: 'eeq',
          value: 'pending'
        },
        component: 'LinkText',
        props: {
          children: tokens('HOME_AUTHORISED_PERSON.[3].SummaryList.resendEmail'),
          testId: 'resendAuthorisedUserRequestLink',
          matomo: ['trackEvent', tokens('SHARED.authorisedPersonsDetails'), tokens('HOME_AUTHORISED_PERSON.[3].SummaryList.resendEmail')]
        },
        dynamicProps: {
          href: '${company.resendPath}'
        }
      }
    },
    props: {
      hasActions: true,
      listItems: [
        {
          label: tokens('HOME_AUTHORISED_PERSON.[3].SummaryList.name'),
          value: ''
        },
        {
          label: tokens('SHARED.emailAddress'),
          value: ''
        },
        {
          label: tokens('SHARED.authorisationStatus'),
          value: ''
        }
      ]
    }
  },
  {
    conditional: {
      prop: '${user.membershipStatus}',
      operator: 'eeq',
      value: 'pending'
    },
    component: 'Button',
    props: {
      warning: true,
      renderAs: 'link',
      children: tokens('HOME_AUTHORISED_PERSON.[4].Button.cancelRequest'),
      href: '',
      testId: 'cancelPendingUserRequestLink',
      matomo: ['trackEvent', tokens('SHARED.authorisedPersonsDetails'), tokens('HOME_AUTHORISED_PERSON.[4].Button.cancelRequest')]
    },
    dynamicProps: {
      href: '${company.removePendingdPath}'
    }
  },
  {
    conditional: {
      prop: '${user.membershipStatus}',
      operator: 'eeq',
      value: 'confirmed'
    },
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        props: {
          children: tokens('HOME_AUTHORISED_PERSON.[5].LinkText.removeAuthorisationToFileOnlineForThis'),
          href: '',
          testId: 'removeAuthorisedUserRequestLink',
          matomo: ['trackEvent', tokens('SHARED.authorisedPersonsDetails'), tokens('HOME_AUTHORISED_PERSON.[5].LinkText.removeAuthorisationToFileOnlineForThis')]
        },
        dynamicProps: {
          href: '${company.removeAuthorisedPath}'
        }
      }
    ]
  }
]
export default HOME_AUTHORISED_PERSON
