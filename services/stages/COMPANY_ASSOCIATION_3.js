/* eslint-disable no-template-curly-in-string */
const COMPANY_ASSOCIATION_3 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('COMPANY_ASSOCIATION_3.[0].BrowserTitle.provideTheCompanyAuthCode'),
      cleanTitle: false
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('COMPANY_ASSOCIATION_3.[0].BrowserTitle.provideTheCompanyAuthCode'),
      display: false
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
      matomo: ['trackEvent', tokens('COMPANY_ASSOCIATION_3.[0].BrowserTitle.provideTheCompanyAuthCode'), tokens('SHARED.helpWithAuthenticationCode')]
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
          children: tokens('SHARED.idDoNotHaveAnAuthenticationCode'),
          testId: 'requestAuthCodeLink',
          matomo: ['trackEvent', tokens('COMPANY_ASSOCIATION_3.[0].BrowserTitle.provideTheCompanyAuthCode'), tokens('SHARED.idDoNotHaveAnAuthenticationCode')]
        }
      }
    ]
  }
]
export default COMPANY_ASSOCIATION_3
