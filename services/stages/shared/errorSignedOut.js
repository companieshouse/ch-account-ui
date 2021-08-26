/* eslint-disable no-template-curly-in-string */
const errorSignedOut = (lang, tokens) => [
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
      children: tokens('SHARED.weHaveNotSavedYourInformation')
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
          children: tokens('SHARED.signBackInToYourAccount'),
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
          children: tokens('SHARED.signBackInToYourAccount'),
          href: '/account/login',
          testId: 'loginExistingAccountLink'
        }
      },
      {
        component: 'SpanText',
        props: {
          children: tokens('SHARED.toTryAgain')
        }
      }
    ]
  }
]

export default errorSignedOut
