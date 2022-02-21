/* eslint-disable no-template-curly-in-string */
const NO_SESSION_ERROR = (lang, tokens) => [
  {
    component: 'Redirect',
    dynamicProps: {
      url: '/error/no-session'
    }
  }
]
export default NO_SESSION_ERROR
