import genericError from './shared/genericError.js'

const INVITE_USER_ERROR = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.sorryThereIsAProblemWithTheService')
    }
  },
  {
    conditional: {
      prop: '${errors.0.tokenNoNamespace}',
      operator: 'eeq',
      value: 'INVITE_USER_COMPANY_LOOKUP_ERROR'
    },
    component: 'Fragment',
    content: [
      {
        component: 'PageHeading',
        props: {
          children: tokens('INVITE_USER_ERROR.[3].PageHeading.youCannotAuthoriseSomeone'),
          showErrorSummary: false
        }
      },
      {
        component: 'BodyText',
        props: {
          children: tokens('INVITE_USER_ERROR.[4].BodyText.youCanOnlyAuthorisePeopleToFile')
        }
      },
      {
        component: 'BodyText',
        content: [
          {
            component: 'LinkText',
            props: {
              children: tokens('INVITE_USER_ERROR.[5].LinkText.goBackToYourCompanies'),
              href: '/account/your-companies/',
              testId: 'yourCompaniesLink'
            }
          }
        ]
      }
    ]
  },
  {
    conditional: {
      prop: '${errors.0.tokenNoNamespace}',
      operator: 'nee',
      value: 'INVITE_USER_COMPANY_LOOKUP_ERROR'
    },
    component: 'Fragment',
    content: genericError(lang, tokens)
  }
]
export default INVITE_USER_ERROR
