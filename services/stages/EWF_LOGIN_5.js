
const EWF_LOGIN_5 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['EWF_LOGIN_5.[0].BrowserTitle.addThisCompanyToYourCompaniesHouse']
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
          captionPosition: 'above',
          label: tokens['EWF_LOGIN_5.[1].DisplayUiElements.doYouWantToAddThisCompanyToYourCompanies'],
          fixedWidth: '10'
        }
      }
    }
  },
  {
    component: 'Details',
    props: {
      summary: tokens['EWF_LOGIN_5.[2].Details.benefitsOfAddingThisCompanyToYourCompanies']
    },
    content: [
      {
        component: 'BodyText',
        props: {
          children: tokens['EWF_LOGIN_5.[2].Details.byAddingThisCompanyToYourAccountYou']
        }
      },
      {
        component: 'List',
        props: {
          items: [
            "will not need to re-enter the company's authentication code for most online filings",
            'can authorise other people to file on your behalf'
          ]
        }
      }
    ]
  },
  {
    component: 'Button',
    props: {
      children: tokens['SHARED.continue'],
      type: 'submit',
      testId: 'submitButton'
    }
  }
]
export default EWF_LOGIN_5
