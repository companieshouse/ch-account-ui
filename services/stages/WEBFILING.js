/* eslint-disable no-template-curly-in-string */
const WEBFILING = (lang, tokens) => [
  {
    conditional: {
      prop: '${paths.authCodeRequest}',
      operator: 'eq',
      value: 'true'
    },
    component: 'NotificationBanner',
    props: {
      type: 'success',
      title: tokens('SHARED.success'),
      testId: 'notification-banner-auth-success',
      heading: tokens('WEBFILING.authcodeTrue.NotificationBanner.heading')
    },
    dynamicProps: {
      notifyId: '${notifyId}'
    },
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens('WEBFILING.authcodeTrue.NotificationBanner.text')
        }
      }
    ]
  },
  {
    conditional: {
      prop: '${paths.authCodeRequest}',
      operator: 'ne',
      value: 'true'
    },
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.sorryThereIsAProblemWithTheService')
    }
  },
  {
    conditional: {
      prop: '${paths.authCodeRequest}',
      operator: 'ne',
      value: 'true'
    },
    component: 'BodyText',
    props: {
      children: tokens('SHARED.tryAgainLater')
    }
  },
  {
    conditional: {
      prop: '${paths.authCodeRequest}',
      operator: 'ne',
      value: 'true'
    },
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
export default WEBFILING
