/* eslint-disable no-template-curly-in-string */
const COMPANY_ASSOCIATION_3 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('COMPANY_ASSOCIATION_3.[0].BrowserTitle.provideTheCompanyAuthCode')
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
          fixedWidth: '10'
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
      summary: tokens('SHARED.helpWithAuthenticationCode')
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
          testId: 'requestAuthCodeLink'
        }
      }
    ]
  }
]
export default COMPANY_ASSOCIATION_3
