/* eslint-disable no-template-curly-in-string */

const SCRS_ERROR = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.scrsThereIsAProblemWithEmailLink')
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.scrsThereIsAProblemWithEmailLink'),
      showErrorSummary: false
    }
  },
  {
    component: 'BodyText',
    props: {
      children: tokens('SHARED.tryAgainLater')
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens('SHARED.ifYouHaveAnyQuestions')
        }
      }
    ]
  }
]

export default SCRS_ERROR
