
const INVITE_USER_1 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('INVITE_USER_1.[0].BrowserTitle.whatAreTheAuthorisedPersonsDetails')
    }
  },
  {
    component: 'Caption',
    dynamicProps: {
      children: '${companyName}'
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.whatAreTheAuthorisedPersonsDetails')
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
