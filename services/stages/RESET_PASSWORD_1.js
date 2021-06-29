
const RESET_PASSWORD_1 = (lang, tokens) => [
  {
    conditional: {
      prop: '${notifyToken}',
      operator: 'eeq',
      value: 'forceUpdate'
    },
    component: 'NotificationBanner',
    dynamicProps: {
      title: tokens['RESET_PASSWORD_1.[0].NotificationBanner.important'],
      heading: tokens['RESET_PASSWORD_1.[0].NotificationBanner.yourPasswordNeedsToBeUpdatedPleaseFollowThe']
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens['RESET_PASSWORD_1.[1].PageHeading.enterYourEmailAddress']
    }
  },
  {
    component: 'BodyText',
    props: {
      children: tokens['RESET_PASSWORD_1.[2].BodyText.enterTheEmailAddressYouUsedToCreateYour']
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken1: {
          type: 'email',
          autoComplete: 'email'
        }
      }
    }
  },
  {
    component: 'Button',
    props: {
      children: tokens['RESET_PASSWORD_1.[4].Button.sendLink'],
      type: 'submit',
      testId: 'submitButton'
    }
  }
]
export default RESET_PASSWORD_1
