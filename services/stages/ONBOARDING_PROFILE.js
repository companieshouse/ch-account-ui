
const ONBOARDING_PROFILE = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: 'Update your personal details'
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: 'Update your personal details'
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken3: {
          autoComplete: 'name',
          hint: "This is the name that will be displayed in your account. It is up to you how your name is displayed, for example 'Dan Smith' or 'Daniel Smith'.",
          label: 'What is your full name? (optional)'
        },
        IDToken4: {
          autoComplete: 'tel',
          hint: "Add your mobile number to make your account more secure. We'll send a security code to this number by text message.",
          label: 'What is your mobile number? (optional)'
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
        children: 'Continue',
        type: 'submit',
        testId: 'submitButton'
      }
    },
    {
      component: 'Button',
      props: {
        children: 'Skip',
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
