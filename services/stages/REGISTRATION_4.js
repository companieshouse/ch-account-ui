
const REGISTRATION_4 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['REGISTRATION_4.[0].PageHeading.createAPassword']
    }
  },
  {
    component: 'NotificationBanner',
    props: {
      title: tokens['SHARED.success'],
      heading: tokens['SHARED.emailAddressVerified'],
      type: 'success'
    },
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens['SHARED.youHaveSuccessfullyVerifiedTheEmail']
        }
      },
      {
        component: 'SpanText',
        props: {
          weight: 'bold'
        },
        dynamicProps: {
          children: '${email}'
        }
      }
    ]
  },
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
          label: tokens['SHARED.enterPassword'],
          hint: tokens['SHARED.thisMustBeAtLeast8CharactersLongAndHardTo'],
          formGroup: 'newPassword'
        }
      }
    }
  },
  {
    component: 'Details',
    props: {
      summary: tokens['REGISTRATION_4.[2].Details.helpWithCreatingAPassword']
    },
    content: [{
      component: 'BodyText',
      props: {
        children: tokens['SHARED.youCanUseNumbersSymbolsAndSpaces']
      }
    },
    {
      component: 'BodyText',
      props: {
        children: tokens['SHARED.aGoodWayToCreateASecureAndMemorablePassword']
      }
    }
    ]
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
