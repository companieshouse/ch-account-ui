
const REMOVE_AUTHORISED_USER_1 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: 'Remove authorisation to file online'
    }
  },
  {
    component: 'Caption',
    dynamicProps: {
      children: tokens['SHARED.companyName']
    }
  },
  {
    component: 'PageHeading',
    dynamicProps: {
      children: 'Do you want to remove ${user.givenName}\'s authorisation to file online for this company?'
    }
  },

  {
    component: 'BodyText',
    props: {
      children: 'If you remove ${user.givenName}\'s authorisation, they will no longer be able to access FLOWERS LIMITED in their Companies House account.'
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken1: {
          label: 'I confirm that I have read and understood this information.'
        }
      }
    }
  },
  {
    component: 'ButtonGroup',
    content: [
      {
        component: 'Button',
        props: {
          children: 'Remove authorisation',
          type: 'submit',
          testId: 'submitButton'
        }
      },
      {
        component: 'Button',
        props: {
          children: 'Cancel',
          type: 'submit',
          testId: 'submitButton'
        }
      }
    ]
  }
]
export default REMOVE_AUTHORISED_USER_1
