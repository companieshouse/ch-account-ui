/* eslint-disable no-template-curly-in-string */
const pageNotFoundError = (lang, tokens) => [
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.pageNotFound'),
      showErrorSummary: false
    }
  },
  {
    component: 'BodyText',
    props: {
      children: tokens('SHARED.ifYouTypesTheLinkCheckItIsCorrect')
    }
  },
  {
    component: 'BodyText',
    props: {
      children: tokens('SHARED.ifYouPastedTheLinkCheckYouCopiedTheEntire')
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens('SHARED.ifTheLinkIsCorrectYouMust')
        }
      },
      {
        component: 'LinkText',
        props: {
          children: tokens('SHARED.startAgainToRegisterANewAccount'),
          href: '/account/register/_start/',
          testId: 'registrationLink'
        }
      },
      {
        component: 'SpanText',
        props: {
          children: '.'
        }
      }
    ]
  }
]

export default pageNotFoundError
