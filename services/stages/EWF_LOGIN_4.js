
const EWF_LOGIN_4 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['EWF_LOGIN_4.[0].BrowserTitle.enterTheCompanyAuthenticationCode']
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
          label: tokens['SHARED.enterTheCompanyAuthenticationCode'],
          fixedWidth: '10'
        }
      }
    }
  },
  {
    component: 'Button',
    props: {
      children: tokens['SHARED.continue'],
      type: 'submit',
      testId: 'submitButton'
    }
  },
  {
    component: 'Details',
    props: {
      summary: tokens['SHARED.helpWithAuthenticationCode']
    },
    content: [
      {
        component: 'BodyText',
        props: {
          children: tokens['SHARED.thisIsA6CharacterCodeIssuedByUsToEachCompany']
        }
      },
      {
        component: 'LinkText',
        dynamicProps: {
          href: '${links.requestAuthCodePath}'
        },
        props: {
          children: tokens['SHARED.requestAnAuthenticationCode'],
          testId: 'requestAuthCodeLink'
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
          children: tokens['SHARED.imAnAgentOrLenderAndIWantToFileACharge'],
          testId: 'forgottenMyPasswordLink'
        }
      }
    ]
  }
]
export default EWF_LOGIN_4
