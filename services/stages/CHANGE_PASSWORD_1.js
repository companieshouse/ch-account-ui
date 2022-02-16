/* eslint-disable no-template-curly-in-string */
const CHANGE_PASSWORD_1 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.changeYourPassword')
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.changeYourPassword')
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken2: {
          label: tokens('CHANGE_PASSWORD_1.[2].DisplayUiElements.enterYourCurrentPassword'),
          suffix: null,
          customValidation: [
            {
              name: 'required',
              token: 'PASSWORD_REQUIRED'
            }
          ]
        },
        IDToken3: {
          label: tokens('SHARED.enterANewPassword'),
          hint: tokens('SHARED.thisMustBeAtLeast8CharactersLongAndHardTo'),
          formGroup: 'newPassword'
        },
        IDToken4: {
          label: tokens('SHARED.reEnterTheNewPassword'),
          formGroup: 'newPassword'
        }
      }
    }
  },
  {
    component: 'Details',
    props: {
      summary: tokens('SHARED.helpWithCreatingYourPassword')
    },
    content: [
      {
        component: 'Fragment',
        content: []
      },
      {
        component: 'BodyText',
        props: {
          children: tokens('SHARED.youCanUseNumbersSymbolsAndSpaces')
        }
      },
      {
        component: 'BodyText',
        props: {
          children: tokens('SHARED.aGoodWayToCreateASecureAndMemorablePassword')
        }
      }
    ]
  },
  {
    component: 'ButtonGroup',
    content: [
      {
        component: 'Button',
        props: {
          children: tokens('SHARED.updatePassword'),
          type: 'submit',
          testId: 'submitButton'
        }
      },
      {
        component: 'LinkText',
        props: {
          children: tokens('SHARED.cancel'),
          href: '/account/manage',
          matomo: ['trackEvent', tokens('SHARED.changeYourPassword'), tokens('SHARED.cancel')]
        }
      }
    ]
  }
]
export default CHANGE_PASSWORD_1
