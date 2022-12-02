/* eslint-disable no-template-curly-in-string */
const GET_CONSENT = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: 'CHS CONSENT'
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('CONSENT.pageHeading.heading'),
      size: 'l'
    }
  },
  {
    component: 'BodyText',
    props: {
      children: tokens('CONSENT.bodyText.software')
    }
  },
  {
    component: 'BodyText',
    props: {
      children: tokens('CONSENT.bodyText.permissions')
    }
  },
  // {
  //   component: 'DisplayUiElements',
  //   dynamicProps: {
  //     'elementProps.IDToken7.message': '${company.name}'
  //   },
  //   props: {
  //     elementProps: {
  //       IDToken2: {
  //         renderLabelAs: 'heading',
  //         caption: '',
  //         captionPosition: 'above',
  //         label: tokens('SHARED.enterTheCompanyAuthenticationCode'),
  //         fixedWidth: '10',
  //         type: 'password'
  //       }
  //     }
  //   }
  // },
  // {
  //   component: 'DisplayUiElements',
  //   props: {
  //     elementProps: {
  //       IDToken7: {
  //         formGroup: 'permissions',
  //         label: tokens('SHARED.emailAddress'),
  //         hint: tokens('CH_LOGIN_1.[2].DisplayUiElements.youCannotUseYourWebFilingDetailsToSignInYou')
  //       },
  //       IDToken2: {
  //         formGroup: 'usernameAndPassword',
  //         label: tokens('SHARED.password')
  //       }
  //     }
  //   }
  // },
  {
    component: 'List',
    content: [
      {
        component: 'ListItem',
        props: {
          children: tokens('CONSENT.list.item.1')
        }
      },
      {
        component: 'ListItem',
        props: {
          children: tokens('CONSENT.list.item.2')
        }
      }
    ]
  },
  {
    component: 'ButtonGroup',
    content: [
      {
        component: 'Button',
        props: {
          children: tokens('CONSENT.button.submit.allow'),
          type: 'submit',
          testId: 'allowAccess'
        }
      },
      {
        component: 'Button',
        props: {
          children: tokens('CONSENT.button.cancel'),
          type: 'button',
          testId: 'cancelButton'
        }
      }
    ]
  }
]
export default GET_CONSENT
