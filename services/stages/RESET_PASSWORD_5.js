/* eslint-disable no-template-curly-in-string */
const RESET_PASSWORD_5 = (lang, tokens) => [
  {
    component: 'Redirect',
    dynamicProps: {
      url: '${links.resetSuccessPath}'
    }
  }
]
export default RESET_PASSWORD_5
