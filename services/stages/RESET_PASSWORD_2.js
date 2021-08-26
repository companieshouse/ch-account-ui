/* eslint-disable no-template-curly-in-string */
const RESET_PASSWORD_2 = (lang, tokens) => [
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.howDoYouWantToConfirmItsYou')
    }
  },
  {
    component: 'BodyText',
    props: {
      children: tokens('SHARED.beforeYouCanMakeChangesToYourAccountWeNeedTo')
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken1: {
          label: null,
          options: [
            {
              label: tokens('SHARED.email')
            },
            {
              label: tokens('SHARED.text')
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
export default RESET_PASSWORD_2
