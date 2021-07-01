
const SEND_MFA_SMS_ERROR = (lang, tokens) => [
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
      children: tokens['SHARED.tryAgainLater']
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        props: {
          children: tokens['SHARED.contactCompaniesHouse'],
          href: 'https://www.gov.uk/contact-companies-house',
          testId: 'contactCompaniesHouseLink'
        }
      },
      {
        component: 'SpanText',
        props: {
          children: tokens['SHARED.ifYouHaveAnyQuestions']
        }
      }
    ]
  }
]
export default SEND_MFA_SMS_ERROR
