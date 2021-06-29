
const CHANGE_PASSWORD_1 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['CHANGE_PASSWORD_1.[0].BrowserTitle.changeYourPassword']
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens['SHARED.changeYourPassword']
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken2: {
          label: tokens['CHANGE_PASSWORD_1.[2].DisplayUiElements.enterYourCurrentPassword'],
          suffix: null,
          customValidation: [
            {
              name: 'required',
              token: 'PASSWORD_REQUIRED'
            }
          ]
        },
        IDToken3: {
          label: tokens['CHANGE_PASSWORD_1.[2].DisplayUiElements.enterANewPassword'],
          hint: tokens['SHARED.thisMustBeAtLeast8CharactersLongAndHardTo'],
          formGroup: 'newPassword'
        },
        IDToken4: {
          label: tokens['CHANGE_PASSWORD_1.[2].DisplayUiElements.reEnterTheNewPassword'],
          formGroup: 'newPassword'
        }
      }
    }
  },
  {
    component: 'Details',
    props: {
      summary: tokens['SHARED.helpWithCreatingYourPassword']
    },
    content: [
      {
        component: 'Fragment',
        content: []
      },
      {
        component: 'BodyText',
        props: {
          children: tokens['CHANGE_PASSWORD_1.[3].Details.youCanUseNumbersSymbolsAndSpaces']
        }
      },
      {
        component: 'BodyText',
        props: {
          children: tokens['CHANGE_PASSWORD_1.[3].Details.aGoodWayToCreateASecureAndMemorablePassword']
        }
      }
    ]
  },
  {
    component: 'Button',
    props: {
      children: tokens['SHARED.resetPassword'],
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
          children: tokens['SHARED.cancel'],
          href: '/account/manage'
        }
      }
    ]
  }
]
export default CHANGE_PASSWORD_1
