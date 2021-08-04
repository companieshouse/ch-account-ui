
const REGISTRATION_1 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['SHARED.createACompaniesHouseAccount']
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens['SHARED.whatAreYourDetails']
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken1: {
          type: 'text',
          autoComplete: 'name'
        },
        IDToken2: {
          remove: true
        },
        IDToken3: {
          remove: true
        }
      }
    }
  },
  {
    component: 'Details',
    props: {
      summary: tokens['SHARED.whereYourNameWillBeShown']
    },
    content: [
      {
        component: 'BodyText',
        props: {
          children: tokens['SHARED.ifYouProvideYourNameThisWillBeShown']
        }
      },
      {
        component: 'List',
        props: {
          items: tokens['SHARED.whereYourNameWillBeShownList']
        }
      },
      {
        component: 'BodyText',
        props: {
          children: tokens['SHARED.itIsUpToYouHowYourNameIsShownForExampleJen']
        }
      },
      {
        component: 'BodyText',
        props: {
          children: tokens['SHARED.ifYouDoNotProvideYourNameYourEmailAddress']
        }
      }
    ]
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken1: {
          remove: true
        },
        IDToken2: {
          type: 'email',
          autoComplete: 'email',
          hint: tokens['SHARED.wellSendALinkToThisEmailAddressToVerifyYou']
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
  }
]
export default REGISTRATION_1
