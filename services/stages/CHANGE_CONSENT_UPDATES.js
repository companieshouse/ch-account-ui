/* eslint-disable no-template-curly-in-string */
const CHANGE_CONSENT_UPDATES = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('CHANGE_CONSENT_UPDATES.[0].BrowserTitle.manageAccountChangeConsentForEmail'),
      showErrorSummary: true
    }
  },
  {
    component: 'ErrorSummary',
    props: {
      title: tokens('SHARED.thereIsAProblem')
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
          ],
          customValidation: [
            {
              name: 'radioRequired',
              token: 'SELECT_YES_NO_EMAIL_NEW_MESSAGES'
            }
          ],
          matomo: ['trackEvent', tokens('CHANGE_CONSENT_UPDATES.[0].BrowserTitle.manageAccountChangeConsentForEmail'), tokens('CHANGE_CONSENT_UPDATES.[1].DisplayUiElements.canWeEmailYouToTellYouAboutANewMessageInYour')]
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
          href: '/account/manage',
          matomo: ['trackEvent', tokens('CHANGE_CONSENT_UPDATES.[0].BrowserTitle.manageAccountChangeConsentForEmail'), tokens('SHARED.cancel')]
        }
      }
    ]
  }
]
export default CHANGE_CONSENT_UPDATES
