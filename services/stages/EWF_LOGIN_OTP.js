import phoneOtp from './shared/phoneOtp'
import emailOtp from './shared/emailOtp'

const EWF_LOGIN_OTP = (lang, tokens) => [
  {
    conditional: {
      prop: '${type}',
      operator: 'eeq',
      value: 'sms'
    },
    component: 'BrowserTitle',
    props: {
      title: tokens['SHARED.checkYourPhone']
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
      title: tokens['SHARED.checkYourEmail']
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
