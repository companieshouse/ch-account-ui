
const CHANGE_NAME_1 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['CHANGE_NAME_1.[0].BrowserTitle.changeYourName']
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens['SHARED.changeYourName']
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'SpanText',
        dynamicProps: {
          children: tokens['CHANGE_NAME_1.[2].BodyText.theNameCurrentlyShownInYourCompaniesHouse']
        }
      },
      {
        component: 'SpanText',
        props: {
          weight: 'bold'
        },
        dynamicProps: {
          children: '${profileName}'
        }
      },
      {
        component: 'SpanText',
        dynamicProps: {
          children: tokens['SHARED.']
        }
      }
    ]
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken2: {
          label: tokens['CHANGE_NAME_1.[3].DisplayUiElements.enterNewFullName'],
          autoComplete: 'off'
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
          children: tokens['CHANGE_NAME_1.[4].ButtonGroup.changeName'],
          type: 'submit',
          testId: 'submitButton'
        }
      },
      {
        component: 'LinkText',
        props: {
          children: tokens['SHARED.cancel'],
          href: '/account/manage'
        }
      }
    ]
  }
]
export default CHANGE_NAME_1
