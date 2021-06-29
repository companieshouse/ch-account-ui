
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
    component: 'PageHeading',
    props: {
      children: tokens['HOME_MANAGE_ACCOUNT.[3].PageHeading.manageYourAccount']
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
  }
]
export default HOME_MANAGE_ACCOUNT
