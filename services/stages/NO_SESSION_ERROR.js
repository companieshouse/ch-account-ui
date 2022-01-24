/* eslint-disable no-template-curly-in-string */
import { logoutFlow } from '../forgerock'
const NO_SESSION_ERROR = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.youAreNowSignedOut')
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.youAreNowSignedOut'),
      showErrorSummary: false
    }
  },
  {
    component: 'BodyText',
    props: {
      children: tokens('NO_SESSION_ERROR.[2].BodyText.forYourSecurityWeveSignedYouOut')
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
      }
    ]
  },
  {
    component: 'Fragment',
    content: logoutFlow({})
  }
]
export default NO_SESSION_ERROR
