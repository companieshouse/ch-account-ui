
const REMOVE_USER_CONFIRM = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: 'Remove authorisation to file online'
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
      children: 'Do you want to remove ${userDisplayName}\'s authorisation to file online for this company?'
    }
  },
  {
    component: 'BodyText',
    dynamicProps: {
      children: 'If you remove ${userDisplayName}\'s authorisation, they will no longer be able to access ${company.name} in their Companies House account.'
    }
  },
  {
    component: 'WarningText',
    content: [
      {
        component: 'Fragment',
        dynamicProps: {
          children: ' ${userDisplayName} will still be able to file online for this company if they have access to the current authentication code.'
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
          children: 'You should change the authentication code for this company as soon as possible after you have removed ${userDisplayName}\'s authorisation.'
        }
      }
    ]
  },
  {
    component: 'BodyText',
    dynamicProps: {
      children: 'We\'ll email ${userDisplayName} to let them know they are no longer authorised to file online for this company. We\'ll also email anyone else who is authorised to file for this company that ${userDisplayName}\'s authorisation has been removed. We will not tell ${userDisplayName} who removed their authorisation.'
    }
  },
  {
    component: 'BodyText',
    dynamicProps: {
      children: 'If ${userDisplayName} is appointed as an officer of the company, such as a director or secretary, removing their authorisation to file online does not remove their appointment.'
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken2: {
          label: 'I confirm that I have read and understood this information.'
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
          children: 'Remove authorisation',
          type: 'submit',
          testId: 'submitButton',
          warning: true
        }
      },
      {
        component: 'Button',
        props: {
          children: 'Cancel',
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
