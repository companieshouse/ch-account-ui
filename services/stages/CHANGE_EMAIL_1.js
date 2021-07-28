const CHANGE_EMAIL_1 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['SHARED.updateYourEmailAddress']
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens['SHARED.updateYourEmailAddress'],
      size: 'l'
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken2: {
          label: tokens['SHARED.enterYourCurrentPassword'],
          customValidation: [
            {
              name: 'required',
              token: 'PASSWORD_REQUIRED'
            }
          ]
        },
        IDToken3: {
          label: tokens['CHANGE_EMAIL_1.[2].DisplayUiElements.enterYourNewEmailAddress']
        },
        IDToken4: {
          label: tokens['CHANGE_EMAIL_1.[2].DisplayUiElements.reEnterYourNewEmailAddress']
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
          children: tokens['CHANGE_EMAIL_1.[3].ButtonGroup.updateEmailAddress'],
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
