import genericError from './genericError'

const ONBOARDING_ERROR = (lang, tokens) => [
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
export default ONBOARDING_ERROR
