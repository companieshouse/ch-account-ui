
const RESET_PASSWORD_4 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['RESET_PASSWORD_4.[0].PageHeading.resetYourPassword']
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens['RESET_PASSWORD_4.[0].PageHeading.resetYourPassword']
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken1: {
          label: tokens['SHARED.enterANewPassword'],
          hint: tokens['SHARED.thisMustBeAtLeast8CharactersLongAndHardTo']
        },
        IDToken2: {
          label: tokens['SHARED.reEnterTheNewPassword']
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
        component: 'BodyText',
        props: {
          children: tokens['SHARED.youCanUseNumbersSymbolsAndSpaces']
        }
      },
      {
        component: 'BodyText',
        props: {
          children: tokens['SHARED.aGoodWayToCreateASecureAndMemorablePassword']
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
  }
]
export default RESET_PASSWORD_4
