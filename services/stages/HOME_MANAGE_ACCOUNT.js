
const HOME_MANAGE_ACCOUNT = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.manageAccount')
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
      title: tokens('SHARED.success'),
      heading: tokens('HOME_MANAGE_ACCOUNT.[1].NotificationBanner.youveSuccessfullyUpdatedYourMobile')
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
      title: tokens('SHARED.success'),
      heading: tokens('HOME_MANAGE_ACCOUNT.[2].NotificationBanner.youveSuccessfullyUpdatedYourName')
    }
  },
  {
    conditional: {
      prop: '${notifyToken}',
      operator: 'eeq',
      value: 'changePasswordSuccess'
    },
    component: 'NotificationBanner',
    dynamicProps: {
      type: 'success',
      title: tokens('SHARED.success'),
      heading: tokens('HOME_MANAGE_ACCOUNT.[2].NotificationBanner.youveSuccessfullyUpdatedYourPassword')
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
      title: tokens('SHARED.success'),
      heading: tokens('HOME_MANAGE_ACCOUNT.[2].NotificationBanner.youveSuccessfullyUpdatedYourEmailPref')
    }
  },
  {
    conditional: {
      prop: '${notifyToken}',
      operator: 'eeq',
      value: 'changeEmailSuccess'
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
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.manageAccount'),
      size: 'l'
    },
    content: [
      {
        component: 'Caption',
        props: {
          children: tokens('HOME_MANAGE_ACCOUNT.[3].PageHeading.makeChangesToYourDetailsAndAccount'),
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
      children: tokens('SHARED.accountDetails'),
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
          label: tokens('HOME_MANAGE_ACCOUNT.[4].SummaryList.fullName'),
          value: '',
          action: {
            label: tokens('SHARED.update'),
            desc: 'name',
            href: '/account/manage/change-name/_start'
          }
        },
        {
          label: tokens('SHARED.email'),
          value: '',
          action: {
            label: tokens('SHARED.update'),
            desc: 'email',
            href: '/account/manage/change-email/_start'
          }
        },
        {
          label: tokens('SHARED.password'),
          value: '*************',
          action: {
            label: tokens('SHARED.update'),
            desc: 'password',
            href: '/account/manage/change-password/_start'
          }
        },
        {
          label: tokens('HOME_MANAGE_ACCOUNT.[4].SummaryList.mobileNumber'),
          value: '',
          action: {
            label: tokens('SHARED.update'),
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
      children: tokens('SHARED.emailPreferences'),
      size: 'm'
    }
  },
  {
    component: 'BodyText',
    props: {
      children: tokens('HOME_MANAGE_ACCOUNT.[6].BodyText.someTypesOfEmailAreEssentialToManage'),
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
          label: tokens('HOME_MANAGE_ACCOUNT.[7].SummaryList.canWeSendYouEmailsToTellYouAbout'),
          hint: tokens('HOME_MANAGE_ACCOUNT.[7].SummaryList.inTheFutureWedLikeToSendYouEmails'),
          action: {
            label: tokens('SHARED.change'),
            desc: 'name',
            href: '/account/manage/change-preferences/_start/?action=changeUpdates'
          }
        },
        {
          label: tokens('HOME_MANAGE_ACCOUNT.[7].SummaryList.canWeSendYouEmailsAboutCompaniesHouse'),
          hint: tokens('HOME_MANAGE_ACCOUNT.[7].SummaryList.forExampleMarketing'),
          action: {
            label: tokens('SHARED.change'),
            desc: 'name',
            href: '/account/manage/change-preferences/_start/?action=changeMarketing'
          }
        }
      ]
    }
  }
]
export default HOME_MANAGE_ACCOUNT
