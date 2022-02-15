import errorSignedOut from './shared/errorSignedOut'
import { logoutFlow } from '../forgerock'

const SUCCESS_SIGNED_OUT = (lang, tokens) => ([
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.sorryThereIsAProblemWithTheService')
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
    },
    props: {
      children: tokens('HOME_MANAGE_ACCOUNT.[2].NotificationBanner.ifYouReceiveEReminders')
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
          testId: 'loginExistingAccountLink'
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
