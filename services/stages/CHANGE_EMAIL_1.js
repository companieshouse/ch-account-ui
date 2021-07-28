
const CHANGE_EMAIL_1 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: 'Update your email address'
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: 'Update your email address',
      size: 'l'
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken2: {
          label: 'Enter your current password',
          customValidation: [
            {
              name: 'required',
              token: 'PASSWORD_REQUIRED'
            }
          ]
        },
        IDToken3: {
          label: 'Enter your new email address'
        },
        IDToken4: {
          label: 'Re-enter your new email address'
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
          children: 'Update email address',
          type: 'submit',
          testId: 'submitButton'
        }
      },
      {
        component: 'LinkText',
        props: {
          children: tokens['SHARED.cancel'],
          href: '/account/manage'
        }
      }
    ]
  }
]
export default CHANGE_EMAIL_1
