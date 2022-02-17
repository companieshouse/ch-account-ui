/* eslint-disable no-template-curly-in-string */
import { logoutFlow } from '../forgerock'

const SUCCESS_SIGNED_OUT = (lang, tokens) => ([
  {
    conditional: {
      prop: '${bannerName}',
      operator: 'eeq',
      value: 'changeEmail'
    },
    component: 'BrowserTitle',
    props: {
      title: tokens('HOME_MANAGE_ACCOUNT.[2].NotificationBanner.youveSuccessfullyUpdatedYourEmailTo')
    }
  },
  {
    conditional: {
      prop: '${bannerName}',
      operator: 'eeq',
      value: 'changePassword'
    },
    component: 'BrowserTitle',
    props: {
      title: tokens('HOME_MANAGE_ACCOUNT.[2].NotificationBanner.youveSuccessfullyUpdatedYourPassword')
    }
  },
  {
    conditional: {
      prop: '${bannerName}',
      operator: 'eeq',
      value: 'changeEmail'
    },
    component: 'NotificationBanner',
    dynamicProps: {
      type: 'success',
      title: tokens('SHARED.success'),
      heading: tokens('HOME_MANAGE_ACCOUNT.[2].NotificationBanner.youveSuccessfullyUpdatedYourEmailTo')
    }
  },
  {
    conditional: {
      prop: '${bannerName}',
      operator: 'eeq',
      value: 'changePassword'
    },
    component: 'NotificationBanner',
    dynamicProps: {
      type: 'success',
      title: tokens('SHARED.success'),
      heading: tokens('HOME_MANAGE_ACCOUNT.[2].NotificationBanner.youveSuccessfullyUpdatedYourPassword')
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        dynamicProps: {
          href: '/account/login'
        },
        props: {
          children: tokens('SHARED.signBackInToYourAccount'),
          testId: 'loginExistingAccountLink',
          matomo: ['trackEvent', tokens('SHARED.sorryThereIsAProblemWithTheService'), tokens('SHARED.signBackInToYourAccount')]
        }
      }
    ]
  },
  {
    component: 'Fragment',
    content: logoutFlow({})
  }
])

export default SUCCESS_SIGNED_OUT
