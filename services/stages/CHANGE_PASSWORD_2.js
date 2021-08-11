
const CHANGE_PASSWORD_2 = (lang, tokens) => [
  {
    component: 'Redirect',
    dynamicProps: {
      url: '${changeSuccessPath}'
    }
  }
]
export default CHANGE_PASSWORD_2
