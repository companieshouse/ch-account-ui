/* eslint-disable no-template-curly-in-string */
const CONSENT_FINISH = (lang, tokens) => [
  {
    component: 'Redirect',
    dynamicProps: {
      url: '${successUrl}'
    }
  }
]
export default CONSENT_FINISH
