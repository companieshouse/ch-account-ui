/* eslint-disable no-template-curly-in-string */
import phoneOtp from './shared/phoneOtp.js'
import emailOtp from './shared/emailOtp.js'

const RESET_PASSWORD_3 = (lang, tokens) => [
  {
    conditional: {
      prop: '${type}',
      operator: 'eeq',
      value: 'sms'
    },
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.checkYourPhone')
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
      title: tokens('SHARED.checkYourEmail')
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
export default RESET_PASSWORD_3
