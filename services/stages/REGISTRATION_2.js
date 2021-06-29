
const REGISTRATION_2 = (lang, tokens) => [
  {
    component: 'PageHeading',
    props: {
      children: tokens['REGISTRATION_2.[0].PageHeading.enterYourDetails']
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken1: {
          type: 'text',
          autoComplete: 'given-name'
        },
        IDToken2: {
          type: 'text',
          autoComplete: 'family-name'
        }
      }
    }
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
export default REGISTRATION_2
