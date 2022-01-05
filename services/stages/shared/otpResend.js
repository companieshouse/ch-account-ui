/* eslint-disable no-template-curly-in-string */
import otpResendEmail from './otpResendEmail.js'
import otpResendPhone from './otpResendPhone.js'

const otpResend = (lang, tokens) => [
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
    content: otpResendPhone(lang, tokens)
  },
  {
    conditional: {
      prop: '${type}',
      operator: 'nee',
      value: 'sms'
    },
    component: 'Fragment',
    content: otpResendEmail(lang, tokens)
  }
]
export default otpResend
