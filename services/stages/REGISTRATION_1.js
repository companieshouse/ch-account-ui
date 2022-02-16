/* eslint-disable no-template-curly-in-string */
const REGISTRATION_1 = (lang, tokens) => [
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
      title: 'ERROR_SUMMARY_TITLE',
      type: 'error',
      errors: ['invalid phone error']
    },
    content: [
      {
        component: 'SpanText',
        props: {
          children: 'REGISTRATION_MATCH_REGEXP(telephoneNumber)'
        }
      }
    ]
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.whatAreYourDetails')
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken2: {
          label: tokens('SHARED.fullNameOptional'),
          type: 'text',
          autoComplete: 'name',
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
          ],
          testId: 'userNameInputField'
        },
        IDToken3: {
          label: tokens('SHARED.emailAddress'),
          type: 'email',
          autoComplete: 'email',
          hint: tokens('SHARED.wellSendALinkToThisEmailAddressToVerifyYou'),
          testId: 'emailInputField'
        },
        IDToken4: {
          label: tokens('SHARED.mobileNumberOptional'),
          autoComplete: 'tel',
          hint: tokens('SHARED.addYourMobileNumberToMakeYourAccountMore'),
          testId: 'mobilePhoneInputField'
        }
      }
    }
  },
  {
    component: 'Button',
    props: {
      children: tokens('SHARED.continue'),
      type: 'submit',
      testId: 'submitButton',
      matomo: ['trackEvent', tokens('SHARED.whatAreYourDetails'), tokens('SHARED.continue')]
    }
  }
]
export default REGISTRATION_1
