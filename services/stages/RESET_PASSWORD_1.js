/* eslint-disable no-template-curly-in-string */
const RESET_PASSWORD_1 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('RESET_PASSWORD_1.[1].PageHeading.enterYourEmailAddress')
    }
  },
  {
    conditional: {
      prop: '${notifyToken}',
      operator: 'eeq',
      value: 'forceUpdate'
    },
    component: 'NotificationBanner',
    dynamicProps: {
      title: tokens('SHARED.important'),
      heading: tokens('RESET_PASSWORD_1.[0].NotificationBanner.yourPasswordNeedsToBeUpdatedPleaseFollowThe')
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('RESET_PASSWORD_1.[1].PageHeading.enterYourEmailAddress')
    }
  },
  {
    component: 'BodyText',
    props: {
      children: tokens('RESET_PASSWORD_1.[2].BodyText.enterTheEmailAddressYouUsedToCreateYour')
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken1: {
          label: tokens('SHARED.emailAddress'),
          type: 'email',
          autoComplete: 'email'
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
export default RESET_PASSWORD_1
