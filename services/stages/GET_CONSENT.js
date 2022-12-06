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
    dynamicProps: {
      children: tokens('CONSENT.pageHeading.heading')
    },
    props: {
      showErrorSummary: false
    }
  },
  {
    component: 'BodyText',
    props: {},
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens('CONSENT.bodyText.software')
        }
      },
      {
        component: 'SpanText',
        dynamicProps: {
          children: '${company}'
        },
        props: {
          weight: 'bold'
        }
      }
    ]
  },
  {
    component: 'BodyText',
    props: {
      children: tokens('CONSENT.bodyText.permissions')
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken3: {
          _hidden: true
        }
      }
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        iterator: {
          prop: '${scopes}',
          name: 'scope',
          index: 'index'
        },
        component: 'Fragment',
        dynamicProps: {
          key: '${scope}'
        },
        content: [
          {
            component: 'ListItem',
            dynamicProps: {
              children: '${scope}'
            }
          },
          {
            component: 'NlToBr'
          }
        ]
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
          testId: 'allowAccess',
          handler: {
            name: 'onSecondarySubmit',
            params: {
              target: 'IDToken3',
              value: 0
            }
          }
        }
      },
      {
        component: 'Button',
        props: {
          children: tokens('CONSENT.button.cancel'),
          testId: 'cancelButton',
          type: 'submit',
          handler: {
            name: 'onSecondarySubmit',
            params: {
              target: 'IDToken3',
              value: 1
            }
          }
        }
      }
    ]
  }
]
export default GET_CONSENT
