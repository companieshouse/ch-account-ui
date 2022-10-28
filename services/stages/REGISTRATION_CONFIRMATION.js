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
      children: 'Check your answers before we verify your details'
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
            label: 'Full name',
            action: {
              label: 'Change',
              href: '/account/register/_start/'
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
            label: 'Email address',
            action: {
              label: 'Change',
              href: '/account/register/_start/'
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
            label: 'Mobile Number',
            action: {
              label: 'Change',
              href: '/account/register/_start/'
            },
            dynamicProps: {
              value: '${mobileNumber}'
            }
          }
        ]
      }
    }
  }
]

export default REGISTRATION_CONFIRMATION
