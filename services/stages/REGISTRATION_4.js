/* eslint-disable no-template-curly-in-string */
const REGISTRATION_4 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('REGISTRATION_4.[0].PageHeading.createAPassword')
    }
  },
  {
    conditional: {
      prop: '${errors}',
      operator: 'lt',
      value: 1
    },
    component: 'NotificationBanner',
    props: {
      title: tokens('SHARED.success'),
      heading: tokens('SHARED.emailAddressVerified'),
      type: 'success'
    },
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens('SHARED.youHaveSuccessfullyVerifiedTheEmail')
        }
      },
      {
        component: 'SpanText',
        props: {
          weight: 'bold'
        },
        dynamicProps: {
          children: '${user.userName}'
        }
      }
    ]
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('REGISTRATION_4.[0].PageHeading.createAPassword')
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken2: {
          label: tokens('SHARED.enterPassword'),
          hint: tokens('SHARED.thisMustBeAtLeast8CharactersLongAndHardTo'),
          formGroup: 'newPassword',
          testId: 'passwordInputField'
        },
        IDToken3: {
          label: tokens('SHARED.reEnterPassword'),
          formGroup: 'newPassword',
          testId: 'reenterPasswordInputField'
        }
      }
    }
  },
  {
    component: 'Details',
    props: {
      summary: tokens('REGISTRATION_4.[2].Details.helpWithCreatingAPassword')
    },
    content: [{
      component: 'BodyText',
      props: {
        children: tokens('SHARED.youCanUseNumbersSymbolsAndSpaces')
      }
    },
    {
      component: 'BodyText',
      props: {
        children: tokens('SHARED.aGoodWayToCreateASecureAndMemorablePassword')
      }
    }
    ]
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
export default REGISTRATION_4
