
const REMOVAL_CONFIRMATION = (lang, tokens) => [
  {
    component: 'Redirect',
    dynamicProps: {
      url: '${links.removeUserSuccess}'
    }
  }
]
export default REMOVAL_CONFIRMATION
