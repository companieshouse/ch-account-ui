/* eslint-disable no-template-curly-in-string */
const REQUEST_AUTH_CODE = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    dynamicProps: {
      title: tokens('REQUEST_AUTHENTICATION_CODE_1.[1].PageHeading.youNeedTheAuthenticationCode')
    }
  },
  {
    component: 'PageHeading',
    dynamicProps: {
      children: tokens('REQUEST_AUTHENTICATION_CODE_1.[1].PageHeading.youNeedTheAuthenticationCode')
    }
  },
  {
    component: 'BodyText',
    props: {
      children: tokens('REQUEST_AUTHENTICATION_CODE_1.[3].BodyText.youCanRequestToHaveYourAuthenticationCode')
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        dynamicProps: {
          href: '${links.requestAuthCodeURL}'
        },
        props: {
          href: '',
          target: '_blank',
          children: tokens('REQUEST_AUTHENTICATION_CODE_1.[5].LinkText.sendAuthenticationCodeToOffice'),
          matomo: ['trackEvent', tokens('REQUEST_AUTHENTICATION_CODE_1.[1].PageHeading.youNeedTheAuthenticationCode'), tokens('REQUEST_AUTHENTICATION_CODE_1.[5].LinkText.sendAuthenticationCodeToOffice')]
        }
      }
    ]
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        dynamicProps: {
          href: '${links.requestAuthCodeHomeURL}'
        },
        props: {
          href: '',
          target: '_blank',
          children: tokens('REQUEST_AUTHENTICATION_CODE_1.[6].LinkText.sendAuthenticationCodeToHome'),
          matomo: ['trackEvent', tokens('REQUEST_AUTHENTICATION_CODE_1.[1].PageHeading.youNeedTheAuthenticationCode'), tokens('REQUEST_AUTHENTICATION_CODE_1.[6].LinkText.sendAuthenticationCodeToHome')]
        }
      }
    ]
  },
  {
    component: 'Br'
  },
  {
    component: 'Button',
    props: {
      children: tokens('REQUEST_AUTHENTICATION_CODE_1.[6].Button.returnToHomePage'),
      renderAs: 'link',
      href: '/account/home/',
      testId: 'homeButton',
      matomo: ['trackEvent', tokens('REQUEST_AUTHENTICATION_CODE_1.[1].PageHeading.youNeedTheAuthenticationCode'), tokens('REQUEST_AUTHENTICATION_CODE_1.[6].Button.returnToHomePage')]
    }
  }
]
export default REQUEST_AUTH_CODE
