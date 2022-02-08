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
          label: tokens('CONSENT_PREFERENCES_1.DisplayUiElements.Heading.EmailsToTellYouAbout'),
          hint: tokens('CONSENT_PREFERENCES_1.DisplayUiElements.hint.inTheFuture'),
          formGroup: 'emailPreferences',
          formGroupHeading: tokens('CONSENT_PREFERENCES_1.DisplayUiElements.formGroupHeading'),
          formGroupHint: tokens('CONSENT_PREFERENCES_1.DisplayUiElements.formGroupHint')
        },
        IDToken2: {
          label: tokens('CONSENT_PREFERENCES_2.CHECKBOX_OPTION_2.Heading.EmailsToHelp'),
          hint: tokens('CONSENT_PREFERENCES_2.CHECKBOX_OPTION_2.hint'),
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
          children: tokens('CONSENT_PREFERENCES_3.InsetText.essentialEmails'),
          weight: 'bold'
        }
      },
      {
        component: 'BodyText',
        props: {
          children: tokens('CONSENT_PREFERENCES_3.InsetText.someTypesOfEmail')
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
          children: tokens('CONSENT_PREFERENCES_3.ButtonGroup.saveAndContinue'),
          type: 'submit',
          testId: 'submitButton'
        }
      }
    ]
  }
]
export default EMAIL_CONSENT
