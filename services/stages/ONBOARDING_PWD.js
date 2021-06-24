
const ONBOARDING_PWD = (lang, tokens) => [
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
]
export default ONBOARDING_PWD
