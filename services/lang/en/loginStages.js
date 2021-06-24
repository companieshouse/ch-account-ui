/* eslint-disable no-template-curly-in-string */
const loginStages = {
  CH_LOGIN_1: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Sign in to Companies House account'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: 'Sign in to your Companies House account'
      }
    },
    {
      component: 'DisplayUiElements',
      props: {
        elementProps: {
          IDToken1: {
            formGroup: 'usernameAndPassword',
            label: 'Email Address',
            hint: 'You cannot use your WebFiling details to sign in. You must sign in to or create a Companies House account.'
          },
          IDToken2: {
            formGroup: 'usernameAndPassword',
            label: 'Password'
          }
        }
      }
    },
    {
      component: 'Button',
      props: {
        children: 'Sign in',
        type: 'submit',
        testId: 'submitButton'
      }
    },
    {
      component: 'BodyText',
      content: [
        {
          component: 'LinkText',
          props: {
            children: 'Register a new account',
            href: '/account/register/_start',
            testId: 'registerNewAccountLink'
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
            children: "I've forgotten my password",
            href: '/password-recovery/request',
            testId: 'forgottenMyPasswordLink'
          }
        }
      ]
    }
  ],
  CH_LOGIN_4: [
    {
      component: 'Redirect',
      dynamicProps: {
        url: '/password-recovery/request/?notifyToken=forceUpdate'
      }
    }
  ],
  EWF_LOGIN_1: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Sign in to WebFiling'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: 'Sign in to WebFiling'
      }
    },
    {
      component: 'DisplayUiElements',
      props: {
        elementProps: {
          IDToken1: {
            formGroup: 'usernameAndPassword',
            label: 'Email Address'
          },
          IDToken2: {
            formGroup: 'usernameAndPassword',
            label: 'Password'
          }
        }
      }
    },
    {
      component: 'Button',
      props: {
        children: 'Sign in',
        type: 'submit',
        testId: 'submitButton'
      }
    },
    {
      component: 'BodyText',
      content: [
        {
          component: 'LinkText',
          props: {
            children: 'Create a WebFiling account',
            href: '/account/register/_start',
            testId: 'registerNewAccountLink'
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
            children: "I've forgotten my password",
            href: '/password-recovery/request',
            testId: 'forgottenMyPasswordLink'
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
            href: '${links.ewfLegacyAuthUrl}'
          },
          props: {
            children: "I'm an agent or lender and I want to file a charge (mortgage) document",
            testId: 'forgottenMyPasswordLink'
          }
        }
      ]
    }
  ],
  EWF_PROFILE: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Update your personal details'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: 'Update your personal details'
      }
    },
    {
      component: 'DisplayUiElements',
      props: {
        elementProps: {
          IDToken3: {
            autoComplete: 'name',
            hint: "This is the name that will be displayed in your account. It is up to you how your name is displayed, for example 'Dan Smith' or 'Daniel Smith'.",
            label: 'What is your full name? (optional)'
          },
          IDToken4: {
            autoComplete: 'tel',
            hint: "Add your mobile number to make your account more secure. We'll send a security code to this number by text message.",
            label: 'What is your mobile number? (optional)'
          },
          IDToken6: {
            _hidden: true
          }
        }
      }
    },
    {
      component: 'ButtonGroup',
      content: [{
        component: 'Button',
        props: {
          children: 'Continue',
          type: 'submit',
          testId: 'submitButton'
        }
      },
      {
        component: 'Button',
        props: {
          children: 'Skip',
          type: 'submit',
          secondary: true,
          testId: 'submitButton',
          handler: {
            name: 'onSecondarySubmit',
            params: {
              target: 'IDToken6',
              value: 0
            }
          }
        }
      }
      ]
    }
  ],
  EWF_LOGIN_2: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'What is the company number?'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: 'Enter the details of the company you want to access in WebFiling'
      }
    },
    {
      component: 'DisplayUiElements',
      props: {
        elementProps: {
          IDToken2: {
            label: 'Where was the company registered?',
            options: [
              {
                label: 'England / Wales',
                value: 0,
                checked: false
              },
              {
                label: 'Scotland',
                value: 1,
                checked: false
              },
              {
                label: 'Northern Ireland',
                value: 2,
                checked: false
              }
            ]
          },
          IDToken3: {
            label: 'Company number',
            autoComplete: 'off',
            testId: 'companyNumberInputField'
          }
        }
      }
    },
    {
      component: 'Details',
      props: {
        summary: 'Help with my company number'
      },
      content: [
        {
          component: 'BodyText',
          props: {
          },
          content: [
            {
              component: 'SpanText',
              props: {
                children: 'You can find this by searching for the company on the '
              }
            },
            {
              component: 'LinkText',
              props: {
                children: 'Companies House register (opens in a new tab)',
                href: 'https://find-and-update.company-information.service.gov.uk',
                target: '_blank',
                testId: 'companiesHouseRegisterLink'
              }
            },
            {
              component: 'SpanText',
              props: {
                children: '.'
              }
            }
          ]
        }
      ]
    },
    {
      component: 'Button',
      props: {
        children: 'Continue',
        type: 'submit',
        testId: 'submitButton'
      }
    }
  ],
  EWF_LOGIN_3: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Confirm this is the correct company'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: 'Confirm this is the correct company'
      }
    },
    {
      component: 'HeadingText',
      dynamicProps: {
        children: '${company.name}'
      },
      props: {
        size: 'l'
      }
    },
    {
      component: 'SummaryList',
      dynamicProps: {
        'listItems.0.value': '${company.number}',
        'listItems.1.value': '${company.status}',
        'listItems.2.value': '${company.creationDate}',
        'listItems.3.value': '${company.type}',
        'listItems.4.value': {
          component: 'NlToBr',
          dynamicProps: {
            content: '${company.addressLine1}\n${company.addressLine2}\n${company.locality}\n${company.region}\n${company.postalCode}'
          }
        }
      },
      props: {
        listItems: [
          {
            label: 'Company number',
            value: ''
          },
          {
            label: 'Status',
            value: ''
          },
          {
            label: 'Incorporation date',
            value: ''
          },
          {
            label: 'Company type',
            value: ''
          },
          {
            label: 'Registered office address',
            value: ''
          }
        ]
      }
    },
    {
      component: 'DisplayUiElements',
      props: {
        elementProps: {
          IDToken4: {
            _hidden: true
          }
        }
      }
    },
    {
      component: 'Button',
      props: {
        children: 'Confirm and continue',
        type: 'submit',
        testId: 'submitButton'
      }
    },
    {
      component: 'BodyText',
      content: [
        {
          component: 'LinkText',
          props: {
            children: 'Choose a different company',
            testId: 'chooseDifferentCompanyLink'
          },
          dynamicProps: {
            href: '${links.chooseCompanyPath}'
          }
        }
      ]
    }
  ],
  EWF_LOGIN_4: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Enter the company authentication code'
      }
    },
    {
      component: 'DisplayUiElements',
      dynamicProps: {
        'elementProps.IDToken2.caption': '${company.name}'
      },
      props: {
        elementProps: {
          IDToken2: {
            renderLabelAs: 'heading',
            caption: '',
            captionPosition: 'above',
            label: 'Enter the company authentication code',
            fixedWidth: '10'
          }
        }
      }
    },
    {
      component: 'Button',
      props: {
        children: 'Continue',
        type: 'submit',
        testId: 'submitButton'
      }
    },
    {
      component: 'Details',
      props: {
        summary: 'Help with authentication code'
      },
      content: [
        {
          component: 'BodyText',
          props: {
            children: 'This is a 6 character code issued by us to each company. The code is used to authorise online filings.'
          }
        },
        {
          component: 'LinkText',
          dynamicProps: {
            href: '${links.requestAuthCodePath}'
          },
          props: {
            children: 'Request an authentication code',
            testId: 'requestAuthCodeLink'
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
            href: '${links.ewfLegacyAuthUrl}'
          },
          props: {
            children: "I'm an agent or lender and I want to file a charge (mortgage) document",
            testId: 'forgottenMyPasswordLink'
          }
        }
      ]
    }
  ],
  EWF_LOGIN_5: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Add this company to your Companies House account'
      }
    },
    {
      component: 'DisplayUiElements',
      dynamicProps: {
        'elementProps.IDToken2.caption': '${company.name}'
      },
      props: {
        elementProps: {
          IDToken2: {
            renderLabelAs: 'heading',
            captionPosition: 'above',
            label: 'Do you want to add this company to your Companies House account?',
            fixedWidth: '10'
          }
        }
      }
    },
    {
      component: 'Details',
      props: {
        summary: 'Benefits of adding this company to your Companies House account'
      },
      content: [
        {
          component: 'BodyText',
          props: {
            children: 'By adding this company to your account, you:'
          }
        },
        {
          component: 'List',
          props: {
            items: [
              "will not need to re-enter the company's authentication code for most online filings",
              'can authorise other people to file on your behalf'
            ]
          }
        }
      ]
    },
    {
      component: 'Button',
      props: {
        children: 'Continue',
        type: 'submit',
        testId: 'submitButton'
      }
    }
  ],
  EWF_LOGIN_OTP_METHOD: [
    {
      component: 'PageHeading',
      props: {
        children: "How do you want to confirm it's you?"
      }
    },
    {
      component: 'BodyText',
      props: {
        children: "Before you can make changes to your account, we need to confirm it's you. This helps us keep your account secure."
      }
    },
    {
      component: 'DisplayUiElements',
      props: {
        elementProps: {
          IDToken1: {
            label: null,
            options: [
              {
                label: 'Email'
              },
              {
                label: 'Text'
              }
            ]
          }
        }
      }
    },
    {
      component: 'Button',
      props: {
        children: 'Continue',
        type: 'submit',
        testId: 'submitButton'
      }
    }
  ],
  EWF_LOGIN_OTP: [
    {
      conditional: {
        prop: '${type}',
        operator: 'eeq',
        value: 'sms'
      },
      component: 'PageHeading',
      props: {
        children: 'Check your phone'
      }
    },
    {
      conditional: {
        prop: '${type}',
        operator: 'nee',
        value: 'sms'
      },
      component: 'PageHeading',
      props: {
        children: 'Check your email'
      }
    },
    {
      conditional: {
        prop: '${type}',
        operator: 'eeq',
        value: 'sms'
      },
      component: 'BodyText',
      content: [
        {
          component: 'SpanText',
          props: {
            children: "We've sent you a text message with a security code to "
          }
        },
        {
          component: 'SpanText',
          props: {
            weight: 'bold'
          },
          content: [
            {
              component: 'ObfuscatePhoneNumber',
              dynamicProps: {
                phoneNumber: '${phoneNumber}'
              }
            }
          ]
        },
        {
          component: 'SpanText',
          props: {
            children: '.'
          }
        }
      ]
    },
    {
      conditional: {
        prop: '${type}',
        operator: 'nee',
        value: 'sms'
      },
      component: 'BodyText',
      content: [
        {
          component: 'SpanText',
          dynamicProps: {
            children: "We've sent you an email with a security code to ${emailAddress}."
          }
        }
      ]
    },
    {
      component: 'BodyText',
      props: {
        children: 'It may take a few minutes to arrive.'
      }
    },
    {
      component: 'DisplayUiElements',
      props: {
        elementProps: {
          IDToken1: {
            label: 'Security code',
            required: true
          }
        }
      }
    },
    {
      component: 'Button',
      props: {
        children: 'Continue',
        type: 'submit',
        testId: 'submitButton'
      }
    },
    {
      component: 'Details',
      props: {
        summary: 'I have not received a text message'
      },
      content: [
        {
          component: 'BodyText',
          props: {
            children: 'The text message may take a few minutes to arrive.'
          }
        },
        {
          component: 'BodyText',
          content: [
            {
              component: 'SpanText',
              props: {
                children: 'If it still has not arrived, you can '
              }
            },
            {
              component: 'LinkText',
              props: {
                children: 'ask us to send you another text message',
                href: '/password-recovery/_restart/',
                testId: 'restartPasswordRecoveryLink'
              }
            },
            {
              component: 'SpanText',
              props: {
                children: '.'
              }
            }
          ]
        }
      ]
    }
  ],
  LOGIN_MFA: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Verify your mobile number'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: 'Check your phone'
      }
    },
    {
      component: 'BodyText',
      content: [
        {
          component: 'SpanText',
          props: {
            children: "We've sent a text message with a security code to "
          }
        },
        {
          component: 'SpanText',
          props: {
            weight: 'bold'
          },
          content: [
            {
              component: 'ObfuscatePhoneNumber',
              dynamicProps: {
                phoneNumber: '${phoneNumber}'
              }
            }
          ]
        }
      ]
    },
    {
      component: 'BodyText',
      props: {
        children: 'It may take a few minutes to arrive.'
      }
    },
    {
      component: 'DisplayUiElements',
      props: {
        elementProps: {
          IDToken1: {
            label: 'Security code',
            type: 'number',
            autoComplete: 'off'
          }
        }
      }
    },
    {
      component: 'Button',
      props: {
        children: 'Continue',
        type: 'submit',
        testId: 'submitButton'
      }
    },
    {
      component: 'Details',
      props: {
        summary: 'I have not received a text message'
      },
      content: [
        {
          component: 'BodyText',
          props: {
            children: 'The text message may take a few minutes to arrive.'
          }
        },
        {
          component: 'BodyText',
          content: [
            {
              component: 'SpanText',
              props: {
                children: 'If it does not arrive, you can '
              }
            },
            {
              component: 'LinkText',
              props: {
                children: 'ask us to send you another text message',
                href: '/account/login/'
              }
            },
            {
              component: 'SpanText',
              props: {
                children: '.'
              }
            }
          ]
        }
      ]
    }
  ]
}

export default loginStages
