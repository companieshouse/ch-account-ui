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
    component: 'BodyText',
    content: [
      {
        conditional: {
          prop: '${paths.authCodeRequest}',
          operator: 'eq',
          value: 'true'
        },
        component: 'Fragment',
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens('WEBFILING.authcodeTrue.please')
            }
          },
          {
            component: 'LinkText',
            props: {
              children: tokens('SHARED.contactUs'),
              href: 'https://www.find-and-update.company-information.service.gov.uk/help/contact-us',
              testId: 'contactCompaniesHouseLink',
              matomo: ['trackEvent', tokens('SHARED.sorryThereIsAProblemWithTheService'), tokens('SHARED.contactUs')]
            }
          },
          {
            component: 'SpanText',
            props: {
              children: tokens('WEBFILING.authcodeTrue.needAdditionalInfo')
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
        component: 'Fragment',
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens('WEBFILING.authcodeFalse.youllNeedTo')
            }
          },
          {
            component: 'LinkText',
            props: {
              children: tokens('SHARED.contactUs'),
              href: 'https://www.find-and-update.company-information.service.gov.uk/help/contact-us',
              testId: 'contactCompaniesHouseLink',
              matomo: ['trackEvent', tokens('SHARED.sorryThereIsAProblemWithTheService'), tokens('SHARED.contactUs')]
            }
          },
          {
            component: 'SpanText',
            props: {
              children: tokens('WEBFILING.authcodeFalse.soThatWeCanHelp')
            }
          }
        ]
      }
    ]
  }
]
export default WEBFILING
