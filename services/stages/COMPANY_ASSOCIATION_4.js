
const COMPANY_ASSOCIATION_4 = (lang, tokens) => [
  {
    component: 'Redirect',
    dynamicProps: {
      url: '/account/your-companies/?notifyTitle=Success&notifyHeading=${company.name} has been added to your account.&notifyType=success'
    }
  }
]
export default COMPANY_ASSOCIATION_4
