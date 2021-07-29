import emailOtp from './shared/emailOtp'

const CHANGE_EMAIL_INPUT = (lang, tokens) => ([
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['SHARED.checkYourEmail']
    }
  },
  {
    component: 'Fragment',
    content: emailOtp(lang, tokens)
  }
])

export default CHANGE_EMAIL_INPUT
