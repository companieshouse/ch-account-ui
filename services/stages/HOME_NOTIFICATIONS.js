/* eslint-disable no-template-curly-in-string */
const HOME_NOTIFICATIONS = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.messages')
    }
  },
  {
    conditional: {
      prop: '${notifyToken}',
      operator: 'eeq',
      value: 'noCompanyMatch'
    },
    component: 'NotificationBanner',
    dynamicProps: {
      title: tokens('SHARED.important'),
      heading: 'The authorisation request for this company no longer exists'
    }
  },
  {
    conditional: {
      prop: '${notifyToken}',
      operator: 'eeq',
      value: 'companyAlreadyAuthorised'
    },
    component: 'NotificationBanner',
    dynamicProps: {
      title: tokens('SHARED.important'),
      heading: 'You are already authorised for this company'
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.messages'),
      size: 'l'
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
            component: 'BodyText',
            props: {
              size: 'm',
              children: tokens('HOME_NOTIFICATIONS.[4].Fragment.youDoNotHaveAnyMessages')
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
            }
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
                                  children: tokens('HOME_NOTIFICATIONS.[5].Fragment.pendingRequests')
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
                                    component: 'BodyText',
                                    dynamicProps: {
                                      children: tokens('HOME_NOTIFICATIONS.[5].Fragment.companyInviterGivenNameWantsToGiveYou')
                                    }
                                  }
                                ]
                              },
                              {
                                conditional: {
                                  prop: '${user.membershipStatus}',
                                  operator: 'eeq',
                                  value: 'confirmed'
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
                                        props: {
                                          className: 'govuk-link--no-visited-state',
                                          testId: 'declineRequestLink'
                                        },
                                        dynamicProps: {
                                          href: '${company.acceptPath}',
                                          children: tokens('HOME_NOTIFICATIONS.[5].Fragment.acceptRequest')

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
                                          className: 'govuk-link--no-visited-state',
                                          testId: 'declineRequestLink'
                                        },
                                        dynamicProps: {
                                          href: '${company.declinePath}',
                                          children: tokens('HOME_NOTIFICATIONS.[5].Fragment.declineRequest')
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
