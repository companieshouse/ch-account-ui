
const REGISTRATION_4 = (lang, tokens) => [
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
          type: 'password',
          autoComplete: 'password'
        }
      }
    }
  },
  {
    component: 'Details',
    props: {
      children: tokens['REGISTRATION_4.[2].Details.weNeedSomeTextCopyForThisSectionAsItIsNot'],
      summary: tokens['REGISTRATION_4.[2].Details.helpWithCreatingAPassword']
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
export default REGISTRATION_4
