
const CHANGE_CONSENT_UPDATES = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('CHANGE_CONSENT_UPDATES.[0].BrowserTitle.manageAccountChangeConsentForEmail')
    }
  },
  {
    component: 'DisplayUiElements',
    dynamicProps: {
      'elementProps.IDToken2.caption': '${company.name}'
    },
    props: {
      elementProps: {
        IDToken2: {
          renderLabelAs: 'heading',
          captionPosition: 'above',
          label: tokens('CHANGE_CONSENT_UPDATES.[1].DisplayUiElements.canWeEmailYouToTellYouAboutANewMessageInYour'),
          hint: tokens('CHANGE_CONSENT_UPDATES.[1].DisplayUiElements.inTheFutureWedLikeToSendYouEmailsToLetYou'),
          options: [
            {
              label: tokens('SHARED.yes')
            },
            {
              label: tokens('SHARED.no')
            }
          ]
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
          children: tokens('SHARED.save'),
          type: 'submit',
          testId: 'submitButton'
        }
      },
      {
        component: 'LinkText',
        props: {
          children: tokens('SHARED.cancel'),
          href: '/account/manage'
        }
      }
    ]
  }
]
export default CHANGE_CONSENT_UPDATES
