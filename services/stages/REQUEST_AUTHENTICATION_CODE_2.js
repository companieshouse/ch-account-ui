/* eslint-disable no-template-curly-in-string */
const REQUEST_AUTHENTICATION_CODE_2 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('REQUEST_AUTHENTICATION_CODE_2.[0].BrowserTitle.authenticationCodeRequested')
    }
  },
  {
    component: 'NotificationBanner',
    props: {
      type: 'success',
      title: tokens('SHARED.success'),
      heading: tokens('REQUEST_AUTHENTICATION_CODE_2.[1].NotificationBanner.theAuthenticationCodeForFlowersLimitedWillBe'),
      children: tokens('REQUEST_AUTHENTICATION_CODE_2.[1].NotificationBanner.itUsuallyTakesUpTo5DaysToArrive')
    }
  },
  {
    component: 'DisplayUiElements'
  }
]
export default REQUEST_AUTHENTICATION_CODE_2
