
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
                  children: '${profile.given_name}'
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
            component: 'SectionBreak'
          },
          {
            component: 'HeadingText',
            props: {
              children: tokens['HOME_OVERVIEW.[2].Row.yourAccount'],
              size: 'm'
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
                      count: '${associationData.count}'
                    },
                    props: {
                      count: 0,
                      width: 'one-half'
                    },
                    content: [
                      {
                        component: 'HeadingText',
                        props: {
                          type: 'h3',
                          size: 'm'
                        },
                        content: [
                          {
                            component: 'LinkText',
                            props: {
                              children: tokens['SHARED.yourCompanies'],
                              href: '/account/your-companies',
                              testId: 'yourCompaniesLink'
                            }
                          }
                        ]
                      },
                      {
                        component: 'BodyText',
                        props: {
                          children: tokens['HOME_OVERVIEW.[2].Row.addACompanyToYourAccountViewManageAndFileFor']
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
                      width: 'one-half'
                    },
                    content: [
                      {
                        component: 'HeadingText',
                        props: {
                          type: 'h3',
                          size: 'm'
                        },
                        content: [
                          {
                            component: 'LinkText',
                            props: {
                              children: tokens['SHARED.messages'],
                              href: '/account/notifications/',
                              testId: 'notificationsLink'
                            }
                          }
                        ]
                      },
                      {
                        component: 'BodyText',
                        props: {
                          children: tokens['HOME_OVERVIEW.[2].Row.viewMessagesRelatingToYourCompaniesHouse']
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
  },
  {
    component: 'Row',
    content: [
      {
        component: 'Column',
        content: [
          {
            component: 'SectionBreak'
          },
          {
            component: 'HeadingText',
            props: {
              children: tokens['HOME_OVERVIEW.[3].Row.services'],
              size: 'm'
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
                    props: {
                      width: 'one-half'
                    },
                    content: [
                      {
                        component: 'HeadingText',
                        props: {
                          type: 'h3',
                          size: 'm'
                        },
                        content: [
                          {
                            component: 'LinkText',
                            dynamicProps: {
                              href: '${links.ewfAuthenticatedEntry}'
                            },
                            props: {
                              children: tokens['HOME_OVERVIEW.[3].Row.webFiling'],
                              testId: 'webFilingLink'
                            }
                          }
                        ]
                      },
                      {
                        component: 'List',
                        props: {
                          items: [
                            "File your company's confirmation statement / annual return",
                            "File your company's annual accounts",
                            "File your company's director / secretary changes and other information",
                            'Sign up to get email reminders when your company’s accounts and confirmation statement are due'
                          ]
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
