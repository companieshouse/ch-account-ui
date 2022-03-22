/* eslint-disable no-template-curly-in-string */
const EWF_LOGIN_4 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.enterTheCompanyAuthenticationCode')
    }
  },
  {
    component: 'DisplayUiElements',
    dynamicProps: {
      'elementProps.IDToken2.caption': '${company.name}'
    },
    props: {
      elementProps: {
        IDToken2: {
          renderLabelAs: 'heading',
          caption: '',
          captionPosition: 'above',
          label: tokens('SHARED.enterTheCompanyAuthenticationCode'),
          fixedWidth: '10',
          type: 'password'
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
  },
  {
    component: 'Details',
    props: {
      summary: tokens('SHARED.helpWithAuthenticationCode'),
      matomo: ['trackEvent', tokens('SHARED.enterTheCompanyAuthenticationCode'), tokens('SHARED.helpWithAuthenticationCode')]
    },
    content: [
      {
        component: 'BodyText',
        props: {
          children: tokens('SHARED.thisIsA6CharacterCodeIssuedByUsToEachCompany')
        }
      },
      {
        component: 'LinkText',
        dynamicProps: {
          href: '${links.requestAuthCodePath}'
        },
        props: {
          children: tokens('SHARED.requestAnAuthenticationCode'),
          testId: 'requestAuthCodeLink',
          matomo: ['trackEvent', tokens('SHARED.enterTheCompanyAuthenticationCode'), tokens('SHARED.requestAnAuthenticationCode')]
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
          href: '${links.ewfLegacyAuthUrl}'
        },
        props: {
          children: tokens('SHARED.imAnAgentOrLenderAndIWantToFileACharge'),
          testId: 'forgottenMyPasswordLink',
          matomo: ['trackEvent', tokens('SHARED.enterTheCompanyAuthenticationCode'), tokens('SHARED.imAnAgentOrLenderAndIWantToFileACharge')]
        }
      }
    ]
  }
]
export default EWF_LOGIN_4
