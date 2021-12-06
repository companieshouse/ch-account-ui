/* eslint-disable no-template-curly-in-string */
const GENERIC_404 = (lang, tokens) => ([
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.pageNotFound')
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.pageNotFound')
    }
  }
])

export default GENERIC_404
