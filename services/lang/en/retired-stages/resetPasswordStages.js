/* eslint-disable no-template-curly-in-string */
const resetPasswordStages = {
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
  ]
}
export default resetPasswordStages
