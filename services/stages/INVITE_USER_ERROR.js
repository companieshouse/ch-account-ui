import genericError from './shared/genericError.js'

const INVITE_USER_ERROR = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.sorryThereIsAProblemWithTheService')
    }
  },
  {
    component: 'Fragment',
    content: genericError(lang, tokens)
  }
]
export default INVITE_USER_ERROR
