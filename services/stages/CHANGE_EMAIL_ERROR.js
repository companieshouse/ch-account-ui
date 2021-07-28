import genericError from './genericError'

const CHANGE_EMAIL_ERROR = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['SHARED.sorryThereIsAProblemWithTheService']
    }
  },
  {
    component: 'Fragment',
    content: genericError(lang, tokens)
  }
]
export default CHANGE_EMAIL_ERROR
