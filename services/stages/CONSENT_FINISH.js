/* eslint-disable no-template-curly-in-string */
const CONSENT_FINISH = (lang, tokens) => [
  {
    component: 'Redirect',
    dynamicProps: {
      url: '${successUrl}'
    }
  },
  {
    component: 'BodyText',
    props: {},
    content: [
      {
        component: 'SpanText',
        props: {
          children: 'The success URL: '
        }
      },
      {
        component: 'SpanText',
        dynamicProps: {
          children: '${successUrl}'
        },
        props: {
          weight: 'bold'
        }
      }
    ]
  }
]
export default CONSENT_FINISH
