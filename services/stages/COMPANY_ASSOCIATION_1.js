/* eslint-disable no-template-curly-in-string */
const COMPANY_ASSOCIATION_1 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.enterTheDetailsOfTheCompanyYouWantToAdd')
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.enterTheDetailsOfTheCompanyYouWantToAdd')
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken2: {
          label: tokens('SHARED.whatIsTheCompanyNumber'),
          fixedWidth: '10',
          autoComplete: 'off',
          testId: 'companyNumberInputField',
          formGroup: 'companyDetails',
          content: [
            {
              component: 'Details',
              props: {
                summary: tokens('SHARED.helpWithMyCompanyNumber')
              },
              content: [
                {
                  component: 'BodyText',
                  props: {},
                  content: [
                    {
                      component: 'SpanText',
                      props: {
                        children: tokens('SHARED.youCanFindThisBySearchingForTheCompanyOn')
                      }
                    },
                    {
                      component: 'LinkText',
                      props: {
                        children: tokens('SHARED.companiesHouseRegisterOpensInANewTab'),
                        href: 'https://find-and-update.company-information.service.gov.uk',
                        target: '_blank',
                        testId: 'companiesHouseRegisterLink'
                      }
                    },
                    {
                      component: 'SpanText',
                      props: {
                        children: tokens('SHARED.')
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        IDToken3: {
          label: tokens('EWF_LOGIN_2.[2].DisplayUiElements.whereWasTheCompanyRegistered'),
          formGroup: 'companyDetails',
          options: [
            {
              label: tokens('EWF_LOGIN_2.[2].DisplayUiElements.englandWales'),
              value: 0,
              checked: false
            },
            {
              label: tokens('EWF_LOGIN_2.[2].DisplayUiElements.scotland'),
              value: 1,
              checked: false
            },
            {
              label: tokens('EWF_LOGIN_2.[2].DisplayUiElements.northernIreland'),
              value: 2,
              checked: false
            }
          ]
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
  }
]
export default COMPANY_ASSOCIATION_1
