
const CH_LOGIN_1 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('CH_LOGIN_1.[0].BrowserTitle.signInToCompaniesHouseAccount')
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('CH_LOGIN_1.[1].PageHeading.signInToYourCompaniesHouseAccount')
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken1: {
          formGroup: 'usernameAndPassword',
          label: tokens('SHARED.emailAddress'),
          hint: tokens('CH_LOGIN_1.[2].DisplayUiElements.youCannotUseYourWebFilingDetailsToSignInYou')
        },
        IDToken2: {
          formGroup: 'usernameAndPassword',
          label: tokens('SHARED.password')
        }
      }
    }
  },
  {
    component: 'Button',
    props: {
      children: tokens('SHARED.signIn'),
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
          children: tokens('CH_LOGIN_1.[4].BodyText.registerANewAccount'),
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
          children: tokens('SHARED.iveForgottenMyPassword'),
          href: '/password-recovery/request',
          testId: 'forgottenMyPasswordLink'
        }
      }
    ]
  }
]
export default CH_LOGIN_1
