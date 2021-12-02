/* eslint-disable no-template-curly-in-string */

const INVITE_USER_CONFIRM = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.whatIsTheAuthorisedPersonsEmailAddress')
    }
  },
  {
    component: 'Caption',
    dynamicProps: {
      children: '${companyName}'
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('INVITE_USER_CONFIRM.[0].pageHeading.checkTheAuthorisedPersonsEmail')
    }
  },
  {
    component: 'SummaryList',
    dynamicProps: {
      'listItems.0.value': '',
      'listItems.1.value': '${emailAddress}'
    },
    props: {
      listItems: [
        {
          label: '',
          value: '',
          action: {
            label: ''
          }
        },
        {
          label: tokens('SHARED.email'),
          value: '${emailAddress}',
          action: {
            label: tokens('SHARED.change'),
            desc: 'email',
            href: '/account/manage/change-email/_start'
          }
        }
      ]
    }
  },
  {
    component: 'NlToBr',
    props: {
      children: ' '
    }
  },
  {
    component: 'NlToBr',
    props: {
      children: ' '
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken2: {
          _hidden: true
        }
      }
    }
  },
  {
    component: 'Button',
    props: {
      children: tokens('SHARED.confirmAndSendEmail'),
      type: 'submit',
      secondary: false,
      testId: 'submitButton',
      handler: {
        name: 'onSecondarySubmit',
        params: {
          target: 'IDToken2',
          value: 0
        }
      }
    }
  }
]

export default INVITE_USER_CONFIRM
