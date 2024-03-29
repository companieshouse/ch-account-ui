/* eslint-disable no-template-curly-in-string */
const INVITE_USER_1 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.whatIsTheAuthorisedPersonsEmailAddress')
    }
  },
  {
    component: 'Caption',
    props: {
      showErrorSummary: true
    },
    dynamicProps: {
      children: '${companyName}'
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.whatIsTheAuthorisedPersonsEmailAddress'),
      showErrorSummary: false
    }
  },
  {
    component: 'BodyText',
    props: {
      children: tokens('INVITE_USER_1.[3].BodyText.tellUsTheDetailsOfThePersonYouWantTo')
    }
  },
  {
    component: 'InsetText',
    props: {
      children: tokens('INVITE_USER_1.[4].InsetText.youCanChangeWhoIsAuthorisedToFileAtAny')
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken2: {
          formGroup: 'nameAndEmail',
          label: tokens('SHARED.emailAddress'),
          hint: tokens('INVITE_USER_1.[5].DisplayUiElements.wellSendAnEmailThatContainsARequest')
        }
      }
    }
  },
  {
    component: 'Button',
    props: {
      children: tokens('SHARED.continue'),
      type: 'submit',
      testId: 'submitButton'
    }
  }
]
export default INVITE_USER_1
