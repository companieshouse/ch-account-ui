import errorSignedOut from './shared/errorSignedOut'
import { logoutFlow } from '../forgerock'

const ERROR_SIGNED_OUT = (lang, tokens) => ([
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.sorryThereIsAProblemWithTheService')
    }
  },
  {
    component: 'Fragment',
    content: errorSignedOut(lang, tokens)
  },
  {
    component: 'Fragment',
    content: logoutFlow({})
  }
])

export default ERROR_SIGNED_OUT
