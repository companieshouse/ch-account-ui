
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
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken2: {
          label: tokens['SHARED.mobileNumber'],
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
