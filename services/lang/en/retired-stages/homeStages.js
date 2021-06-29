/* eslint-disable no-template-curly-in-string */
const homeStages = {
  HOME_OVERVIEW: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Companies House account'
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
                children: 'Home',
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
                children: 'Your account',
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
                                children: 'Your companies',
                                href: '/account/your-companies',
                                testId: 'yourCompaniesLink'
                              }
                            }
                          ]
                        },
                        {
                          component: 'BodyText',
                          props: {
                            children: 'Add a company to your account. View, manage and file for companies you’ve added. Manage people authorised to file on behalf of a company.'
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
                                children: 'Messages',
                                href: '/account/notifications/',
                                testId: 'notificationsLink'
                              }
                            }
                          ]
                        },
                        {
                          component: 'BodyText',
                          props: {
                            children: 'View messages relating to your Companies House account.'
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
                children: 'Services',
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
                                children: 'WebFiling',
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
  ],
  HOME_MANAGE_ACCOUNT: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Companies House account'
      }
    },
    {
      conditional: {
        prop: '${notifyToken}',
        operator: 'eeq',
        value: 'changeNumberSuccess'
      },
      component: 'NotificationBanner',
      dynamicProps: {
        type: 'success',
        title: 'Success',
        heading: "You've successfully updated your mobile number."
      }
    },
    {
      conditional: {
        prop: '${notifyToken}',
        operator: 'eeq',
        value: 'changeNameSuccess'
      },
      component: 'NotificationBanner',
      dynamicProps: {
        type: 'success',
        title: 'Success',
        heading: "You've successfully updated your name."
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: 'Manage your account'
      },
      content: [
        {
          component: 'Caption',
          props: {
            children: 'Make changes to your details and account settings',
            size: 'm',
            style: {
              paddingTop: '0.5em'
            }
          }
        }
      ]
    },
    {
      component: 'SummaryList',
      dynamicProps: {
        'listItems.0.value': '${profile.given_name}',
        'listItems.1.value': '${profile.email}',
        'listItems.3.value': '${profile.phone_number}'
      },
      props: {
        listItems: [
          {
            label: 'Full name',
            value: '',
            action: {
              label: 'Change',
              desc: 'name',
              href: '/account/manage/change-name/_start'
            }
          },
          {
            label: 'Email',
            value: '',
            action: {
              label: ''
            }
          },
          {
            label: 'Password',
            value: '*************',
            action: {
              label: 'Change',
              desc: 'password',
              href: '/account/manage/change-password/_start'
            }
          },
          {
            label: 'Mobile number',
            value: '',
            action: {
              label: 'Change',
              desc: 'mobile number',
              href: '/account/manage/change-phone-number/_start'
            }
          }
        ]
      }
    }
  ],
  HOME_YOUR_COMPANIES: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Companies House account'
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
        title: 'Success',
        testId: 'notification-banner-auth-success'
      },
      dynamicProps: {
        notifyId: '${notifyId}',
        heading: 'An email request has been sent to ${invitedUser} to be authorised to file online for ${companyName}'
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
        title: 'Success',
        heading: 'You are now authorised to file online for ${companyName}'
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
        title: 'Success',
        heading: 'You have declined the request to have authorisation to file online for ${companyName}'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: 'Your companies'
      },
      content: [
        {
          component: 'Caption',
          props: {
            children: 'View and manage the companies you have added to your account, and people authorised to file on behalf of a company.',
            size: 'm',
            style: {
              paddingTop: '0.5em'
            }
          }
        }
      ]
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
                children: 'You have not added any companies to this account'
              }
            },
            {
              component: 'BodyText',
              props: {
                children: 'Add a company to your account so that you can:'
              }
            },
            {
              component: 'List',
              props: {
                items: [
                  'file for the company online',
                  'authorise people to file for the company on your behalf'
                ]
              }
            },
            {
              component: 'Button',
              props: {
                renderAs: 'link',
                children: 'Add a company',
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
                            children: 'Company number'
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
                            children: 'Correspondence address'
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
                                            children: 'People authorised to file for this company'
                                          }
                                        },
                                        {
                                          component: 'Th',
                                          props: {
                                            children: 'Status'
                                          }
                                        },
                                        {
                                          component: 'Th',
                                          props: {
                                            children: 'View'
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
                                            children: '${user.givenName}'
                                          }
                                        },
                                        {
                                          conditional: {
                                            prop: '${user.givenName}',
                                            operator: 'not'
                                          },
                                          component: 'Td',
                                          dynamicProps: {
                                            children: '${user.mail}'
                                          }
                                        },
                                        {
                                          conditional: {
                                            prop: '${user._refProperties.membershipStatus}',
                                            operator: 'ne',
                                            value: 'pending'
                                          },
                                          component: 'Td',
                                          content: [{
                                            component: 'Tag',
                                            dynamicProps: {
                                              colour: 'green',
                                              children: 'Confirmed'
                                            }
                                          }]
                                        },
                                        {
                                          conditional: {
                                            prop: '${user._refProperties.membershipStatus}',
                                            operator: 'eeq',
                                            value: 'pending'
                                          },
                                          component: 'Td',
                                          content: [{
                                            component: 'Tag',
                                            props: {
                                              colour: 'yellow',
                                              children: 'Pending'
                                            }
                                          }]
                                        },
                                        {
                                          component: 'Td',
                                          content: [{
                                            component: 'LinkText',
                                            dynamicProps: {
                                              href: '${user.detailsPath}'
                                            },
                                            props: {
                                              children: 'View details',
                                              className: 'govuk-link--no-visited-state'
                                            }
                                          }]
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
                                children: 'Authorise a person to file online for this company',
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
        children: 'Add a company',
        href: '/account/associate/_start',
        testId: 'accountAssociateCompanyLink'
      }
    }
  ],
  HOME_NOTIFICATIONS: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Messages'
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
        title: 'Success',
        heading: 'An email request has been sent to ${invitedUser} to be authorised to file online for ${companyName}'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: 'Messages'
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
                children: 'You do not have any messages'
              }
            },
            {
              component: 'Button',
              props: {
                renderAs: 'link',
                children: 'Back to your home page',
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
                children: ' ${company.name} ',
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
                    children: 'Pending'
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
                            children: 'Company number'
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
                            children: 'Correspondence address'
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
                                    children: 'Pending requests'
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
                                        children: ' ${company.inviter.givenName} wants to give you authorisation to file online for this company.'
                                      }
                                    },
                                    {
                                      conditional: {
                                        prop: '${company.inviter.givenName}',
                                        operator: 'not'
                                      },
                                      component: 'BodyText',
                                      dynamicProps: {
                                        children: 'Someone wants to give you authorisation to file online for this company.'
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
                                  content: [{
                                    component: 'Tag',
                                    dynamicProps: {
                                      colour: 'green',
                                      children: 'Confirmed'
                                    }
                                  }]
                                },
                                {
                                  component: 'Td',
                                  props: {
                                    width: 'one-half'
                                  },
                                  content: [
                                    {
                                      component: 'BodyText',
                                      content: [{
                                        component: 'LinkText',
                                        dynamicProps: {
                                          href: '${company.acceptPath}',
                                          children: 'Accept request',
                                          className: 'govuk-link--no-visited-state'
                                        }
                                      }
                                      ]
                                    },
                                    {
                                      component: 'BodyText',
                                      content: [{
                                        component: 'LinkText',
                                        dynamicProps: {
                                          href: '${company.declinePath}',
                                          children: 'Decline request',
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
  ],
  HOME_AUTHORISED_PERSON: [
    {
      component: 'BrowserTitle',
      props: {
        title: "Authorised person's details"
      }
    },
    {
      component: 'Caption',
      dynamicProps: {
        children: '${company.name}'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: "Authorised person's details"
      }
    },
    {
      component: 'SummaryList',
      dynamicProps: {
        'listItems.0.value': '${user.givenName}',
        'listItems.1.value': '${user.mail}',
        'listItems.2.value': {
          component: 'Fragment',
          content: [
            {
              conditional: {
                prop: '${user._refProperties.membershipStatus}',
                operator: 'eeq',
                value: 'confirmed'
              },
              component: 'Tag',
              props: {
                colour: 'green',
                children: 'Confirmed'
              }
            },
            {
              conditional: {
                prop: '${user._refProperties.membershipStatus}',
                operator: 'eeq',
                value: 'pending'
              },
              component: 'Tag',
              props: {
                colour: 'yellow',
                children: 'Pending'
              }
            },
            {
              conditional: {
                prop: '${user._refProperties.membershipStatus}',
                operator: 'eeq',
                value: 'pending'
              },
              component: 'BodyText',
              content: [
                {
                  component: 'Br'
                },
                {
                  component: 'Fragment',
                  dynamicProps: {
                    children: 'We have sent an email to ${user.mail}. This person must select the request link in the email so that they can file online for ${company.name}.'
                  }
                }
              ]
            }
          ]
        },
        'listItems.2.action': {
          conditional: {
            prop: '${user._refProperties.membershipStatus}',
            operator: 'eeq',
            value: 'pending'
          },
          component: 'LinkText',
          props: {
            children: 'Resend email',
            testId: 'resendAuthorisedUserRequestLink'
          },
          dynamicProps: {
            href: '${company.resendLink}'
          }
        }
      },
      props: {
        hasActions: true,
        listItems: [
          {
            label: 'Name',
            value: ''
          },
          {
            label: 'Email address',
            value: ''
          },
          {
            label: 'Status',
            value: ''
          }
        ]
      }
    },
    {
      conditional: {
        prop: '${user._refProperties.membershipStatus}',
        operator: 'eeq',
        value: 'pending'
      },
      component: 'Button',
      props: {
        warning: true,
        renderAs: 'link',
        children: 'Cancel request',
        href: '/account/associate/_start?action=cancel',
        testId: 'cancelAuthorisedUserRequestLink'
      }
    },
    {
      conditional: {
        prop: '${user._refProperties.membershipStatus}',
        operator: 'eeq',
        value: 'confirmed'
      },
      component: 'LinkText',
      props: {
        children: 'Remove authorisation to file online for this company',
        href: '/account/home',
        testId: 'removeAuthorisedUserRequestLink'
      }
    }
  ]
}
export default homeStages
