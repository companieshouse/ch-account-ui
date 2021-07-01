
const REGISTRATION_4 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['REGISTRATION_4.[0].BrowserTitle.createAPassword']
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens['REGISTRATION_4.[0].PageHeading.createAPassword']
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken1: {
          label: tokens['SHARED.enterPassword'],
          hint: tokens['SHARED.thisMustBeAtLeast8CharactersLongAndHardTo'],
          formGroup: 'newPassword'
        }
      }
    }
  },
  {
    component: 'Details',
    props: {
      summary: tokens['REGISTRATION_4.[2].Details.helpWithCreatingAPassword']
    },
    content: [{
      component: 'BodyText',
      props: {
        children: tokens['REGISTRATION_4.[2].Details.youCanUseNumbers']
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
      children: tokens['SHARED.continue'],
      type: 'submit',
      testId: 'submitButton'
    }
  }
]
export default REGISTRATION_4
