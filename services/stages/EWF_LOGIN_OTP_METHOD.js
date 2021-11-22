/* eslint-disable no-template-curly-in-string */
const EWF_LOGIN_OTP_METHOD = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.howDoYouWantToConfirmItsYou')
    }
  },
  {
    component: 'DisplayUiElements',
    dynamicProps: {
      'elementProps.IDToken1.options': [
        {
          label: tokens('SHARED.email')
        },
        {
          label: tokens('SHARED.text')
        }
      ]
    },
    props: {
      elementProps: {
        IDToken1: {
          renderLabelAs: 'heading',
          label: tokens('SHARED.howDoYouWantToConfirmItsYou'),
          hint: tokens('SHARED.beforeYouCanMakeChangesToYourAccountWeNeedTo'),
          customValidation: [
            {
              name: 'required',
              token: 'OTP_CHOICE_EMAIL_TEXT_REQUIRED'
            }
          ]
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
export default EWF_LOGIN_OTP_METHOD
