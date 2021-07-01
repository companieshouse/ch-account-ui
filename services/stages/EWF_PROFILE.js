
const EWF_PROFILE = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens['EWF_PROFILE.[0].BrowserTitle.updateYourPersonalDetails']
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens['SHARED.updateYourPersonalDetails']
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken3: {
          autoComplete: 'name',
          hint: tokens['SHARED.thisIsTheNameThatWillBeDisplayedInYour'],
          label: tokens['EWF_PROFILE.[2].DisplayUiElements.whatIsYourFullNameOptional']
        },
        IDToken4: {
          autoComplete: 'tel',
          hint: tokens['SHARED.addYourMobileNumberToMakeYourAccountMore'],
          label: tokens['EWF_PROFILE.[2].DisplayUiElements.whatIsYourMobileNumberOptional']
        },
        IDToken6: {
          _hidden: true
        }
      }
    }
  },
  {
    component: 'ButtonGroup',
    content: [
      {
        component: 'Button',
        props: {
          children: tokens['SHARED.continue'],
          type: 'submit',
          testId: 'submitButton'
        }
      },
      {
        component: 'Button',
        props: {
          children: tokens['EWF_PROFILE.[3].ButtonGroup.skip'],
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
export default EWF_PROFILE
