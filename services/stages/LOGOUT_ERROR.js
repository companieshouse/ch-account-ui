/* eslint-disable no-template-curly-in-string */
const LOGOUT_ERROR = (lang, tokens) => [
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
          children: 'Contact Companies House',
          href: 'https://www.gov.uk/contact-companies-house',
          testId: 'contactCompaniesHouseLink',
          matomo: ['trackEvent', tokens('SHARED.sorryThereIsAProblemWithTheService'), tokens('SHARED.contactCompaniesHouse')]
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
export default LOGOUT_ERROR
