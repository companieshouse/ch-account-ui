/* eslint-disable no-template-curly-in-string */
import genericError from './genericError.json'

const registrationStages = {
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
    },
    {
      conditional: {
        prop: '${errors.0.tokenNoNamespace}',
        operator: 'eeq',
        value: 'REGISTRATION_TOKEN_PARSING_ERROR'
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
    },
    {
      conditional: {
        prop: '${errors.0.tokenNoNamespace}',
        operator: 'eeq',
        value: 'REGISTRATION_TOKEN_EXPIRED_ERROR'
      },
      component: 'Fragment',
      content: [
        {
          component: 'PageHeading',
          props: {
            children: 'Verification link has expired',
            showErrorSummary: false
          }
        },
        {
          component: 'BodyText',
          content: [
            {
              component: 'SpanText',
              props: {
                children: 'The link to verify your email address how now expired. You must start again to '
              }
            },
            {
              component: 'LinkText',
              props: {
                children: 'register a new account',
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

  ]
}

export default registrationStages
