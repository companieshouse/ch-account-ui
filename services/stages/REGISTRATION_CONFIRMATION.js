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
    dynamicProps: {
      // 'listItems.0.value': '${user.name}',
      'listItems.0.value': {
        conditional: {
          prop: '${givenName}',
          operator: 'is'
        },
        component: 'BodyText',
        props: {
          children: '${givenName}'
        }
      },
      'listItems.1.value': '${userName}',
      'listItems.2.value': '${telephoneNumber}',
      'listItems.0.action': {
        component: 'LinkText',
        props: {
          children: 'Change'
        },
        dynamicProps: {
          href: 'link'
        }
      },
      'listItems.1.action': {
        component: 'LinkText',
        props: {
          children: 'Change'
        },
        dynamicProps: {
          href: 'link'
        }
      },
      'listItems.2.action': {
        component: 'LinkText',
        props: {
          children: 'Change'
        },
        dynamicProps: {
          href: 'link'
        }
      }
    },
    props: {
      hasActions: true,
      listItems: [
        {
          label: 'Full name',
          value: '',
          conditional: {
            prop: '${givenName}',
            operator: 'not'
          }
        },
        {
          label: 'Email address',
          value: ''
        },
        {
          label: 'Mobile phone',
          value: ''
        }
      ]
    }
  }
]

export default REGISTRATION_CONFIRMATION
