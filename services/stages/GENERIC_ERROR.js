import genericError from './genericError'

const GENERIC_ERROR = (lang, tokens) => [
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
export default GENERIC_ERROR