/* eslint-disable no-template-curly-in-string */
const REGISTRATION_CONFIRMATION = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.whatAreYourDetails')
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('REGISTRATION_CONFIRM.heading.title')
    }
  },
  {
    component: 'SummaryList',
    props: {
      isDynamicItemList: true
    },
    dynamicProps: {
      children: {
        component: 'Fragment',
        content: [
          {
            component: 'SummaryListItem',
            conditional: {
              prop: '${fullName}',
              operator: 'is'
            },
            label: tokens('SHARED.fullName'),
            action: {
              label: tokens('SHARED.change'),
              href: '/account/register/_start/',
              desc: tokens('SHARED.change') + ' ' + tokens('SHARED.fullName')
            },
            dynamicProps: {
              value: '${fullName}'
            }
          },
          {
            component: 'SummaryListItem',
            conditional: {
              prop: '${emailAddress}',
              operator: 'is'
            },
            label: tokens('SHARED.emailAddress'),
            action: {
              label: tokens('SHARED.change'),
              href: '/account/register/_start/',
              desc: tokens('SHARED.change') + ' ' + tokens('SHARED.emailAddress')
            },
            dynamicProps: {
              value: '${emailAddress}'
            }
          },
          {
            component: 'SummaryListItem',
            conditional: {
              prop: '${mobileNumber}',
              operator: 'is'
            },
            label: tokens('SHARED.mobileNumber'),
            action: {
              label: tokens('SHARED.change'),
              href: '/account/register/_start/',
              desc: tokens('SHARED.change') + ' ' + tokens('SHARED.mobileNumber')
            },
            isNested: true,
            content: [
              {
                component: 'PadPhoneNumber',
                dynamicProps: {
                  phoneNumber: '${mobileNumber}'
                }
              }
            ]
          }
        ]
      }
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken2: {
          _hidden: true
        },
        IDToken3: {
          _hidden: true
        },
        IDToken4: {
          _hidden: true
        }
      }
    }
  },
  {
    component: 'Button',
    props: {
      children: tokens('SHARED.continue'),
      type: 'submit',
      testId: 'submitButton'
    }
  }
]

export default REGISTRATION_CONFIRMATION
