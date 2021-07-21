
const EWF_LOGIN_3 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['SHARED.confirmThisIsTheCorrectCompany']
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens['SHARED.confirmThisIsTheCorrectCompany']
    }
  },
  {
    component: 'HeadingText',
    dynamicProps: {
      children: '${company.name}'
    },
    props: {
      size: 'l'
    }
  },
  {
    component: 'SummaryList',
    dynamicProps: {
      'listItems.0.value': '${company.number}',
      'listItems.1.value': '${company.status}',
      'listItems.2.value': '${company.creationDate}',
      'listItems.3.value': '${company.type}',
      'listItems.4.value': {
        component: 'NlToBr',
        dynamicProps: {
          content: '${company.addressLine1}\n${company.addressLine2}\n${company.locality}\n${company.region}\n${company.postalCode}'
        }
      }
    },
    props: {
      listItems: [
        {
          label: tokens['SHARED.companyNumber'],
          value: ''
        },
        {
          label: tokens['SHARED.status'],
          value: ''
        },
        {
          label: tokens['SHARED.incorporationDate'],
          value: ''
        },
        {
          label: tokens['SHARED.companyType'],
          value: ''
        },
        {
          label: tokens['SHARED.registeredOfficeAddress'],
          value: ''
        }
      ]
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken4: {
          _hidden: true
        }
      }
    }
  },
  {
    component: 'Button',
    props: {
      children: tokens['SHARED.confirmAndContinue'],
      type: 'submit',
      testId: 'submitButton'
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        props: {
          children: tokens['SHARED.chooseADifferentCompany'],
          testId: 'chooseDifferentCompanyLink',
          renderAs: 'link',
          handler: {
            name: 'onSecondarySubmit',
            params: {
              target: 'IDToken4',
              value: 1
            }
          }
        },
        dynamicProps: {
          href: '${links.chooseCompanyPath}'
        }
      }
    ]
  }
]
export default EWF_LOGIN_3
