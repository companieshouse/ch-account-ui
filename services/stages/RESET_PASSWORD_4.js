
const RESET_PASSWORD_4 = (lang, tokens) => [
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
          hint: tokens['SHARED.thisMustBeAtLeast8CharactersLongAndHardTo']
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
          children: tokens['RESET_PASSWORD_4.[2].Details.trCopyGoesHere']
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
