/* eslint-disable no-template-curly-in-string */
import emailOtp from './shared/emailOtp.js'

const CHANGE_EMAIL_INPUT = (lang, tokens) => ([
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.checkYourEmail'),
      cleanTitle: false
    }
  },
  {
    component: 'Fragment',
    content: emailOtp(lang, tokens)
  }
])

export default CHANGE_EMAIL_INPUT
