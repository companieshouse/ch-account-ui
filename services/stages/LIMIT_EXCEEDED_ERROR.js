/* eslint-disable no-template-curly-in-string */
const LIMIT_EXCEEDED_ERROR = (lang, tokens) => [
  {
    component: 'Redirect',
    dynamicProps: {
      url: '/error/limit-exceeded'
    }
  }
]
export default LIMIT_EXCEEDED_ERROR
