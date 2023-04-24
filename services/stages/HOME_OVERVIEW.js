/* eslint-disable no-template-curly-in-string */
const HOME_OVERVIEW = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('HOME_OVERVIEW.[1].Row.home')
    }
  },
  {
    conditional: {
      prop: '${scrsUserType}',
      operator: 'eq',
      value: 'existing'
    },
    component: 'NotificationBanner',
    dynamicProps: {
      heading: tokens('HOME_OVERVIEW.[0].NotificationBanner.companyHasBeenAdded')
    },
    props: {
      title: tokens('SHARED.success'),
      type: 'success'
    },
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens('HOME_OVERVIEW.[0].NotificationBanner.youCanNowFileDocuments')
        }
      },
      {
        component: 'SpanText',
        props: {
          children: tokens('SHARED.') + ' '
        }
      },
      {
        component: 'LinkText',
        props: {
          weight: 'bold',
          matomo: ['trackEvent', tokens('HOME_OVERVIEW.[1].Row.home'), tokens('HOME_OVERVIEW.[0].NotificationBanner.viewCompanyDetailsLink')]
        },
        dynamicProps: {
          children: tokens('HOME_OVERVIEW.[0].NotificationBanner.viewCompanyDetailsLink'),
          href: '/account/your-companies/'
        }
      }
    ]
  },
  {
    conditional: {
      prop: '${scrsUserType}',
      operator: 'eq',
      value: 'new'
    },
    component: 'NotificationBanner',
    dynamicProps: {
      children: tokens('HOME_OVERVIEW.[1].NotificationBanner.youCanNowFileDocumentsCompany')
    },
    props: {
      title: tokens('SHARED.success'),
      heading: tokens('HOME_OVERVIEW.[1].NotificationBanner.youveSetUpYourAccount'),
      type: 'success'
    },
    content: [
      {
        component: 'SpanText'
      },
      {
        component: 'SpanText',
        props: {
          children: ' '
        }
      },
      {
        component: 'LinkText',
        props: {
          weight: 'bold',
          matomo: ['trackEvent', tokens('HOME_OVERVIEW.[1].Row.home'), tokens('HOME_OVERVIEW.[0].NotificationBanner.viewCompanyDetailsLink')]
        },
        dynamicProps: {
          children: tokens('HOME_OVERVIEW.[0].NotificationBanner.viewCompanyDetailsLink'),
          href: '/account/your-companies/'
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
              matomo: ['trackEvent', tokens('HOME_OVERVIEW.[1].Row.home'), tokens('SHARED.NotificationBanner.CHConfirmationJourney.newFileAConfirmation')]
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
    component: 'Row',
    content: [
      {
        component: 'Column',
        content: [
          {
            component: 'HeadingText',
            props: {
              children: tokens('HOME_OVERVIEW.[1].Row.home'),
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
                props: {
                  className: 'flex'
                },
                content: [
                  {
                    component: 'InfoBlock',
                    dynamicProps: {
                      href: '${links.ewfAuthenticatedEntry}'
                    },
                    props: {
                      width: 'one-half',
                      testId: 'webFiling',
                      header: tokens('HOME_OVERVIEW.[3].Row.webFiling'),
                      className: 'flex',
                      matomo: ['trackEvent', tokens('HOME_OVERVIEW.[1].Row.home'), tokens('HOME_OVERVIEW.[3].Row.webFiling')]
                    },
                    content: [
                      {
                        component: 'BodyText',
                        props: {
                          children: tokens('SHARED.youCan'),
                          size: 16
                        }
                      },
                      {
                        component: 'List',
                        props: {
                          size: 16,
                          items: tokens('HOME_OVERVIEW.[3].List.webFiling')
                        }
                      }
                    ]
                  },
                  {
                    component: 'InfoBlock',
                    dynamicProps: {
                      count: '${companyData.count}'
                    },
                    props: {
                      count: 0,
                      countLabel: tokens('HOME_OVERVIEW.[2].InfoBlock.companies'),
                      width: 'one-half',
                      href: '/account/your-companies',
                      testId: 'yourCompanies',
                      header: tokens('SHARED.yourCompanies'),
                      className: 'noPaddingRight flex',
                      matomo: ['trackEvent', tokens('HOME_OVERVIEW.[1].Row.home'), tokens('SHARED.yourCompanies')]
                    },
                    content: [
                      {
                        component: 'BodyText',
                        props: {
                          children: tokens('SHARED.youCan'),
                          size: 16
                        }
                      },
                      {
                        component: 'List',
                        props: {
                          size: 16,
                          items: tokens('HOME_OVERVIEW.[3].List.yourCompanies')
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
