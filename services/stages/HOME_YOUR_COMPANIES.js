
const HOME_YOUR_COMPANIES = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['SHARED.yourCompanies']
    }
  },
  {
    conditional: {
      prop: '${notifyToken}',
      operator: 'eeq',
      value: 'authSuccess'
    },
    component: 'NotificationBanner',
    props: {
      type: 'success',
      title: tokens['SHARED.success'],
      testId: 'notification-banner-auth-success'
    },
    dynamicProps: {
      notifyId: '${notifyId}',
      heading: tokens['SHARED.anEmailRequestHasBeenSentToInvitedUserToBe']
    }
  },
  {
    conditional: {
      prop: '${notifyToken}',
      operator: 'eeq',
      value: 'acceptSuccess'
    },
    component: 'NotificationBanner',
    dynamicProps: {
      type: 'success',
      title: tokens['SHARED.success'],
      heading: tokens['HOME_YOUR_COMPANIES.[2].NotificationBanner.youAreNowAuthorisedToFileOnlineForCompany']
    }
  },
  {
    conditional: {
      prop: '${notifyToken}',
      operator: 'eeq',
      value: 'declineSuccess'
    },
    component: 'NotificationBanner',
    dynamicProps: {
      type: 'success',
      title: tokens['SHARED.success'],
      heading: tokens['HOME_YOUR_COMPANIES.[3].NotificationBanner.youHaveDeclinedTheRequestToHaveAuthorisation']
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens['SHARED.yourCompanies']
    }
  },
  {
    component: 'SectionBreak'
  },
  {
    conditional: {
      prop: '${companies.length}',
      operator: 'not'
    },
    component: 'Fragment',
    content: [
      {
        component: 'BoxCard',
        content: [
          {
            component: 'HeadingText',
            props: {
              size: 'm',
              children: tokens['HOME_YOUR_COMPANIES.[6].Fragment.youHaveNotAddedAnyCompaniesToThis']
            }
          },
          {
            component: 'BodyText',
            props: {
              children: tokens['HOME_YOUR_COMPANIES.[6].Fragment.addACompanyToYourAccountSoThatYou']
            }
          },
          {
            component: 'List',
            props: {
              items: [
                tokens['HOME_YOUR_COMPANIES.[7].List.fileForTheCompanyOnline'],
                tokens['HOME_YOUR_COMPANIES.[7].List.authorisePeopleToFile']
              ]
            }
          },
          {
            component: 'Button',
            props: {
              renderAs: 'link',
              children: tokens['SHARED.addACompany'],
              href: '/account/associate/_start',
              testId: 'accountAssociateCompanyLink'
            }
          }
        ]
      },
      {
        component: 'SectionBreak'
      }
    ]
  },
  {
    conditional: {
      prop: '${companies.length}',
      operator: 'gt',
      value: 0
    },
    iterator: {
      prop: '${companies}',
      name: 'company',
      index: 'index'
    },
    component: 'Fragment',
    dynamicProps: {
      key: '${company._id}'
    },
    content: [
      {
        component: 'BoxCard',
        content: [
          {
            component: 'HeadingText',
            dynamicProps: {
              children: tokens['SHARED.companyName']
            },
            props: {
              size: 'm'
            }
          },
          {
            component: 'Row',
            content: [
              {
                component: 'Column',
                props: {
                  width: 'three-quarters'
                },
                content: [
                  {
                    component: 'BodyText',
                    props: {
                      weight: 'bold'
                    },
                    content: [
                      {
                        component: 'SpanText',
                        props: {
                          children: tokens['SHARED.companyNumber']
                        }
                      },
                      {
                        component: 'Br'
                      },
                      {
                        component: 'Fragment',
                        dynamicProps: {
                          children: tokens['SHARED.companyNumber']
                        }
                      }
                    ]
                  },
                  {
                    component: 'BodyText',
                    props: {
                      weight: 'bold'
                    },
                    content: [
                      {
                        component: 'SpanText',
                        props: {
                          children: tokens['SHARED.correspondenceAddress']
                        }
                      },
                      {
                        component: 'Br'
                      },
                      {
                        component: 'Fragment',
                        dynamicProps: {
                          children: {
                            component: 'ArrayJoin',
                            props: {
                              joinWith: ', ',
                              stripEmpty: true
                            },
                            dynamicProps: {
                              arr: [
                                '${company.addressLine1}',
                                '${company.addressLine2}',
                                '${company.locality}',
                                '${company.region}',
                                '${company.postalCode}'
                              ]
                            }
                          }
                        }
                      }
                    ]
                  },
                  {
                    component: 'Row',
                    content: [
                      {
                        component: 'Column',
                        props: {
                          width: 'full'
                        },
                        content: [
                          {
                            component: 'Table',
                            content: [
                              {
                                component: 'THead',
                                content: [
                                  {
                                    component: 'Tr',
                                    content: [
                                      {
                                        component: 'Th',
                                        props: {
                                          children: tokens['HOME_YOUR_COMPANIES.[7].Fragment.peopleAuthorisedToFileForThisCompany']
                                        }
                                      },
                                      {
                                        component: 'Th',
                                        props: {
                                          children: tokens['SHARED.status']
                                        }
                                      },
                                      {
                                        component: 'Th',
                                        props: {
                                          children: tokens['HOME_YOUR_COMPANIES.[7].Fragment.view']
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                component: 'TBody',
                                content: [
                                  {
                                    component: 'Tr',
                                    iterator: {
                                      prop: '${company.users}',
                                      name: 'user',
                                      index: 'index'
                                    },
                                    content: [
                                      {
                                        conditional: {
                                          prop: '${user.givenName}',
                                          operator: 'is'
                                        },
                                        component: 'Td',
                                        dynamicProps: {
                                          children: tokens['HOME_YOUR_COMPANIES.[7].Fragment.userGivenName']
                                        }
                                      },
                                      {
                                        conditional: {
                                          prop: '${user.givenName}',
                                          operator: 'not'
                                        },
                                        component: 'Td',
                                        dynamicProps: {
                                          children: tokens['HOME_YOUR_COMPANIES.[7].Fragment.userMail']
                                        }
                                      },
                                      {
                                        conditional: {
                                          prop: '${user._refProperties.membershipStatus}',
                                          operator: 'ne',
                                          value: 'pending'
                                        },
                                        component: 'Td',
                                        content: [
                                          {
                                            component: 'Tag',
                                            dynamicProps: {
                                              colour: 'green',
                                              children: tokens['SHARED.confirmed']
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        conditional: {
                                          prop: '${user._refProperties.membershipStatus}',
                                          operator: 'eeq',
                                          value: 'pending'
                                        },
                                        component: 'Td',
                                        content: [
                                          {
                                            component: 'Tag',
                                            props: {
                                              colour: 'yellow',
                                              children: tokens['SHARED.pending']
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        component: 'Td',
                                        content: [
                                          {
                                            component: 'LinkText',
                                            dynamicProps: {
                                              href: '${user.detailsPath}'
                                            },
                                            props: {
                                              children: tokens['HOME_YOUR_COMPANIES.[7].Fragment.viewDetails'],
                                              className: 'govuk-link--no-visited-state'
                                            }
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
                            component: 'LinkText',
                            dynamicProps: {
                              href: '${company.authorisePath}',
                              children: tokens['HOME_YOUR_COMPANIES.[7].Fragment.authoriseAPersonToFileOnlineForThis'],
                              className: 'govuk-link--no-visited-state'
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
        component: 'SectionBreak'
      }
    ]
  },
  {
    conditional: {
      prop: '${companies.length}',
      operator: 'gt',
      value: 0
    },
    component: 'Button',
    props: {
      renderAs: 'link',
      children: tokens['SHARED.addACompany'],
      href: '/account/associate/_start',
      testId: 'accountAssociateCompanyLink'
    }
  }
]
export default HOME_YOUR_COMPANIES
