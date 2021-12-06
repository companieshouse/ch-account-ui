/* eslint-disable no-template-curly-in-string */
import { translate } from '../translate'

const ONBOARDING_PROFILE = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.whatAreYourDetails')
    }
  },
  {
    conditional: {
      prop: '${invalidPhone}',
      operator: 'is'
    },
    component: 'ErrorSummary',
    props: {
      title: translate(lang, 'ERROR_SUMMARY_TITLE'),
      type: 'error',
      errors: ['invalid phone error']
    },
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens('REGISTRATION_MATCH_REGEXP(telephoneNumber)')
        }
      }
    ]
  },
  {
    conditional: {
      prop: '${smsSendError}',
      operator: 'is'
    },
    component: 'ErrorSummary',
    props: {
      title: translate(lang, 'ERROR_SUMMARY_TITLE'),
      type: 'error',
      errors: ['invalid phone error']
    },
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens('REGISTRATION_GENERAL_ERROR')
        }
      }
    ]
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.whatAreYourDetails')
    },
    content: [
      {
        component: 'Caption',
        props: {
          children: tokens('SHARED.thisIsOptional'),
          size: 'm',
          style: {
            paddingTop: '0.5em'
          }
        }
      }
    ]
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken3: {
          autoComplete: 'name',
          label: tokens('SHARED.fullName'),
          content: [
            {
              component: 'Details',
              props: {
                summary: tokens('SHARED.whereYourNameWillBeShown')
              },
              content: [
                {
                  component: 'BodyText',
                  props: {
                    children: tokens('SHARED.ifYouProvideYourNameThisWillBeShown')
                  }
                },
                {
                  component: 'List',
                  props: {
                    items: tokens('SHARED.whereYourNameWillBeShownList')
                  }
                },
                {
                  component: 'BodyText',
                  props: {
                    children: tokens('SHARED.itIsUpToYouHowYourNameIsShownForExampleJen')
                  }
                },
                {
                  component: 'BodyText',
                  props: {
                    children: tokens('SHARED.ifYouDoNotProvideYourNameYourEmailAddress')
                  }
                }
              ]
            }
          ]
        },
        IDToken4: {
          autoComplete: 'tel',
          hint: tokens('SHARED.addYourMobileNumberToMakeYourAccountMore'),
          label: tokens('SHARED.mobileNumberOptional')
        },
        IDToken6: {
          _hidden: true
        }
      }
    }
  },
  {
    component: 'ButtonGroup',
    content: [{
      component: 'Button',
      props: {
        children: tokens('SHARED.continue'),
        type: 'submit',
        testId: 'submitButton'
      }
    },
    {
      component: 'Button',
      props: {
        children: tokens('SHARED.skip'),
        type: 'submit',
        secondary: true,
        testId: 'submitButton',
        handler: {
          name: 'onSecondarySubmit',
          params: {
            target: 'IDToken6',
            value: 0
          }
        }
      }
    }
    ]
  }
]
export default ONBOARDING_PROFILE
