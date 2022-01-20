/* eslint-disable no-template-curly-in-string */
const EMAIL_CONSENT = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: 'Sign in to WebFiling'
    }
  },
  {
    component: 'ErrorSummary',
    props: {
      title: tokens('SHARED.thereIsAProblem')
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken1: {
          label: 'Emails to tell you about a new message in your account',
          hint: 'In the future, we\'d like to send you emails to let you know you\'ve received a new message in your account',
          formGroup: 'emailPreferences',
          formGroupHeading: 'What type of additional email communication can we send you?',
          formGroupHint: 'Select all options that are relevant to you. You can update your preferences at any time.'
        },
        IDToken2: {
          label: 'Emails about Companies House activities',
          hint: 'For example, marketing, communications campaigns, or user research activities',
          formGroup: 'emailPreferences'
        }
      }
    }
  },
  {
    component: 'InsetText',
    content: [
      {
        component: 'BodyText',
        props: {
          children: 'Essential emails',
          weight: 'bold'
        }
      },
      {
        component: 'BodyText',
        props: {
          children: 'Some types of email are essential to manage your account. We need to send you essential emails from time to time.'
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
          children: 'Save and continue',
          type: 'submit',
          testId: 'submitButton'
        }
      }
    ]
  }
]
export default EMAIL_CONSENT
