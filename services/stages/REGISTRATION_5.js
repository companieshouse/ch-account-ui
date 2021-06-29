
const REGISTRATION_5 = (lang, tokens) => [
  {
    component: 'PageHeading',
    props: {
      children: tokens['REGISTRATION_5.[0].PageHeading.emailAddressVerified']
    }
  },
  {
    component: 'InsetText',
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens['REGISTRATION_5.[1].InsetText.youHaveSuccessfullyVerifiedTheEmail']
        }
      },
      {
        component: 'SpanText',
        dynamicProps: {
          children: tokens['SHARED.email']
        },
        props: {
          weight: 'bold'
        }
      }
    ]
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens['REGISTRATION_5.[2].BodyText.youCanNowCloseThisPageAndReturnThePrevious']
        }
      },
      {
        component: 'LinkText',
        props: {
          children: tokens['REGISTRATION_5.[2].BodyText.goDirectlyToYourAccount'],
          href: '/account/home/',
          testId: 'goToAccountHomeLink'
        }
      }
    ]
  }
]
export default REGISTRATION_5
