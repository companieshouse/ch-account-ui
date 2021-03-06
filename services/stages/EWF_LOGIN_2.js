
const EWF_LOGIN_2 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['SHARED.whatIsTheCompanyNumber']
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens['EWF_LOGIN_2.[1].PageHeading.enterTheDetailsOfTheCompanyYouWantToAccessIn']
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken2: {
          label: tokens['EWF_LOGIN_2.[2].DisplayUiElements.whereWasTheCompanyRegistered'],
          options: [
            {
              label: tokens['EWF_LOGIN_2.[2].DisplayUiElements.englandWales'],
              value: 0,
              checked: false
            },
            {
              label: tokens['EWF_LOGIN_2.[2].DisplayUiElements.scotland'],
              value: 1,
              checked: false
            },
            {
              label: tokens['EWF_LOGIN_2.[2].DisplayUiElements.northernIreland'],
              value: 2,
              checked: false
            }
          ]
        },
        IDToken3: {
          label: tokens['SHARED.companyNumber'],
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
export default EWF_LOGIN_2
