/* eslint-disable no-template-curly-in-string */
const genericError = (lang, tokens) => [
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.sorryThereIsAProblemWithTheService'),
      showErrorSummary: false
    }
  },
  {
    component: 'BodyText',
    props: {
      children: tokens('SHARED.tryAgainLater')
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        props: {
          children: tokens('SHARED.contactCompaniesHouse'),
          href: 'https://www.gov.uk/contact-companies-house',
          testId: 'contactCompaniesHouseLink'
        }
      },
      {
        component: 'SpanText',
        props: {
          children: tokens('SHARED.ifYouHaveAnyQuestions')
        }
      }
    ]
  }
]

export default genericError
