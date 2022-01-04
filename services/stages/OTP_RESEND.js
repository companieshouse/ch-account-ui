import otpResend from './shared/otpResend'

const OTP_RESEND = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.resendOTP')
    }
  },
  {
    component: 'Fragment',
    content: otpResend(lang, tokens)
  }
]
export default OTP_RESEND
