/* eslint-disable no-template-curly-in-string */
const REMOVE_AUTHZ_USER_ERROR = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.sorryThereIsAProblemWithTheService')
    }
  },
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
export default REMOVE_AUTHZ_USER_ERROR
