/* eslint-disable no-template-curly-in-string */
import genericError from './genericError.json'

const features = {
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
            label: 'Company number'
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
            label: 'Security code'
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
  ],
  REGISTRATION_1: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Create a Companies House account'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: 'What are your details?'
      }
    },
    {
      component: 'DisplayUiElements',
      props: {
        elementProps: {
          IDToken1: {
            type: 'text',
            autoComplete: 'name',
            hint: "This is the name that will be displayed in your account. It is up to you how your name is displayed, for example 'Dan Smith' or 'Daniel Smith'."
          },
          IDToken2: {
            type: 'email',
            autoComplete: 'email',
            hint: "We'll send a link to this email address to verify you have access to it."
          },
          IDToken3: {
            type: 'text',
            autoComplete: 'tel',
            hint: "Add your mobile number to make your account more secure. We'll send a security code to this number by text message."
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
      component: 'BodyText',
      content: [
        {
          component: 'LinkText',
          props: {
            children: 'If you already have an account, you can sign in',
            href: '/account/login',
            testId: 'loginExistingAccountLink'
          }
        }
      ]
    }
  ],
  REGISTRATION_MFA: [
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
                href: '/account/register/_restart/'
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
  REGISTRATION_2: [
    {
      component: 'PageHeading',
      props: {
        children: 'Enter your details'
      }
    },
    {
      component: 'DisplayUiElements',
      props: {
        elementProps: {
          IDToken1: {
            type: 'text',
            autoComplete: 'given-name'
          },
          IDToken2: {
            type: 'text',
            autoComplete: 'family-name'
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
  REGISTRATION_3: [
    {
      component: 'PageHeading',
      props: {
        children: 'Verify your email address'
      }
    },
    {
      component: 'DisplayUiElements'
    },
    {
      component: 'BodyText',
      content: [
        {
          component: 'SpanText',
          props: {
            children: "We've sent an email to "
          }
        },
        {
          component: 'SpanText',
          dynamicProps: {
            children: '${email}'
          },
          props: {
            weight: 'bold'
          }
        },
        {
          component: 'SpanText',
          props: {
            children: ' which contains a verification link.'
          }
        }
      ]
    },
    {
      component: 'List',
      props: {
        type: 'number',
        items: [
          'Open the email.',
          'Select the verification link in the email.'
        ]
      }
    },
    {
      component: 'InsetText',
      props: {
        children: 'The verification link will expire if you do not verify your email address within 7 days.'
      }
    },
    {
      component: 'BodyText',
      props: {
        children: 'This page will update automatically when you select the link.',
        weight: 'bold'
      }
    },
    {
      component: 'Details',
      props: {
        children: 'TR** copy goes here',
        summary: 'I have not received an email'
      }
    }
  ],
  REGISTRATION_4: [
    {
      component: 'PageHeading',
      props: {
        children: 'Create a password'
      }
    },
    {
      component: 'DisplayUiElements',
      props: {
        elementProps: {
          IDToken1: {
            type: 'password',
            autoComplete: 'password'
          }
        }
      }
    },
    {
      component: 'Details',
      props: {
        children: 'We need some text copy for this section as it is not specified what should be here in the prototype images.',
        summary: 'Help with creating a password'
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
  REGISTRATION_5: [
    {
      component: 'PageHeading',
      props: {
        children: 'Email address verified'
      }
    },
    {
      component: 'InsetText',
      content: [
        {
          component: 'SpanText',
          props: {
            children: 'You have successfully verified the email address '
          }
        },
        {
          component: 'SpanText',
          dynamicProps: {
            children: '${email}'
          },
          props: {
            weight: 'bold'
          }
        }
      ]
    },
    {
      component: 'BodyText',
      content: [
        {
          component: 'SpanText',
          props: {
            children: 'You can now close this page and return the previous webpage to view your account, or '
          }
        },
        {
          component: 'LinkText',
          props: {
            children: 'go directly to your account',
            href: '/account/home/',
            testId: 'goToAccountHomeLink'
          }
        }
      ]
    }
  ],
  REGISTRATION_ERROR: [
    {
      conditional: {
        prop: '${errors.0.tokenNoNamespace}',
        operator: 'eeq',
        value: 'REGISTRATION_GENERAL_ERROR'
      },
      component: 'Fragment',
      content: genericError
    },
    {
      conditional: {
        prop: '${errors.0.tokenNoNamespace}',
        operator: 'eeq',
        value: 'REGISTRATION_SEND_EMAIL_ERROR'
      },
      component: 'Fragment',
      content: genericError
    },
    {
      conditional: {
        prop: '${errors.0.tokenNoNamespace}',
        operator: 'eeq',
        value: 'REGISTRATION_NO_TOKEN_ERROR'
      },
      component: 'Fragment',
      content: [
        {
          component: 'PageHeading',
          props: {
            children: 'Page not found',
            showErrorSummary: false
          }
        },
        {
          component: 'BodyText',
          props: {
            children: ['If you typed the link, check it is correct.']
          }
        },
        {
          component: 'BodyText',
          props: {
            children: 'If you pasted the link, check you copied the entire link.'
          }
        },
        {
          component: 'BodyText',
          content: [
            {
              component: 'SpanText',
              props: {
                children: 'If the link is correct, you must '
              }
            },
            {
              component: 'LinkText',
              props: {
                children: 'start again to register a new account',
                href: '/account/register/_start/',
                testId: 'registrationLink'
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
  GENERIC_ERROR: genericError,
  LIMIT_EXCEEDED_ERROR: [
    {
      component: 'PageHeading',
      props: {
        children: 'Account locked',
        showErrorSummary: false
      }
    },
    {
      component: 'BodyText',
      props: {
        children: 'You have entered incorrect details too many times.'
      }
    },
    {
      component: 'BodyText',
      props: {
        children: 'Your account is now locked for 5 minutes.'
      }
    },
    {
      component: 'BodyText',
      content: [
        {
          component: 'SpanText',
          props: {
            children: 'You can '
          }
        },
        {
          component: 'LinkText',
          props: {
            children: 'reset your password',
            href: '/password-recovery/request/',
            testId: 'accountHomeLink'
          }
        },
        {
          component: 'SpanText',
          props: {
            children: ' if you\'ve forgotten it.'
          }
        }
      ]
    }
  ],
  RESET_PASSWORD_1: [
    {
      conditional: {
        prop: '${notifyToken}',
        operator: 'eeq',
        value: 'forceUpdate'
      },
      component: 'NotificationBanner',
      dynamicProps: {
        title: 'Important',
        heading: 'Your password needs to be updated. Please follow the instructions.'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: 'Enter your email address'
      }
    },
    {
      component: 'BodyText',
      props: {
        children: "Enter the email address you used to create your Companies House account. We'll send you a link so you can reset your password."
      }
    },
    {
      component: 'DisplayUiElements',
      props: {
        elementProps: {
          IDToken1: {
            type: 'email',
            autoComplete: 'email'
          }
        }
      }
    },
    {
      component: 'Button',
      props: {
        children: 'Send Link',
        type: 'submit',
        testId: 'submitButton'
      }
    }
  ],
  RESET_PASSWORD_2: [
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
  RESET_PASSWORD_3: [
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
      component: 'BodyText',
      props: {
        children: 'It may take a few minutes to arrive.'
      }
    },
    {
      component: 'DisplayUiElements'
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
  RESET_PASSWORD_4: [
    {
      component: 'PageHeading',
      props: {
        children: 'Reset your password'
      }
    },
    {
      component: 'DisplayUiElements',
      props: {
        elementProps: {
          IDToken1: {
            hint: 'This must be at least 8 characters long and hard to guess.'
          }
        }
      }
    },
    {
      component: 'Details',
      props: {
        summary: 'Help with creating your password'
      },
      content: [
        {
          component: 'BodyText',
          props: {
            children: 'TR** copy goes here.'
          }
        }
      ]
    },
    {
      component: 'Button',
      props: {
        children: 'Reset password',
        type: 'submit',
        testId: 'submitButton'
      }
    }
  ],
  RESET_PASSWORD_5: [
    {
      component: 'Redirect',
      props: {
        url: "/account/login/?notifyTitle=Success&notifyHeading=You've successfully reset your password.&notifyType=success"
      }
    }
  ],
  RESET_PASSWORD_6: [
    {
      component: 'PageHeading',
      props: {
        children: 'Check your emails'
      }
    },
    {
      component: 'DisplayUiElements'
    },
    {
      component: 'BodyText',
      props: {
      },
      content: [
        {
          component: 'SpanText',
          props: {
            children: "We've sent an email to "
          }
        },
        {
          component: 'SpanText',
          dynamicProps: {
            children: '${email}'
          },
          props: {
            weight: 'bold'
          }
        },
        {
          component: 'SpanText',
          props: {
            children: ' which contains link to reset your password.'
          }
        }
      ]
    },
    {
      component: 'InsetText',
      props: {
        children: 'The link will expire in 6 hours.'
      }
    },
    {
      component: 'Details',
      props: {
        summary: 'I have not received an email'
      },
      content: [
        {
          component: 'BodyText',
          props: {
            children: "The email may take a few minutes to arrive. Its subject link is 'Reset your password - Companies House account'."
          }
        },
        {
          component: 'BodyText',
          props: {
          },
          content: [
            {
              component: 'SpanText',
              props: {
                children: 'Check your junk folder. If it still has not arrived, you can '
              }
            },
            {
              component: 'LinkText',
              props: {
                children: 'ask us to send you another email',
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
        },
        {
          component: 'BodyText',
          content: [
            {
              component: 'SpanText',
              props: {
                children: 'If you have given us the wrong email address, you can '
              }
            },
            {
              component: 'LinkText',
              props: {
                children: 'give us a different email address',
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
  RESET_PASSWORD_ERROR: [
    {
      conditional: {
        prop: '${errors.0.token}',
        operator: 'nee',
        value: 'RESET_PASSWORD_TOKEN_EXPIRED_ERROR'
      },
      component: 'PageHeading',
      props: {
        showErrorSummary: false,
        children: 'Sorry, there is a problem with the service'
      }
    },
    {
      conditional: {
        prop: '${errors.0.token}',
        operator: 'eeq',
        value: 'RESET_PASSWORD_TOKEN_EXPIRED_ERROR'
      },
      component: 'PageHeading',
      props: {
        showErrorSummary: false,
        children: 'Password reset link has expired'
      }
    },
    {
      conditional: {
        prop: '${errors.0.token}',
        operator: 'nee',
        value: 'RESET_PASSWORD_TOKEN_EXPIRED_ERROR'
      },
      component: 'BodyText',
      props: {
        children: 'Try again later.'
      }
    },
    {
      conditional: {
        prop: '${errors.0.token}',
        operator: 'eeq',
        value: 'RESET_PASSWORD_TOKEN_EXPIRED_ERROR'
      },
      component: 'ErrorPageSummary',
      content: [
        {
          component: 'LinkText',
          props: {
            children: 'Start again to reset your password',
            href: '/account/register/_restart/',
            testId: 'startRegistrationAgainLink'
          }
        }
      ]
    },
    {
      conditional: {
        prop: '${errors.0.token}',
        operator: 'nee',
        value: 'RESET_PASSWORD_TOKEN_EXPIRED_ERROR'
      },
      component: 'BodyText',
      content: [
        {
          component: 'LinkText',
          props: {
            children: 'Contact Companies House',
            href: 'https://www.gov.uk/contact-companies-house',
            testId: 'contactCompaniesHouseLink'
          }
        },
        {
          component: 'SpanText',
          props: {
            children: ' if you have any questions.'
          }
        }
      ]
    }
  ],
  COMPANY_ASSOCIATION_1: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Tell us the company number'
      }
    },
    {
      component: 'ErrorSummary',
      props: {
        title: 'There is a problem'
      }
    },
    {
      component: 'DisplayUiElements',
      props: {
        elementProps: {
          IDToken2: {
            renderLabelAs: 'heading',
            label: 'What is the company number?',
            fixedWidth: '10',
            hint: 'Enter the number of the company you would like to add to your Companies House account'
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
  COMPANY_ASSOCIATION_2: [
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
            href: '/account/associate/_restart'
          }
        }
      ]
    }
  ],
  COMPANY_ASSOCIATION_3: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Provide the company auth code'
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
    }
  ],
  COMPANY_ASSOCIATION_4: [
    {
      component: 'Redirect',
      dynamicProps: {
        url: '/account/your-companies/?notifyTitle=Success&notifyHeading=${company.name} has been added to your account.&notifyType=success'
      }
    }
  ],
  REQUEST_AUTHENTICATION_CODE_1: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Requesting an authentication code'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: 'Do you want us to send the authentication code to the registered office address?'
      }
    },
    {
      component: 'DisplayUiElements'
    },
    {
      component: 'BodyText',
      props: {
        children: "We'll send the authentication code by post to:"
      }
    },
    {
      component: 'BodyText',
      props: {
        weight: 'bold'
      },
      content: [
        {
          component: 'NlToBr',
          props: {
            content: '37 London Road\nLondon\nSE3 6GI'
          }
        }
      ]
    },
    {
      component: 'BodyText',
      props: {
        children: 'It can take up to 5 days to arrive.'
      }
    },
    {
      component: 'Button',
      props: {
        children: 'Send the authentication code',
        type: 'submit',
        testId: 'submitButton'
      }
    },
    {
      component: 'Button',
      props: {
        children: 'Cancel',
        secondary: true,
        className: 'marginLeft',
        renderAs: 'link',
        href: '/account/associate/',
        type: 'button',
        testId: 'cancelButton'
      }
    }
  ],
  REQUEST_AUTHENTICATION_CODE_2: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Authentication code requested'
      }
    },
    {
      component: 'NotificationBanner',
      props: {
        type: 'success',
        title: 'Success',
        heading: 'The authentication code for FLOWERS LIMITED will be posted to the registered office address.',
        children: 'It usually takes up to 5 days to arrive.'
      }
    },
    {
      component: 'DisplayUiElements'
    }
  ],
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
                        count: '',
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
                        count: '',
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
  ],
  LOGOUT_ERROR: genericError,
  NO_SESSION_ERROR: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'You are now signed out'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: 'You are now signed out',
        showErrorSummary: false
      }
    },
    {
      component: 'BodyText',
      props: {
        children: 'For your security, we\'ve signed you out.'
      }
    },
    {
      component: 'BodyText',
      props: {
        children: 'We have not saved your information.'
      }
    },
    {
      component: 'BodyText',
      content: [
        {
          conditional: {
            prop: '${restartPath}',
            operator: 'is'
          },
          component: 'LinkText',
          dynamicProps: {
            href: '{restartPath}'
          },
          props: {
            children: 'Sign back in to your account.',
            testId: 'loginExistingAccountLink'
          }
        },
        {
          component: 'LinkText',
          conditional: {
            prop: '${restartPath}',
            operator: 'not'
          },
          props: {
            children: 'Sign back in to your account.',
            href: '/account/login',
            testId: 'loginExistingAccountLink'
          }
        }
      ]
    }
  ],
  CHANGE_PASSWORD_1: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Change your password'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: 'Change your password'
      }
    },
    {
      component: 'DisplayUiElements',
      props: {
        elementProps: {
          IDToken2: {
            label: 'Enter your current password',
            suffix: null
          },
          IDToken3: {
            label: 'Enter a new password',
            hint: 'This must be at least 8 characters long and hard to guess.',
            formGroup: 'newPassword'
          },
          IDToken4: {
            label: 'Re-enter the new password',
            formGroup: 'newPassword'
          }
        }
      }
    },
    {
      component: 'Details',
      props: {
        summary: 'Help with creating your password'
      },
      content: [
        {
          component: 'Fragment',
          content: []
        },
        {
          component: 'BodyText',
          props: {
            children: 'You can use numbers, symbols and spaces.'
          }
        },
        {
          component: 'BodyText',
          props: {
            children: 'A good way to create a secure and memorable password is to use 3 random words.'
          }
        }
      ]
    },
    {
      component: 'Button',
      props: {
        children: 'Reset password',
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
            children: 'Cancel',
            href: '/account/manage'
          }
        }
      ]
    }
  ],
  CHANGE_PASSWORD_2: [
    {
      component: 'Redirect',
      props: {
        url: "/account/manage/?notifyTitle=Success&notifyHeading=You've successfully changed your password.&notifyType=success"
      }
    }
  ],
  CHANGE_NAME_1: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Change your name'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: 'Change your name'
      }
    },
    {
      component: 'BodyText',
      content: [
        {
          component: 'SpanText',
          dynamicProps: {
            children: 'The name currently shown in your Companies House account is '
          }
        },
        {
          component: 'SpanText',
          props: {
            weight: 'bold'
          },
          dynamicProps: {
            children: '${profileName}.'
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
      component: 'DisplayUiElements',
      props: {
        elementProps: {
          IDToken2: {
            label: 'Enter new full name',
            autoComplete: 'off'
          }
        }
      }
    },
    {
      component: 'ButtonGroup',
      content: [
        {
          component: 'Button',
          props: {
            children: 'Change name',
            type: 'submit',
            testId: 'submitButton'
          }
        },
        {
          component: 'LinkText',
          props: {
            children: 'Cancel',
            href: '/account/manage'
          }
        }
      ]
    }
  ],
  CHANGE_NAME_2: [
    {
      component: 'Redirect',
      dynamicProps: {
        url: '${changeSuccessPath}'
      }
    }
  ],
  UPDATE_PHONE_1: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Change your mobile number'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: 'Change your mobile number'
      }
    },
    {
      component: 'BodyText',
      content: [
        {
          component: 'SpanText',
          props: {
            children: 'The mobile number currently stored in your Companies House account is '
          }
        },
        {
          component: 'SpanText',
          props: {
            weight: 'bold'
          },
          dynamicProps: {
            children: '${profilePhoneNumber}'
          }
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
      component: 'DisplayUiElements',
      props: {
        elementProps: {
          IDToken2: {
            label: 'New mobile number',
            hint: "We'll send a security code to this number by text message.",
            type: 'number',
            autoComplete: 'off'

          },
          IDToken3: {
            label: 'Password',
            hint: 'Enter your Companies House account password.'
          }
        }
      }
    },
    {
      component: 'ButtonGroup',
      content: [
        {
          component: 'Button',
          props: {
            children: 'Continue',
            type: 'submit',
            testId: 'submitButton'
          }
        },
        {
          component: 'LinkText',
          props: {
            children: 'Cancel',
            href: '/account/manage'
          }
        }
      ]
    }
  ],
  UPDATE_PHONE_2: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Check your phone'
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
      component: 'BodyText',
      props: {
        children: 'It may take a few minutes to arrive.'
      }
    },
    {
      component: 'DisplayUiElements',
      props: {
        elementProps: {
          IDToken4: {
            label: 'Security code',
            type: 'number',
            autoComplete: 'off',
            suffix: false,
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
                href: '/account/manage/change-phone-number/_restart'
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
  UPDATE_PHONE_3: [
    {
      component: 'Redirect',
      dynamicProps: {
        url: '${changeSuccessPath}'
      }
    }
  ],
  INVITE_USER_1: [
    {
      component: 'BrowserTitle',
      props: {
        title: "What are the authorised person's details?"
      }
    },
    {
      component: 'Caption',
      dynamicProps: {
        children: '${companyName}'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: "What are the authorised person's details?"
      }
    },
    {
      component: 'BodyText',
      props: {
        children: 'Tell us the details of the person you want to authorise to file online for this company.'
      }
    },
    {
      component: 'InsetText',
      props: {
        children: 'You can change who is authorised to file at any time.'
      }
    },
    {
      component: 'DisplayUiElements',
      props: {
        elementProps: {
          IDToken2: {
            formGroup: 'nameAndEmail',
            label: 'Email address',
            hint: "We'll send an email that contains a request link."
          }
        }
      }
    },
    {
      component: 'Button',
      props: {
        children: 'Send email request',
        type: 'submit',
        testId: 'submitButton'
      }
    }
  ],
  INVITE_USER_2: [
    {
      component: 'Redirect',
      dynamicProps: {
        url: '${authoriseSuccessPath}'
      }
    }
  ],
  INVITE_USER_3: [
    {
      component: 'Redirect',
      dynamicProps: {
        url: '${acceptSuccessPath}'
      }
    }
  ],
  INVITE_USER_ERROR: [
    {
      component: 'PageHeading',
      props: {
        children: 'Unable to complete this request'
      }
    },
    {
      component: 'BodyText',
      content: [
        {
          component: 'LinkText',
          props: {
            children: 'Please try again',
            href: '/account/your-companies',
            testId: 'yourCompaniesLink'
          }
        }
      ]
    }
  ],
  SEND_MFA_SMS_ERROR: genericError,
  SEND_MFA_EMAIL_ERROR: genericError
}

export default features
