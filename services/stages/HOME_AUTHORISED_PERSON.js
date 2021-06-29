
const HOME_AUTHORISED_PERSON = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['HOME_AUTHORISED_PERSON.[0].BrowserTitle.authorisedPersonsDetails']
    }
  },
  {
    component: 'Caption',
    dynamicProps: {
      children: tokens['SHARED.companyName']
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens['SHARED.authorisedPersonsDetails']
    }
  },
  {
    component: 'SummaryList',
    dynamicProps: {
      'listItems.0.value': '${user.givenName}',
      'listItems.1.value': '${user.mail}',
      'listItems.2.value': {
        component: 'Fragment',
        content: [
          {
            conditional: {
              prop: '${user._refProperties.membershipStatus}',
              operator: 'eeq',
              value: 'confirmed'
            },
            component: 'Tag',
            props: {
              colour: 'green',
              children: 'Confirmed'
            }
          },
          {
            conditional: {
              prop: '${user._refProperties.membershipStatus}',
              operator: 'eeq',
              value: 'pending'
            },
            component: 'Tag',
            props: {
              colour: 'yellow',
              children: 'Pending'
            }
          },
          {
            conditional: {
              prop: '${user._refProperties.membershipStatus}',
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
                  children: 'We have sent an email to ${user.mail}. This person must select the request link in the email so that they can file online for ${company.name}.'
                }
              }
            ]
          }
        ]
      },
      'listItems.2.action': {
        conditional: {
          prop: '${user._refProperties.membershipStatus}',
          operator: 'eeq',
          value: 'pending'
        },
        component: 'LinkText',
        props: {
          children: 'Resend email',
          testId: 'resendAuthorisedUserRequestLink'
        },
        dynamicProps: {
          href: '${company.resendLink}'
        }
      },
      listItems: [
        null,
        null,
        {
          value: {
            content: [
              {
                props: {
                  children: tokens['SHARED.confirmed']
                }
              },
              {
                props: {
                  children: tokens['SHARED.pending']
                }
              },
              {
                content: [
                  null,
                  {
                    dynamicProps: {
                      children: tokens['HOME_AUTHORISED_PERSON.[3].SummaryList.weHaveSentAnEmailToUserMailThisPersonMust']
                    }
                  }
                ]
              }
            ]
          },
          action: {
            props: {
              children: tokens['HOME_AUTHORISED_PERSON.[3].SummaryList.resendEmail']
            }
          }
        }
      ]
    },
    props: {
      hasActions: true,
      listItems: [
        {
          label: tokens['HOME_AUTHORISED_PERSON.[3].SummaryList.name'],
          value: ''
        },
        {
          label: tokens['SHARED.emailAddress'],
          value: ''
        },
        {
          label: tokens['SHARED.status'],
          value: ''
        }
      ]
    }
  },
  {
    conditional: {
      prop: '${user._refProperties.membershipStatus}',
      operator: 'eeq',
      value: 'pending'
    },
    component: 'Button',
    props: {
      warning: true,
      renderAs: 'link',
      children: tokens['HOME_AUTHORISED_PERSON.[4].Button.cancelRequest'],
      href: '/account/associate/_start?action=cancel',
      testId: 'cancelAuthorisedUserRequestLink'
    }
  },
  {
    conditional: {
      prop: '${user._refProperties.membershipStatus}',
      operator: 'eeq',
      value: 'confirmed'
    },
    component: 'LinkText',
    props: {
      children: tokens['HOME_AUTHORISED_PERSON.[5].LinkText.removeAuthorisationToFileOnlineForThis'],
      href: '/account/home',
      testId: 'removeAuthorisedUserRequestLink'
    }
  }
]
export default HOME_AUTHORISED_PERSON
