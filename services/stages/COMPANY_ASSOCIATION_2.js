/* eslint-disable no-template-curly-in-string */
const COMPANY_ASSOCIATION_2 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('COMPANY_ASSOCIATION_2.[0].BrowserTitle.confirmThisIs'),
      cleanTitle: false
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.confirmThisIsTheCorrectCompany')
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
          label: tokens('SHARED.companyNumber'),
          value: ''
        },
        {
          label: tokens('SHARED.status'),
          value: ''
        },
        {
          label: tokens('SHARED.incorporationDate'),
          value: ''
        },
        {
          label: tokens('SHARED.companyType'),
          value: ''
        },
        {
          label: tokens('SHARED.registeredOfficeAddress'),
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
      children: tokens('SHARED.confirmAndContinue'),
      type: 'submit',
      testId: 'submitButton',
      matomo: ['trackEvent', tokens('SHARED.confirmThisIsTheCorrectCompany'), tokens('SHARED.confirmAndContinue')]
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        props: {
          children: tokens('SHARED.chooseADifferentCompany'),
          href: '/account/associate/_restart',
          matomo: ['trackEvent', tokens('SHARED.confirmThisIsTheCorrectCompany'), tokens('SHARED.chooseADifferentCompany')]
        }
      }
    ]
  }
]
export default COMPANY_ASSOCIATION_2
