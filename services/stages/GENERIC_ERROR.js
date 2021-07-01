
const GENERIC_ERROR = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['SHARED.sorryThereIsAProblemWithTheService']
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens['SHARED.sorryThereIsAProblemWithTheService'],
      showErrorSummary: false
    }
  },
  {
    component: 'BodyText',
    props: {
      children: 'Try again later.'
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        props: {
          children: 'Contact Companies House',
          href: 'https://www.gov.uk/contact-companies-house',
          testId: 'contactCompaniesHouseLink'
        }
      },
      {
        component: 'SpanText',
        props: {
          children: ' if you have any questions.'
        }
      }
    ]
  }
]
export default GENERIC_ERROR
