
const REQUEST_AUTHENTICATION_CODE_1 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['REQUEST_AUTHENTICATION_CODE_1.[0].BrowserTitle.requestingAnAuthenticationCode']
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens['REQUEST_AUTHENTICATION_CODE_1.[1].PageHeading.doYouWantUsToSendTheAuthenticationCodeToThe']
    }
  },
  {
    component: 'DisplayUiElements'
  },
  {
    component: 'BodyText',
    props: {
      children: tokens['REQUEST_AUTHENTICATION_CODE_1.[3].BodyText.wellSendTheAuthenticationCodeByPost']
    }
  },
  {
    component: 'BodyText',
    props: {
      weight: 'bold'
    },
    content: [
      {
        component: 'NlToBr',
        props: {
          content: '37 London Road\nLondon\nSE3 6GI'
        }
      }
    ]
  },
  {
    component: 'BodyText',
    props: {
      children: tokens['REQUEST_AUTHENTICATION_CODE_1.[5].BodyText.itCanTakeUpTo5DaysToArrive']
    }
  },
  {
    component: 'Button',
    props: {
      children: tokens['REQUEST_AUTHENTICATION_CODE_1.[6].Button.sendTheAuthenticationCode'],
      type: 'submit',
      testId: 'submitButton'
    }
  },
  {
    component: 'Button',
    props: {
      children: tokens['SHARED.cancel'],
      secondary: true,
      className: 'marginLeft',
      renderAs: 'link',
      href: '/account/associate/',
      type: 'button',
      testId: 'cancelButton'
    }
  }
]
export default REQUEST_AUTHENTICATION_CODE_1
