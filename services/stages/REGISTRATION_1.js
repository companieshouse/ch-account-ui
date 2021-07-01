
const REGISTRATION_1 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['REGISTRATION_1.[0].BrowserTitle.createACompaniesHouseAccount']
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens['REGISTRATION_1.[1].PageHeading.whatAreYourDetails']
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken1: {
          type: 'text',
          autoComplete: 'name',
          hint: tokens['SHARED.thisIsTheNameThatWillBeDisplayedInYour']
        },
        IDToken2: {
          type: 'email',
          autoComplete: 'email',
          hint: tokens['REGISTRATION_1.[2].DisplayUiElements.wellSendALinkToThisEmailAddressToVerifyYou']
        },
        IDToken3: {
          type: 'text',
          autoComplete: 'tel',
          hint: tokens['SHARED.addYourMobileNumberToMakeYourAccountMore']
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
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        props: {
          children: tokens['REGISTRATION_1.[4].BodyText.ifYouAlreadyHaveAnAccountYouCanSign'],
          href: '/account/login',
          testId: 'loginExistingAccountLink'
        }
      }
    ]
  }
]
export default REGISTRATION_1
