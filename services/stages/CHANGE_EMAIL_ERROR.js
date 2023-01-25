/* eslint-disable no-template-curly-in-string */
import genericError from './shared/genericError.js'

const CHANGE_EMAIL_ERROR = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.sorryThereIsAProblemWithTheService')
    }
  },
  {
    component: 'Fragment',
    content: genericError(lang, tokens, 'CHANGE_EMAIL_ERROR')
  }
]
export default CHANGE_EMAIL_ERROR
