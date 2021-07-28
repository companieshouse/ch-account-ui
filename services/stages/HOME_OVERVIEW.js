
const HOME_OVERVIEW = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['HOME_OVERVIEW.[1].Row.home']
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
                          children: tokens['SHARED.youCan'],
                          size: 16
                        }
                      },
                      {
                        component: 'List',
                        props: {
                          size: 16,
                          items: tokens['HOME_OVERVIEW.[3].List.webFiling']
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
                      countLabel: tokens['HOME_OVERVIEW.[2].InfoBlock.companies'],
                      width: 'one-third',
                      href: '/account/your-companies',
                      testId: 'yourCompanies',
                      header: tokens['SHARED.yourCompanies']
                    },
                    content: [
                      {
                        component: 'BodyText',
                        props: {
                          children: tokens['SHARED.youCan'],
                          size: 16
                        }
                      },
                      {
                        component: 'List',
                        props: {
                          size: 16,
                          items: tokens['HOME_OVERVIEW.[3].List.yourCompanies']
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
                      countLabel: tokens['HOME_OVERVIEW.[2].InfoBlock.newMessages'],
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
                          children: tokens['HOME_OVERVIEW.[2].InfoBlock.viewMessagesRelatedToYourAccount']
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
