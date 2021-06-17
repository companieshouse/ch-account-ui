/* eslint-disable no-template-curly-in-string */
const companyAssociationStages = {
  COMPANY_ASSOCIATION_1: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Tell us the company number'
      }
    },
    {
      component: 'ErrorSummary',
      props: {
        title: 'There is a problem'
      }
    },
    {
      component: 'DisplayUiElements',
      props: {
        elementProps: {
          IDToken2: {
            renderLabelAs: 'heading',
            label: 'What is the company number?',
            fixedWidth: '10',
            hint: 'Enter the number of the company you would like to add to your Companies House account'
          }
        }
      }
    },
    {
      component: 'Details',
      props: {
        summary: 'Help with my company number'
      },
      content: [
        {
          component: 'BodyText',
          props: {
          },
          content: [
            {
              component: 'SpanText',
              props: {
                children: 'You can find this by searching for the company on the '
              }
            },
            {
              component: 'LinkText',
              props: {
                children: 'Companies House register (opens in a new tab)',
                href: 'https://find-and-update.company-information.service.gov.uk',
                target: '_blank',
                testId: 'companiesHouseRegisterLink'
              }
            },
            {
              component: 'SpanText',
              props: {
                children: '.'
              }
            }
          ]
        }
      ]
    },
    {
      component: 'Button',
      props: {
        children: 'Continue',
        type: 'submit',
        testId: 'submitButton'
      }
    }
  ],
  COMPANY_ASSOCIATION_2: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Confirm this is the correct company'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: 'Confirm this is the correct company'
      }
    },
    {
      component: 'HeadingText',
      dynamicProps: {
        children: '${company.name}'
      },
      props: {
        size: 'l'
      }
    },
    {
      component: 'SummaryList',
      dynamicProps: {
        'listItems.0.value': '${company.number}',
        'listItems.1.value': '${company.status}',
        'listItems.2.value': '${company.creationDate}',
        'listItems.3.value': '${company.type}',
        'listItems.4.value': {
          component: 'NlToBr',
          dynamicProps: {
            content: '${company.addressLine1}\n${company.addressLine2}\n${company.locality}\n${company.region}\n${company.postalCode}'
          }
        }
      },
      props: {
        listItems: [
          {
            label: 'Company number',
            value: ''
          },
          {
            label: 'Status',
            value: ''
          },
          {
            label: 'Incorporation date',
            value: ''
          },
          {
            label: 'Company type',
            value: ''
          },
          {
            label: 'Registered office address',
            value: ''
          }
        ]
      }
    },
    {
      component: 'DisplayUiElements',
      props: {
        elementProps: {
          IDToken4: {
            _hidden: true
          }
        }
      }
    },
    {
      component: 'Button',
      props: {
        children: 'Confirm and continue',
        type: 'submit',
        testId: 'submitButton'
      }
    },
    {
      component: 'BodyText',
      content: [
        {
          component: 'LinkText',
          props: {
            children: 'Choose a different company',
            href: '/account/associate/_restart'
          }
        }
      ]
    }
  ],
  COMPANY_ASSOCIATION_3: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Provide the company auth code'
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
            caption: '',
            captionPosition: 'above',
            label: 'Enter the company authentication code',
            fixedWidth: '10'
          }
        }
      }
    },
    {
      component: 'Button',
      props: {
        children: 'Continue',
        type: 'submit',
        testId: 'submitButton'
      }
    },
    {
      component: 'Details',
      props: {
        summary: 'Help with authentication code'
      },
      content: [
        {
          component: 'BodyText',
          props: {
            children: 'This is a 6 character code issued by us to each company. The code is used to authorise online filings.'
          }
        },
        {
          component: 'LinkText',
          dynamicProps: {
            href: '${links.requestAuthCodePath}'
          },
          props: {
            children: 'Request an authentication code',
            testId: 'requestAuthCodeLink'
          }
        }
      ]
    }
  ],
  COMPANY_ASSOCIATION_4: [
    {
      component: 'Redirect',
      dynamicProps: {
        url: '/account/your-companies/?notifyTitle=Success&notifyHeading=${company.name} has been added to your account.&notifyType=success'
      }
    }
  ]
}
export default companyAssociationStages
