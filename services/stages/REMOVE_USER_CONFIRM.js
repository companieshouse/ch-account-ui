
const REMOVE_USER_CONFIRM = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('REMOVE_USER_CONFIRM.[0].BrowserTitle.removeAuthorisationToFileOnline')
    }
  },
  {
    component: 'ErrorSummary',
    props: {
      title: tokens('SHARED.thereIsAProblem')
    }
  },
  {
    component: 'Caption',
    dynamicProps: {
      children: '${company.name}'
    }
  },
  {
    component: 'PageHeading',
    dynamicProps: {
      children: tokens('REMOVE_USER_CONFIRM.[2].PageHeading.doYouWantToRemoveUserDisplayNameS')
    },
    props: {
      showErrorSummary: false
    }
  },
  {
    component: 'BodyText',
    dynamicProps: {
      children: tokens('REMOVE_USER_CONFIRM.[3].BodyText.ifYouRemoveUserDisplayNameSAuthorisationThey')
    }
  },
  {
    component: 'WarningText',
    content: [
      {
        component: 'Fragment',
        dynamicProps: {
          children: tokens('REMOVE_USER_CONFIRM.[4].WarningText.userDisplayNameWillStillBeAbleToFileOnline')
        }
      },
      {
        component: 'Br'
      },
      {
        component: 'Br'
      },
      {
        component: 'Fragment',
        dynamicProps: {
          children: tokens('REMOVE_USER_CONFIRM.[4].WarningText.youShouldChangeTheAuthenticationCodeForThis')
        }
      }
    ]
  },
  {
    component: 'BodyText',
    dynamicProps: {
      children: tokens('REMOVE_USER_CONFIRM.[6].BodyText.ifUserDisplayNameIsAppointedAsAnOfficerOfThe')
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken2: {
          label: tokens('REMOVE_USER_CONFIRM.[7].DisplayUiElements.iConfirmThatIHaveReadAndUnderstoodThis')
        },
        IDToken4: {
          _hidden: true
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
          children: tokens('REMOVE_USER_CONFIRM.[8].ButtonGroup.removeAuthorisation'),
          type: 'submit',
          testId: 'submitButton',
          warning: true
        }
      },
      {
        component: 'Button',
        props: {
          children: tokens('SHARED.cancel'),
          type: 'submit',
          testId: 'submitButton',
          secondary: true,
          handler: {
            name: 'onSecondarySubmit',
            params: {
              target: 'IDToken4',
              value: 1
            }
          }
        }
      }
    ]
  }
]
export default REMOVE_USER_CONFIRM
