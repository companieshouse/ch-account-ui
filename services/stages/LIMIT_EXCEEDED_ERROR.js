
const LIMIT_EXCEEDED_ERROR = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['SHARED.youAreNowSignedOut']
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens['SHARED.youAreNowSignedOut'],
      showErrorSummary: false
    }
  },
  {
    component: 'BodyText',
    props: {
      children: tokens['LIMIT_EXCEEDED_ERROR.[2].BodyText.youHaveEnteredAnIncorrectCodeTooManyTimesFor']
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        conditional: {
          prop: '${links.resumePath}',
          operator: 'is'
        },
        component: 'LinkText',
        dynamicProps: {
          href: '${links.resumePath}'
        },
        props: {
          children: tokens['LIMIT_EXCEEDED_ERROR.[3].BodyText.signBackInToYourAccount'],
          testId: 'loginExistingAccountLink'
        }
      },
      {
        conditional: {
          prop: '${links.resumePath}',
          operator: 'not'
        },
        component: 'LinkText',
        props: {
          children: tokens['SHARED.signBackInToYourAccount'],
          href: '/account/login',
          testId: 'loginExistingAccountLink'
        }
      },
      {
        component: 'SpanText',
        props: {
          children: tokens['LIMIT_EXCEEDED_ERROR.[3].BodyText.toTryAgain']
        }
      }
    ]
  }
]
export default LIMIT_EXCEEDED_ERROR
