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
              prop: '${givenName}',
              operator: 'is'
            },
            label: 'Full name',
            action: {
              label: 'Change',
              href: '/account/register/_start/'
            },
            dynamicProps: {
              value: '${givenName}'
            }
          },
          {
            component: 'SummaryListItem',
            conditional: {
              prop: '${userName}',
              operator: 'is'
            },
            label: 'Email address',
            action: {
              label: 'Change',
              href: '/account/register/_start/'
            },
            dynamicProps: {
              value: '${userName}'
            }
          },
          {
            component: 'SummaryListItem',
            conditional: {
              prop: '${telephoneNumber}',
              operator: 'is'
            },
            label: 'Mobile Number',
            action: {
              label: 'Change',
              href: '/account/register/_start/'
            },
            dynamicProps: {
              value: '${telephoneNumber}'
            }
          }
        ]
      }
    }
  }
]

export default REGISTRATION_CONFIRMATION
