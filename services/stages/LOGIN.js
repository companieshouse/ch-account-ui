import { CH_BASE_EWF_URL } from '../environment'
/* eslint-disable no-template-curly-in-string */
const LOGIN = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.signInToWebFiling')
    }
  },
  {
    component: 'NotificationBanner',
    dynamicProps: {
      title: tokens('SHARED.NotificationBanner.CHConfimationJourney.title'),
      heading: tokens('SHARED.ServiceMaintenance')
    },
    content: [
      {
        component: 'BodyText',
        props: {
          children: tokens('SHARED.NotificationBanner.Maintenance.dueToEssentialMaintenance')
        }
      },
      {
        component: 'BodyText',
        props: {
          children: tokens('SHARED.NotificationBanner.Maintenance.duringThisPeriod')
        }
      },
      {
        component: 'BodyText',
        props: {
          children: tokens('SHARED.NotificationBanner.Maintenance.weAppologiseForAnyInconvenience')
        }
      },

      {
        component: 'BodyText',
        props: {
          children: tokens('SHARED.NotificationBanner.Maintenance.weWillbeQueueing')
        }
      }
    ]
  },
  {
    component: 'NotificationBanner',
    dynamicProps: {
      title: tokens('SHARED.NotificationBanner.CHConfimationJourney.title'),
      heading: tokens('SHARED.InformationMessage')
    },
    content: [
      {
        component: 'LinkText',
        props: {
          children: tokens('SHARED.NotificationBanner.WebFiling.accountChanging'),
          href: 'https://www.gov.uk/government/news/companies-house-will-soon-be-introducing-a-new-webfiling-account',
          matomo: ['trackEvent', tokens('SHARED.NotificationBanner.WebFiling.accountChanging'), tokens('SHARED.NotificationBanner.WebFiling.accountChanging')]
        }
      }
    ]
  },
  {
    component: 'NotificationBanner',
    dynamicProps: {
      title: tokens('SHARED.NotificationBanner.CHConfimationJourney.title'),
      heading: tokens('SHARED.NotificationBanner.CHConfimationJourney.heading')
    },
    content: [
      {
        component: 'BodyText',
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens('SHARED.NotificationBanner.CHConfirmationJourney.ifYouHaveAPrivateCompany')
            }
          },
          {
            component: 'LinkText',
            props: {
              children: tokens('SHARED.NotificationBanner.CHConfirmationJourney.newFileAConfirmation'),
              href: 'https://find-and-update.company-information.service.gov.uk/confirmation-statement',
              matomo: ['trackEvent', tokens('SHARED.signInToWebFiling'), tokens('SHARED.NotificationBanner.CHConfirmationJourney.newFileAConfirmation')]
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
        component: 'BodyText',
        props: {
          children: tokens('SHARED.NotificationBanner.CHConfirmationJourney.youWillNotBeAble')
        }
      },
      {
        component: 'BodyText',
        props: {
          children: tokens('SHARED.NotificationBanner.CHConfirmationJourney.welshOnly')
        }
      }
    ]
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.signInToWebFiling')
    }
  },
  {
    component: 'BodyText',
    props: {
      children: tokens('LOGIN.[3].BodyText.inWebFilingYouCan')
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
          children: tokens('LOGIN.[4].List.inWebFilingYouCanOne')
        }
      },
      {
        component: 'ListItem',
        props: {
          children: tokens('LOGIN.[4].List.inWebFilingYouCanTwo')
        }
      },
      {
        component: 'ListItem',
        props: {
          children: tokens('LOGIN.[4].List.inWebFilingYouCanThree')
        }
      },
      {
        component: 'ListItem',
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens('LOGIN.[4].List.inWebFilingYouCanFourSignUp')
            }
          },
          {
            component: 'LinkText',
            props: {
              href: 'https://www.gov.uk/guidance/register-for-email-reminders-from-companies-house',
              children: tokens('LOGIN.[4].List.inWebFilingYouCanFourEmailReminders'),
              matomo: ['trackEvent', 'Landing Page', tokens('LOGIN.[4].List.inWebFilingYouCanFourEmailReminders')]
            }
          },
          {
            component: 'SpanText',
            props: {
              children: tokens('LOGIN.[4].List.inWebFilingYouCanFourWhenYour')
            }
          }
        ]
      },
      {
        component: 'ListItem',
        props: {
          children: tokens('LOGIN.[4].List.inWebFilingYouCanFive')
        }
      }
    ]
  },
  {
    component: 'Button',
    props: {
      renderAs: 'link',
      children: tokens('SHARED.signIn'),
      href: '/account/login/',
      testId: 'loginLink',
      matomo: ['trackGoal', 4]
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        props: {
          children: tokens('LOGIN.[6].BodyText.createANewAccount'),
          href: '/account/register/_start/',
          testId: 'registerLink',
          matomo: ['trackGoal', 2]
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
          children: tokens('LOGIN.[7].BodyText.whoCanUseWebFiling'),
          href: `${CH_BASE_EWF_URL}/sframe?name=aboutWebFiling&lang=en`,
          testId: 'aboutWebFilingLink',
          matomo: ['trackEvent', 'Landing Page', tokens('LOGIN.[7].BodyText.whoCanUseWebFiling')]
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
          children: tokens('SHARED.imAnAgentOrLenderAndIWantToFileACharge'),
          testId: 'lendersLink',
          matomo: ['trackEvent', 'Landing Page', tokens('SHARED.imAnAgentOrLenderAndIWantToFileACharge')]
        }
      }
    ]
  }
]
export default LOGIN
