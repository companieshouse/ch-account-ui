
const COMPANY_ASSOCIATION_1 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['COMPANY_ASSOCIATION_1.[0].BrowserTitle.tellUsTheCompanyNumber']
    }
  },
  {
    component: 'ErrorSummary',
    props: {
      title: tokens['COMPANY_ASSOCIATION_1.[1].ErrorSummary.thereIsAProblem']
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken2: {
          renderLabelAs: 'heading',
          label: tokens['SHARED.whatIsTheCompanyNumber'],
          fixedWidth: '10',
          hint: tokens['COMPANY_ASSOCIATION_1.[2].DisplayUiElements.enterTheNumberOfTheCompanyYouWouldLikeToAdd'],
          autoComplete: 'off',
          testId: 'companyNumberInputField'
        }
      }
    }
  },
  {
    component: 'Details',
    props: {
      summary: tokens['SHARED.helpWithMyCompanyNumber']
    },
    content: [
      {
        component: 'BodyText',
        props: {},
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens['SHARED.youCanFindThisBySearchingForTheCompanyOn']
            }
          },
          {
            component: 'LinkText',
            props: {
              children: tokens['SHARED.companiesHouseRegisterOpensInANewTab'],
              href: 'https://find-and-update.company-information.service.gov.uk',
              target: '_blank',
              testId: 'companiesHouseRegisterLink'
            }
          },
          {
            component: 'SpanText',
            props: {
              children: tokens['SHARED.']
            }
          }
        ]
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
export default COMPANY_ASSOCIATION_1
