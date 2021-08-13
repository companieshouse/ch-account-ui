import phoneOtp from './shared/phoneOtp.js'

const PHONE_OTP = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.checkYourPhone')
    }
  },
  {
    component: 'Fragment',
    content: phoneOtp(lang, tokens)
  }
]
export default PHONE_OTP
