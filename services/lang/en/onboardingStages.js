import genericError from './genericError.json'

const onboardingStages = {
  ONBOARDING_PWD: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Create your password'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: 'Create your password'
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
        children: 'Create password',
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
  ONBOARDING_PROFILE: [
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
  ONBOARDING_ERROR: genericError
}

export default onboardingStages
