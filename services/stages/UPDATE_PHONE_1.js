/* eslint-disable no-template-curly-in-string */
const UPDATE_PHONE_1 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('UPDATE_PHONE_1.[0].BrowserTitle.changeYourMobileNumber')
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.changeYourMobileNumber'),
      size: 'l'
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken2: {
          label: tokens('SHARED.password'),
          hint: tokens('UPDATE_PHONE_1.[3].DisplayUiElements.enterYourCompaniesHouseAccountPassword')
        },
        IDToken3: {
          label: tokens('SHARED.mobileNumber'),
          hint: tokens('UPDATE_PHONE_1.[3].DisplayUiElements.wellSendASecurityCodeToThisNumberByText'),
          autoComplete: 'off'
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
          children: tokens('SHARED.continue'),
          type: 'submit',
          testId: 'submitButton'
        }
      },
      {
        component: 'LinkText',
        props: {
          children: tokens('SHARED.cancel'),
          href: '/account/manage',
          matomo: ['trackEvent', tokens('SHARED.changeYourMobileNumber'), tokens('SHARED.cancel')]
        }
      }
    ]
  }
]
export default UPDATE_PHONE_1
