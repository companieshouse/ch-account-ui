
const HOME_MANAGE_ACCOUNT = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['SHARED.SHARED.manageAccount']
    }
  },
  {
    conditional: {
      prop: '${notifyToken}',
      operator: 'eeq',
      value: 'changeNumberSuccess'
    },
    component: 'NotificationBanner',
    dynamicProps: {
      type: 'success',
      title: tokens['SHARED.success'],
      heading: tokens['HOME_MANAGE_ACCOUNT.[1].NotificationBanner.youveSuccessfullyUpdatedYourMobile']
    }
  },
  {
    conditional: {
      prop: '${notifyToken}',
      operator: 'eeq',
      value: 'changeNameSuccess'
    },
    component: 'NotificationBanner',
    dynamicProps: {
      type: 'success',
      title: tokens['SHARED.success'],
      heading: tokens['HOME_MANAGE_ACCOUNT.[2].NotificationBanner.youveSuccessfullyUpdatedYourName']
    }
  },
  {
    conditional: {
      prop: '${notifyToken}',
      operator: 'eeq',
      value: 'changePreferencesSuccess'
    },
    component: 'NotificationBanner',
    dynamicProps: {
      type: 'success',
      title: tokens['SHARED.success'],
      heading: tokens['HOME_MANAGE_ACCOUNT.[2].NotificationBanner.youveSuccessfullyUpdatedYourEmailPref']
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens['HOME_MANAGE_ACCOUNT.[3].PageHeading.manageYourAccount'],
      size: 'l'
    },
    content: [
      {
        component: 'Caption',
        props: {
          children: tokens['HOME_MANAGE_ACCOUNT.[3].PageHeading.makeChangesToYourDetailsAndAccount'],
          size: 'm',
          style: {
            paddingTop: '0.5em'
          }
        }
      }
    ]
  },
  {
    component: 'HeadingText',
    props: {
      children: 'Account details',
      size: 'm'
    }
  },
  {
    component: 'SummaryList',
    dynamicProps: {
      'listItems.0.value': '${profile.given_name}',
      'listItems.1.value': '${profile.email}',
      'listItems.3.value': '${profile.phone_number}'
    },
    props: {
      listItems: [
        {
          label: tokens['HOME_MANAGE_ACCOUNT.[4].SummaryList.fullName'],
          value: '',
          action: {
            label: tokens['SHARED.change'],
            desc: 'name',
            href: '/account/manage/change-name/_start'
          }
        },
        {
          label: tokens['SHARED.email'],
          value: '',
          action: {
            label: ''
          }
        },
        {
          label: tokens['SHARED.password'],
          value: '*************',
          action: {
            label: tokens['SHARED.change'],
            desc: 'password',
            href: '/account/manage/change-password/_start'
          }
        },
        {
          label: tokens['HOME_MANAGE_ACCOUNT.[4].SummaryList.mobileNumber'],
          value: '',
          action: {
            label: tokens['SHARED.change'],
            desc: 'mobile number',
            href: '/account/manage/change-phone-number/_start'
          }
        }
      ]
    }
  },
  {
    component: 'HeadingText',
    props: {
      children: 'Email preferences',
      size: 'm'
    }
  },
  {
    component: 'BodyText',
    props: {
      children: 'Some types of email are essential to manage your account. We need to send you essential emails from time to time.',
      hint: true
    }
  },
  {
    component: 'SummaryList',
    dynamicProps: {
      'listItems.0.value': '${preferences.updates}',
      'listItems.1.value': '${preferences.marketing}'
    },
    props: {
      customLayout: true,
      listItems: [
        {
          label: 'Can we send you emails to tell you about a new message in your account?',
          hint: 'In the future, we\'d like to send you emails to let you know you\'ve received a new message in your account',
          action: {
            label: tokens['SHARED.change'],
            desc: 'name',
            href: '/account/manage/change-preferences/_start/?action=changeUpdates'
          }
        },
        {
          label: 'Can we send you emails about Companies House activities?',
          hint: 'For example, marketing, communications campaigns, or user research activities',
          action: {
            label: tokens['SHARED.change'],
            desc: 'name',
            href: '/account/manage/change-preferences/_start/?action=changeMarketing'
          }
        }
      ]
    }
  }
]
export default HOME_MANAGE_ACCOUNT
