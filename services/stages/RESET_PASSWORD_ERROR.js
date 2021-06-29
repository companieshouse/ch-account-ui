
const RESET_PASSWORD_ERROR = (lang, tokens) => [
  {
    conditional: {
      prop: '${errors.0.token}',
      operator: 'nee',
      value: 'RESET_PASSWORD_TOKEN_EXPIRED_ERROR'
    },
    component: 'PageHeading',
    props: {
      showErrorSummary: false,
      children: tokens['SHARED.sorryThereIsAProblemWithTheService']
    }
  },
  {
    conditional: {
      prop: '${errors.0.token}',
      operator: 'eeq',
      value: 'RESET_PASSWORD_TOKEN_EXPIRED_ERROR'
    },
    component: 'PageHeading',
    props: {
      showErrorSummary: false,
      children: tokens['RESET_PASSWORD_ERROR.[1].PageHeading.passwordResetLinkHasExpired']
    }
  },
  {
    conditional: {
      prop: '${errors.0.token}',
      operator: 'nee',
      value: 'RESET_PASSWORD_TOKEN_EXPIRED_ERROR'
    },
    component: 'BodyText',
    props: {
      children: tokens['SHARED.tryAgainLater']
    }
  },
  {
    conditional: {
      prop: '${errors.0.token}',
      operator: 'eeq',
      value: 'RESET_PASSWORD_TOKEN_EXPIRED_ERROR'
    },
    component: 'ErrorPageSummary',
    content: [
      {
        component: 'LinkText',
        props: {
          children: tokens['RESET_PASSWORD_ERROR.[3].ErrorPageSummary.startAgainToResetYourPassword'],
          href: '/account/register/_restart/',
          testId: 'startRegistrationAgainLink'
        }
      }
    ]
  },
  {
    conditional: {
      prop: '${errors.0.token}',
      operator: 'nee',
      value: 'RESET_PASSWORD_TOKEN_EXPIRED_ERROR'
    },
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        props: {
          children: tokens['SHARED.contactCompaniesHouse'],
          href: 'https://www.gov.uk/contact-companies-house',
          testId: 'contactCompaniesHouseLink'
        }
      },
      {
        component: 'SpanText',
        props: {
          children: tokens['SHARED.ifYouHaveAnyQuestions']
        }
      }
    ]
  }
]
export default RESET_PASSWORD_ERROR
