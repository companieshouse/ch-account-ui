
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
      children: '${company.name}'
    }
  },
  {
    component: 'PageHeading',
    dynamicProps: {
      children: 'Do you want to remove ${displayName}\'s authorisation to file online for this company?'
    }
  },
  {
    component: 'BodyText',
    dynamicProps: {
      children: 'If you remove ${displayName}\'s authorisation, they will no longer be able to access ${company.name} in their Companies House account.'
    }
  },
  {
    component: 'WarningText',
    content: [
      {
        component: 'Fragment',
        dynamicProps: {
          children: ' ${displayName} will still be able to file online for this company if they have access to the current authentication code.'
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
          children: 'You should change the authentication code for this company as soon as possible after you have removed ${displayName}\'s authorisation.'
        }
      }
    ]
  },
  {
    component: 'BodyText',
    dynamicProps: {
      children: 'We\'ll email ${displayName} to let them know they are no longer authorised to file online for this company. We\'ll also email anyone else who is authorised to file for this company that ${displayName}\'s authorisation has been removed. We will not tell ${displayName} who removed their authorisation.'
    }
  },
  {
    component: 'BodyText',
    dynamicProps: {
      children: 'If ${displayName} is appointed as an officer of the company, such as a director or secretary, removing their authorisation to file online does not remove their appointment.'
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken2: {
          type: 'checkbox',
          options: [
            {},
            { label: 'I confirm that I have read and understood this information.' }
          ]
        },
        IDToken3: {
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
              target: 'IDToken3',
              value: 1
            }
          }
        }
      }
    ]
  }
]
export default REMOVE_AUTHORISED_USER_1
