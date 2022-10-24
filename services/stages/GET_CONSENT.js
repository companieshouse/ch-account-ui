/* eslint-disable no-template-curly-in-string */
const GET_CONSENT = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: 'CHS CONSENT'
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('CONSENT.pageHeading.heading'),
      size: 'l'
    }
  },
  {
    component: 'BodyText',
    props: {
      children: tokens('CONSENT.bodyText.software')
    }
  },
  {
    component: 'BodyText',
    props: {
      children: tokens('CONSENT.bodyText.permissions')
    }
  },
  {
    component: 'List',
    content: [
      {
        component: 'ListItem',
        props: {
          children: tokens('CONSENT.list.item.1')
        }
      },
      {
        component: 'ListItem',
        props: {
          children: tokens('CONSENT.list.item.2')
        }
      }
    ]
  },
  {
    component: 'ButtonGroup',
    content: [
      {
        component: 'Button',
        props: {
          children: tokens('CONSENT.button.submit.allow'),
          type: 'submit',
          testId: 'allowAccess'
        }
      },
      {
        component: 'Button',
        props: {
          children: tokens('CONSENT.button.cancel'),
          type: 'button',
          testId: 'cancelButton'
        }
      }
    ]
  }
]
export default GET_CONSENT
