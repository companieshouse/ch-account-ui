/* eslint-disable no-template-curly-in-string */
import phoneOtp from './shared/phoneOtp.js'
import emailOtp from './shared/emailOtp.js'

const EWF_LOGIN_OTP = (lang, tokens) => [
  {
    conditional: {
      prop: '${type}',
      operator: 'eeq',
      value: 'sms'
    },
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.checkYourPhone'),
      cleanTitle: false
    }
  },
  {
    conditional: {
      prop: '${type}',
      operator: 'nee',
      value: 'sms'
    },
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.checkYourEmail'),
      cleanTitle: false
    }
  },
  {
    conditional: {
      prop: '${type}',
      operator: 'eeq',
      value: 'sms'
    },
    component: 'Fragment',
    content: phoneOtp(lang, tokens)
  },
  {
    conditional: {
      prop: '${type}',
      operator: 'nee',
      value: 'sms'
    },
    component: 'Fragment',
    content: emailOtp(lang, tokens)
  }
]
export default EWF_LOGIN_OTP
