
const UPDATE_PHONE_1 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['UPDATE_PHONE_1.[0].BrowserTitle.changeYourMobileNumber']
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens['SHARED.changeYourMobileNumber']
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens['UPDATE_PHONE_1.[2].BodyText.theMobileNumberCurrentlyStoredInYour']
        }
      },
      {
        component: 'SpanText',
        props: {
          weight: 'bold'
        },
        dynamicProps: {
          children: tokens['UPDATE_PHONE_1.[2].BodyText.profilePhoneNumber']
        }
      },
      {
        component: 'SpanText',
        props: {
          children: tokens['SHARED.']
        }
      }
    ]
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken2: {
          label: tokens['UPDATE_PHONE_1.[3].DisplayUiElements.newMobileNumber'],
          hint: tokens['UPDATE_PHONE_1.[3].DisplayUiElements.wellSendASecurityCodeToThisNumberByText'],
          type: 'number',
          autoComplete: 'off'
        },
        IDToken3: {
          label: tokens['SHARED.password'],
          hint: tokens['UPDATE_PHONE_1.[3].DisplayUiElements.enterYourCompaniesHouseAccountPassword']
        }
      }
    }
  },
  {
    component: 'ButtonGroup',
    content: [
      {
        component: 'Button',
        props: {
          children: tokens['SHARED.continue'],
          type: 'submit',
          testId: 'submitButton'
        }
      },
      {
        component: 'LinkText',
        props: {
          children: tokens['SHARED.cancel'],
          href: '/account/manage'
        }
      }
    ]
  }
]
export default UPDATE_PHONE_1
