
const EWF_PROFILE = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.updateYourPersonalDetails')
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.updateYourPersonalDetails')
    },
    content: [
      {
        component: 'Caption',
        props: {
          children: tokens('EWF_PROFILE.[1].Caption.thisIsOptional'),
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
          label: tokens('EWF_PROFILE.[2].DisplayUiElements.whatIsYourFullNameOptional')
        },
        IDToken4: {
          remove: true
        },
        IDToken6: {
          remove: true
        }
      }
    }
  },
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
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken3: {
          remove: true
        },
        IDToken4: {
          autoComplete: 'tel',
          hint: tokens('SHARED.addYourMobileNumberToMakeYourAccountMore'),
          label: tokens('EWF_PROFILE.[2].DisplayUiElements.whatIsYourMobileNumberOptional')
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
          children: tokens('SHARED.continue'),
          type: 'submit',
          testId: 'submitButton'
        }
      },
      {
        component: 'Button',
        props: {
          children: tokens('EWF_PROFILE.[3].ButtonGroup.skip'),
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
