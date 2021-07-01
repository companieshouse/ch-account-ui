
const RESET_PASSWORD_5 = (lang, tokens) => [
  {
    component: 'Redirect',
    props: {
      url: "/account/login/?notifyTitle=Success&notifyHeading=You've successfully reset your password.&notifyType=success"
    }
  }
]
export default RESET_PASSWORD_5
