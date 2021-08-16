import errorSignedOut from './shared/errorSignedOut.js'

const SEND_MFA_SMS_ERROR = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.sorryThereIsAProblemWithTheService')
    }
  },
  {
    component: 'Fragment',
    content: errorSignedOut(lang, tokens)
  }
]
export default SEND_MFA_SMS_ERROR
