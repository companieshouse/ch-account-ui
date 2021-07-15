
const HOME_OVERVIEW = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['SHARED.companiesHouseAccount']
    }
  },
  {
    component: 'Row',
    content: [
      {
        component: 'Column',
        content: [
          {
            component: 'HeadingText',
            props: {
              children: tokens['HOME_OVERVIEW.[1].Row.home'],
              size: 'l'
            },
            content: [
              {
                component: 'Caption',
                dynamicProps: {
                  children: '${profile.display_name}'
                },
                props: {
                  size: 'xl'
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    component: 'Row',
    content: [
      {
        component: 'Column',
        content: [
          {
            component: 'SectionBreak',
            props: {
              size: 's'
            }
          },
          {
            component: 'Column',
            content: [
              {
                component: 'InfoBlocks',
                content: [
                  {
                    component: 'InfoBlock',
                    dynamicProps: {
                      href: '${links.ewfAuthenticatedEntry}'
                    },
                    props: {
                      width: 'one-third',
                      testId: 'webFiling',
                      header: tokens['HOME_OVERVIEW.[3].Row.webFiling']
                    },
                    content: [
                      {
                        component: 'BodyText',
                        props: {
                          children: 'You can:',
                          size: 16
                        }
                      },
                      {
                        component: 'List',
                        props: {
                          size: 16,
                          items: [
                            'file your company’s annual accounts',
                            'file your company’s confirmation statement',
                            'file your company’s director or secretary changes',
                            'sign up to get email reminders'
                          ]
                        }
                      }
                    ]
                  },
                  {
                    component: 'InfoBlock',
                    dynamicProps: {
                      count: '${associationData.count}'
                    },
                    props: {
                      count: 0,
                      countLabel: 'companies',
                      width: 'one-third',
                      href: '/account/your-companies',
                      testId: 'yourCompanies',
                      header: tokens['SHARED.yourCompanies']
                    },
                    content: [
                      {
                        component: 'BodyText',
                        props: {
                          children: 'You can:',
                          size: 16
                        }
                      },
                      {
                        component: 'List',
                        props: {
                          size: 16,
                          items: [
                            'add a company to your WebFiling account',
                            'view, manage and file for companies you’ve added',
                            'authorise people to file documents for your company online',
                            'view and manage authorised people'
                          ]
                        }
                      }
                    ]
                  },
                  {
                    component: 'InfoBlock',
                    dynamicProps: {
                      count: '${associationData.pendingCount}'
                    },
                    props: {
                      count: 0,
                      countLabel: 'new messages',
                      width: 'one-third',
                      href: '/account/notifications/',
                      testId: 'notifications',
                      header: tokens['SHARED.messages']
                    },
                    content: [
                      {
                        component: 'BodyText',
                        size: 16,
                        props: {
                          children: 'View messages relating to your WebFiling account.'
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]
export default HOME_OVERVIEW
