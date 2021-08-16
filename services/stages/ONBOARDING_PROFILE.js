
const ONBOARDING_PROFILE = (lang, tokens) => [
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
        IDToken3: {
          autoComplete: 'name',
          hint: tokens('SHARED.thisIsTheNameThatWillBeDisplayedInYour'),
          label: tokens('SHARED.fullName')
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
