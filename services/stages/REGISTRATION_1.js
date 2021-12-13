/* eslint-disable no-template-curly-in-string */
const REGISTRATION_1 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.whatAreYourDetails')
    }
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
        IDToken1: {
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
          ]
        },
        IDToken2: {
          label: tokens('SHARED.emailAddress'),
          type: 'email',
          autoComplete: 'email',
          hint: tokens('SHARED.wellSendALinkToThisEmailAddressToVerifyYou'),
          customValidation: [
            {
              name: 'required',
              token: 'REGISTRATION_REQUIRED(mail)'
            }
          ]
        },
        IDToken3: {
          label: tokens('SHARED.mobileNumberOptional'),
          type: 'number',
          autoComplete: 'tel',
          hint: tokens('SHARED.addYourMobileNumberToMakeYourAccountMore')
        }
      }
    }
  },
  {
    component: 'Button',
    props: {
      children: tokens('SHARED.continue'),
      type: 'submit',
      testId: 'submitButton'
    }
  }
]
export default REGISTRATION_1
