
const CHANGE_PASSWORD_2 = (lang, tokens) => [
  {
    component: 'Redirect',
    props: {
      url: "/account/manage/?notifyTitle=Success&notifyHeading=You've successfully changed your password.&notifyType=success"
    }
  }
]
export default CHANGE_PASSWORD_2
