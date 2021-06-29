
const NO_SESSION_ERROR = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['NO_SESSION_ERROR.[0].BrowserTitle.youAreNowSignedOut']
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
      children: tokens['NO_SESSION_ERROR.[2].BodyText.forYourSecurityWeveSignedYouOut']
    }
  },
  {
    component: 'BodyText',
    props: {
      children: tokens['NO_SESSION_ERROR.[3].BodyText.weHaveNotSavedYourInformation']
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
          children: tokens['NO_SESSION_ERROR.[4].BodyText.signBackInToYourAccount'],
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
      }
    ]
  }
]
export default NO_SESSION_ERROR
