/* eslint-disable no-template-curly-in-string */
const CHANGE_CONSENT_MARKETING = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('CHANGE_CONSENT_MARKETING.[0].BrowserTitle.manageAccountChangeConsentForCompaniesHouse')
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
          label: tokens('CONSENT_MARKETING.Heading.canWeSendEmails'),
          hint: tokens('CONSENT_PREFERENCES_2.CHECKBOX_OPTION_2.hint'),
          options: [
            {
              label: tokens('SHARED.yes')
            },
            {
              label: tokens('SHARED.no')
            }
          ],
          matomo: ['trackEvent', tokens('CHANGE_CONSENT_MARKETING.[0].BrowserTitle.manageAccountChangeConsentForCompaniesHouse'), tokens('CONSENT_MARKETING.Heading.canWeSendEmails')],
          customValidation: [
            {
              name: 'radioRequired',
              token: 'SELECT_YES_NO'
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
          href: '/account/manage',
          matomo: ['trackEvent', tokens('CHANGE_CONSENT_MARKETING.[0].BrowserTitle.manageAccountChangeConsentForCompaniesHouse'), tokens('SHARED.cancel')]
        }
      }
    ]
  }
]
export default CHANGE_CONSENT_MARKETING
