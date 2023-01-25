/* eslint-disable no-template-curly-in-string */
const genericError = (lang, tokens, info = 'generic') => [
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
          href: 'https://find-and-update.company-information.service.gov.uk/help/contact-us',
          testId: 'contactCompaniesHouseLink',
          matomo: ['trackEvent', tokens('SHARED.sorryThereIsAProblemWithTheService'), info]
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
