const UNAUTHORISED_CHANGE_EMAIL = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('HOME_MANAGE_ACCOUNT.[2].NotificationBanner.youveSuccessfullyUpdatedYourEmailTo')
    }
  },
  {
    component: 'NotificationBanner',
    dynamicProps: {
      type: 'success',
      title: tokens('SHARED.success'),
      heading: tokens('HOME_MANAGE_ACCOUNT.[2].NotificationBanner.youveSuccessfullyUpdatedYourEmailTo')
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        dynamicProps: {
          href: '/account/login'
        },
        props: {
          children: tokens('SHARED.signBackInToYourAccount'),
          testId: 'loginExistingAccountLink',
          matomo: ['trackEvent', tokens('SHARED.sorryThereIsAProblemWithTheService'), tokens('SHARED.signBackInToYourAccount')]
        }
      }
    ]
  }
]
export default UNAUTHORISED_CHANGE_EMAIL
