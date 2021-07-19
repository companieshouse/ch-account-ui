
const CHANGE_CONSENT_MARKETING = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['CHANGE_CONSENT_MARKETING.[0].BrowserTitle.manageAccountChangeConsentForCompaniesHouse']
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
          label: tokens['CHANGE_CONSENT_MARKETING.[1].DisplayUiElements.canWeSendYouEmailsAboutCompaniesHouse'],
          hint: tokens['CHANGE_CONSENT_MARKETING.[1].DisplayUiElements.forExampleMarketingCommunicationsCampaignsOr'],
          options: [
            {
              label: tokens['SHARED.yes']
            },
            {
              label: tokens['SHARED.no']
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
          children: tokens['SHARED.save'],
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
export default CHANGE_CONSENT_MARKETING
