/* eslint-disable no-template-curly-in-string */
const RESET_PASSWORD_4 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('RESET_PASSWORD_4.[0].PageHeading.resetYourPassword')
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('RESET_PASSWORD_4.[0].PageHeading.resetYourPassword')
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken2: {
          label: tokens('SHARED.enterANewPassword'),
          hint: tokens('SHARED.thisMustBeAtLeast8CharactersLongAndHardTo'),
          formGroup: 'newPassword'
        },
        IDToken3: {
          label: tokens('SHARED.reEnterTheNewPassword'),
          formGroup: 'newPassword',
          testId: 'reenterPasswordInputField'
        }
      }
    }
  },
  {
    component: 'Details',
    props: {
      summary: tokens('SHARED.helpWithCreatingYourPassword'),
      matomo: ['trackEvent', tokens('RESET_PASSWORD_4.[0].PageHeading.resetYourPassword'), tokens('SHARED.helpWithCreatingYourPassword')]
    },
    content: [
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
    component: 'Button',
    props: {
      children: tokens('SHARED.resetPassword'),
      type: 'submit',
      testId: 'submitButton',
      matomo: ['trackEvent', tokens('RESET_PASSWORD_4.[0].PageHeading.resetYourPassword'), tokens('SHARED.resetPassword')]
    }
  }
]
export default RESET_PASSWORD_4
