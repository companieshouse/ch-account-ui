/* eslint-disable no-template-curly-in-string */
const ONBOARDING_PWD = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('ONBOARDING_PWD.[0].BrowserTitle.createAPassword')
    }
  },
  {
    component: 'NotificationBanner',
    dynamicProps: {
      title: tokens('SHARED.important'),
      heading: tokens('ONBOARDING_PWD_1.[0].NotificationBanner.youNeedToCreate')
    },
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens('ONBOARDING_PWD_1.[0].NotificationBanner.SpanText.thisIsBecause')
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
      },
      {
        component: 'SpanText',
        props: {
          children: tokens('ONBOARDING_PWD_1.[0].NotificationBanner.SpanText.whichWasProvided')
        }
      }
    ]
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('ONBOARDING_PWD_1.[1].PageHeading.createAPasswordForYourWebFiling')
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken2: {
          label: tokens('SHARED.enterPassword'),
          hint: tokens('SHARED.thisMustBeAtLeast8CharactersLongAndHardTo'),
          formGroup: 'newPassword'
        },
        IDToken3: {
          label: tokens('SHARED.reEnterPassword'),
          formGroup: 'newPassword'
        }
      }
    }
  },
  {
    component: 'Details',
    props: {
      summary: tokens('SHARED.helpWithCreatingYourPassword'),
      matomo: ['trackEvent', tokens('ONBOARDING_PWD_1.[1].PageHeading.createAPasswordForYourWebFiling'), tokens('SHARED.helpWithCreatingYourPassword')]
    },
    content: [
      {
        component: 'Fragment',
        content: []
      },
      {
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
      children: tokens('SHARED.createAccount'),
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
          children: tokens('ONBOARDING_PWD_1.[6].LinkText.guidanceAboutOnlineFiling'),
          testId: 'guidanceLink',
          href: 'https://www.gov.uk/guidance/filing-your-companies-house-information-online',
          matomo: ['trackEvent', tokens('ONBOARDING_PWD_1.[1].PageHeading.createAPasswordForYourWebFiling'), tokens('ONBOARDING_PWD_1.[6].LinkText.guidanceAboutOnlineFiling')]
        }
      }
    ]
  }
]
export default ONBOARDING_PWD
