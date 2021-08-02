const LOGIN = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['SHARED.signInToWebFiling']
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens['SHARED.signInToWebFiling']
    }
  },
  {
    component: 'BodyText',
    props: {
      children: tokens['LOGIN.[3].BodyText.inWebFilingYouCan']
    }
  },
  {
    component: 'List',
    props: {
      paddingBottom: 3
    },
    content: [
      {
        component: 'ListItem',
        props: {
          children: tokens['LOGIN.[4].List.inWebFilingYouCanOne']
        }
      },
      {
        component: 'ListItem',
        props: {
          children: tokens['LOGIN.[4].List.inWebFilingYouCanTwo']
        }
      },
      {
        component: 'ListItem',
        props: {
          children: tokens['LOGIN.[4].List.inWebFilingYouCanThree']
        }
      },
      {
        component: 'ListItem',
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens['LOGIN.[4].List.inWebFilingYouCanFourSignUp']
            }
          },
          {
            component: 'LinkText',
            props: {
              href: 'https://www.gov.uk/guidance/register-for-email-reminders-from-companies-house',
              children: tokens['LOGIN.[4].List.inWebFilingYouCanFourEmailReminders']
            }
          },
          {
            component: 'SpanText',
            props: {
              children: tokens['LOGIN.[4].List.inWebFilingYouCanFourWhenYour']
            }
          }
        ]
      },
      {
        component: 'ListItem',
        props: {
          children: tokens['LOGIN.[4].List.inWebFilingYouCanFive']
        }
      }
    ]
  },
  {
    component: 'Button',
    props: {
      renderAs: 'link',
      children: tokens['SHARED.signIn'],
      href: '/account/login/',
      testId: 'loginLink'
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        props: {
          children: tokens['LOGIN.[6].BodyText.createANewAccount'],
          href: '/account/register/_start/',
          testId: 'registerLink'
        }
      }
    ]
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        props: {
          children: tokens['LOGIN.[7].BodyText.whoCanUseWebFiling'],
          href: 'https://ewf.companieshouse.gov.uk/sframe?name=aboutWebFiling&lang=en',
          testId: 'aboutWebFilingLink'
        }
      }
    ]
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        dynamicProps: {
          href: '${links.legacyAuthURL}'
        },
        props: {
          children: tokens['SHARED.imAnAgentOrLenderAndIWantToFileACharge'],
          testId: 'lendersLink'
        }
      }
    ]
  }
]
export default LOGIN
