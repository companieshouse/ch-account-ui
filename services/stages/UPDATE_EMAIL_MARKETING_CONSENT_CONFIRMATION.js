/* eslint-disable no-template-curly-in-string */
const UPDATE_EMAIL_UPDATES_CONSENT_CONFIRMATION = (lang, tokens) => [
  {
    component: 'Redirect',
    dynamicProps: {
      url: '${changeSuccessPath}'
    }
  }
]
export default UPDATE_EMAIL_UPDATES_CONSENT_CONFIRMATION
