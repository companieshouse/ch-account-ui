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
      title: tokens('SHARED.checkYourPhone') // TODO: change this to SHARED.sendANewSecurityCode or a new token
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
      title: tokens('SHARED.sendANewSecurityCode')
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
