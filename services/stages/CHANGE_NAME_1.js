/* eslint-disable no-template-curly-in-string */
const CHANGE_NAME_1 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('CHANGE_NAME_1.[0].BrowserTitle.updateYourName')
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.updateYourName'),
      size: 'l'
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken2: {
          label: tokens('CHANGE_NAME_1.[3].DisplayUiElements.enterNewFullName'),
          autoComplete: 'off'
        }
      }
    }
  },
  {
    component: 'Details',
    props: {
      summary: tokens('SHARED.whereYourNameWillBeShown')
    },
    content: [
      {
        component: 'BodyText',
        props: {
          children: tokens('SHARED.ifYouProvideYourNameThisWillBeShown')
        }
      },
      {
        component: 'List',
        props: {
          items: tokens('SHARED.whereYourNameWillBeShownList')
        }
      },
      {
        component: 'BodyText',
        props: {
          children: tokens('SHARED.itIsUpToYouHowYourNameIsShownForExampleJen')
        }
      },
      {
        component: 'BodyText',
        props: {
          children: tokens('SHARED.ifYouDoNotProvideYourNameYourEmailAddress')
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
          children: tokens('CHANGE_NAME_1.[4].ButtonGroup.changeName'),
          type: 'submit',
          testId: 'submitButton'
        }
      },
      {
        component: 'LinkText',
        props: {
          children: tokens('SHARED.cancel'),
          href: '/account/manage',
          matomo: ['trackEvent', tokens('SHARED.updateYourName'), tokens('SHARED.cancel')]
        }
      }
    ]
  }
]
export default CHANGE_NAME_1
