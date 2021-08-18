/* eslint-disable no-template-curly-in-string */
const HOME_YOUR_COMPANIES = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.yourCompanies')
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
      title: tokens('SHARED.success'),
      testId: 'notification-banner-auth-success'
    },
    dynamicProps: {
      notifyId: '${notifyId}',
      heading: tokens('SHARED.anEmailRequestHasBeenSentToInvitedUserToBe')
    }
  },
  {
    conditional: {
      prop: '${notifyToken}',
      operator: 'eeq',
      value: 'associateSuccess'
    },
    component: 'NotificationBanner',
    dynamicProps: {
      type: 'success',
      title: tokens('SHARED.success'),
      heading: tokens('HOME_YOUR_COMPANIES.[2].NotificationBanner.youAreNowAuthorisedToFileOnlineForCompany')
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
      title: tokens('SHARED.success'),
      heading: tokens('HOME_YOUR_COMPANIES.[2].NotificationBanner.youAreNowAuthorisedToFileOnlineForCompany')
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
      title: tokens('SHARED.success'),
      heading: tokens('HOME_YOUR_COMPANIES.[3].NotificationBanner.youHaveDeclinedTheRequestToHaveAuthorisation')
    }
  },
  {
    conditional: {
      prop: '${notifyToken}',
      operator: 'eeq',
      value: 'removeUserSuccess'
    },
    component: 'NotificationBanner',
    dynamicProps: {
      type: 'success',
      title: tokens('SHARED.success'),
      heading: tokens('HOME_YOUR_COMPANIES.[3].NotificationBanner.isNoLongerAuthorisedToFileOnline')
    },
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens('HOME_YOUR_COMPANIES.[3].NotificationBanner.youShould')
        }
      },
      {
        component: 'LinkText',
        props: {
          href: 'https://www.gov.uk/guidance/company-authentication-codes-for-online-filing#change-or-cancel-your-code',
          children: tokens('HOME_YOUR_COMPANIES.[3].NotificationBanner.changeTheAuthenticationCode')
        }
      },
      {
        component: 'SpanText',
        dynamicProps: {
          children: tokens('HOME_YOUR_COMPANIES.[3].NotificationBanner.forThisCompanyIf')
        }
      }
    ]
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.yourCompanies'),
      size: 'l'
    }
  },
  {
    component: 'Button',
    props: {
      renderAs: 'link',
      children: tokens('SHARED.addACompany'),
      href: '/account/associate/_start',
      testId: 'accountAssociateCompanyLink'
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
              children: tokens('HOME_YOUR_COMPANIES.[6].Fragment.youHaveNotAddedAnyCompaniesToThis')
            }
          },
          {
            component: 'BodyText',
            props: {
              children: tokens('HOME_YOUR_COMPANIES.[6].Fragment.addACompanyToYourAccountSoThatYou')
            }
          },
          {
            component: 'List',
            props: {
              items: [
                tokens('HOME_YOUR_COMPANIES.[7].List.fileForTheCompanyOnline'),
                tokens('HOME_YOUR_COMPANIES.[7].List.authorisePeopleToFile')
              ]
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
              children: '${company.name}'
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
                          children: tokens('SHARED.companyNumber')
                        }
                      },
                      {
                        component: 'Br'
                      },
                      {
                        component: 'Fragment',
                        dynamicProps: {
                          children: '${company.number}'
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
                          children: tokens('SHARED.correspondenceAddress')
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
                                          children: tokens('HOME_YOUR_COMPANIES.[7].Fragment.peopleAuthorisedToFileForThisCompany')
                                        }
                                      },
                                      {
                                        component: 'Th',
                                        props: {
                                          children: tokens('SHARED.authorisationStatus')
                                        }
                                      },
                                      {
                                        component: 'Th',
                                        props: {
                                          children: tokens('HOME_YOUR_COMPANIES.[7].Fragment.view')
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
                                      prop: '${company.members}',
                                      name: 'member',
                                      index: 'index'
                                    },
                                    content: [
                                      {
                                        component: 'Td',
                                        dynamicProps: {
                                          children: '${member.displayName}'
                                        }
                                      },
                                      {
                                        conditional: {
                                          prop: '${member.membershipStatus}',
                                          operator: 'ne',
                                          value: 'pending'
                                        },
                                        component: 'Td',
                                        content: [
                                          {
                                            component: 'Tag',
                                            dynamicProps: {
                                              colour: 'green',
                                              children: tokens('SHARED.confirmed')
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        conditional: {
                                          prop: '${member.membershipStatus}',
                                          operator: 'eeq',
                                          value: 'pending'
                                        },
                                        component: 'Td',
                                        content: [
                                          {
                                            component: 'Tag',
                                            props: {
                                              colour: 'yellow',
                                              children: tokens('SHARED.awaitingConfirmation')
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
                                              href: '${member.detailsPath}'
                                            },
                                            props: {
                                              children: tokens('HOME_YOUR_COMPANIES.[7].Fragment.viewDetails'),
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
                            component: 'BodyText',
                            content: [
                              {
                                component: 'LinkText',
                                dynamicProps: {
                                  href: '${company.filePath}',
                                  children: tokens('HOME_YOUR_COMPANIES.[7].Fragment.fileForThisCompany'),
                                  className: 'govuk-link--no-visited-state'
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
                                  href: '${company.authorisePath}',
                                  children: tokens('HOME_YOUR_COMPANIES.[7].Fragment.authoriseAPersonToFileOnlineForThis'),
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
      children: tokens('SHARED.addACompany'),
      href: '/account/associate/_start',
      testId: 'accountAssociateCompanyLink'
    }
  }
]
export default HOME_YOUR_COMPANIES
