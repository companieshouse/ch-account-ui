
const HOME_NOTIFICATIONS = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['SHARED.messages']
    }
  },
  {
    conditional: {
      prop: '${notifyToken}',
      operator: 'eeq',
      value: 'authSuccess'
    },
    component: 'NotificationBanner',
    dynamicProps: {
      type: 'success',
      title: tokens['SHARED.success'],
      heading: tokens['SHARED.anEmailRequestHasBeenSentToInvitedUserToBe']
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens['SHARED.messages']
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
              children: tokens['HOME_NOTIFICATIONS.[4].Fragment.youDoNotHaveAnyMessages']
            }
          },
          {
            component: 'Button',
            props: {
              renderAs: 'link',
              children: tokens['HOME_NOTIFICATIONS.[4].Fragment.backToYourHomePage'],
              href: '/account/home/',
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
              children: '${company.name}',
              anchor: '${company.number}'
            },
            props: {
              size: 'm',
              style: {
                'margin-right': '10px'
              }
            },
            content: [
              {
                component: 'Tag',
                dynamicProps: {
                  colour: 'yellow',
                  children: tokens['SHARED.pending']
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
                  width: 'two-thirds'
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
                props: {
                  width: 'three-quarters'
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
                                  children: tokens['HOME_NOTIFICATIONS.[5].Fragment.pendingRequests']
                                }
                              },
                              {
                                component: 'Th'
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
                            content: [
                              {
                                component: 'Td',
                                props: {
                                  rowSpan: 2
                                },
                                content: [
                                  {
                                    conditional: {
                                      prop: '${company.inviter.givenName}',
                                      operator: 'is'
                                    },
                                    component: 'BodyText',
                                    dynamicProps: {
                                      children: tokens['HOME_NOTIFICATIONS.[5].Fragment.companyInviterGivenNameWantsToGiveYou']
                                    }
                                  },
                                  {
                                    conditional: {
                                      prop: '${company.inviter.givenName}',
                                      operator: 'not'
                                    },
                                    component: 'BodyText',
                                    dynamicProps: {
                                      children: tokens['HOME_NOTIFICATIONS.[5].Fragment.someoneWantsToGiveYouAuthorisationToFile']
                                    }
                                  }
                                ]
                              },
                              {
                                conditional: {
                                  prop: '${user._refProperties.membershipStatus}',
                                  operator: 'eeq',
                                  value: 'confirmed'
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
                                component: 'Td',
                                props: {
                                  width: 'one-half'
                                },
                                content: [
                                  {
                                    component: 'BodyText',
                                    content: [
                                      {
                                        component: 'LinkText',
                                        dynamicProps: {
                                          href: '${company.acceptPath}',
                                          children: tokens['HOME_NOTIFICATIONS.[5].Fragment.acceptRequest'],
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
                                          href: '${company.declinePath}',
                                          children: tokens['HOME_NOTIFICATIONS.[5].Fragment.declineRequest'],
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
              }
            ]
          }
        ]
      },
      {
        component: 'SectionBreak'
      }
    ]
  }
]
export default HOME_NOTIFICATIONS
