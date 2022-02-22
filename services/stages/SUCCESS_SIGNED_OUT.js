/* eslint-disable no-template-curly-in-string */
import { logoutFlow } from '../forgerock'

const SUCCESS_SIGNED_OUT = (lang, tokens) => ([
  {
    component: 'Fragment',
    content: logoutFlow({})
  },
  {
    conditional: {
      prop: '${bannerName}',
      operator: 'eeq',
      value: 'changePassword'
    },
    component: 'Redirect',
    dynamicProps: {
      url: '/unauthorised/change-password'
    }
  },
  {
    conditional: {
      prop: '${bannerName}',
      operator: 'eeq',
      value: 'changeEmail'
    },
    component: 'Redirect',
    dynamicProps: {
      url: '/unauthorised/change-email'
    }
  }
])

export default SUCCESS_SIGNED_OUT
