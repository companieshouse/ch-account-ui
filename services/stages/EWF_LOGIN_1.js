
const EWF_LOGIN_1 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['EWF_LOGIN_1.[0].BrowserTitle.signInToWebFiling']
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens['SHARED.signInToWebFiling']
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken1: {
          formGroup: 'usernameAndPassword',
          label: tokens['SHARED.emailAddress']
        },
        IDToken2: {
          formGroup: 'usernameAndPassword',
          label: tokens['SHARED.password']
        }
      }
    }
  },
  {
    component: 'Button',
    props: {
      children: tokens['SHARED.signIn'],
      type: 'submit',
      testId: 'submitButton'
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        props: {
          children: tokens['EWF_LOGIN_1.[4].BodyText.createAWebFilingAccount'],
          href: '/account/register/_start',
          testId: 'registerNewAccountLink'
        }
      }
    ]
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        props: {
          children: tokens['SHARED.iveForgottenMyPassword'],
          href: '/password-recovery/request',
          testId: 'forgottenMyPasswordLink'
        }
      }
    ]
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        dynamicProps: {
          href: '${links.ewfLegacyAuthUrl}'
        },
        props: {
          children: tokens['SHARED.imAnAgentOrLenderAndIWantToFileACharge'],
          testId: 'forgottenMyPasswordLink'
        }
      }
    ]
  }
]
export default EWF_LOGIN_1
