/* eslint-disable no-template-curly-in-string */
const updatePhoneStages = {
  UPDATE_PHONE_1: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Change your mobile number'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: 'Change your mobile number'
      }
    },
    {
      component: 'BodyText',
      content: [
        {
          component: 'SpanText',
          props: {
            children: 'The mobile number currently stored in your Companies House account is '
          }
        },
        {
          component: 'SpanText',
          props: {
            weight: 'bold'
          },
          dynamicProps: {
            children: '${profilePhoneNumber}'
          }
        },
        {
          component: 'SpanText',
          props: {
            children: '.'
          }
        }
      ]
    },
    {
      component: 'DisplayUiElements',
      props: {
        elementProps: {
          IDToken2: {
            label: 'New mobile number',
            hint: "We'll send a security code to this number by text message.",
            type: 'number',
            autoComplete: 'off'

          },
          IDToken3: {
            label: 'Password',
            hint: 'Enter your Companies House account password.'
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
            children: 'Continue',
            type: 'submit',
            testId: 'submitButton'
          }
        },
        {
          component: 'LinkText',
          props: {
            children: 'Cancel',
            href: '/account/manage'
          }
        }
      ]
    }
  ],
  UPDATE_PHONE_2: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Check your phone'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: 'Check your phone'
      }
    },
    {
      component: 'BodyText',
      content: [
        {
          component: 'SpanText',
          props: {
            children: "We've sent a text message with a security code to "
          }
        },
        {
          component: 'SpanText',
          props: {
            weight: 'bold'
          },
          content: [
            {
              component: 'ObfuscatePhoneNumber',
              dynamicProps: {
                phoneNumber: '${phoneNumber}'
              }
            }
          ]
        },
        {
          component: 'SpanText',
          props: {
            children: '.'
          }
        }
      ]
    },
    {
      component: 'BodyText',
      props: {
        children: 'It may take a few minutes to arrive.'
      }
    },
    {
      component: 'DisplayUiElements',
      props: {
        elementProps: {
          IDToken4: {
            label: 'Security code',
            type: 'number',
            autoComplete: 'off',
            suffix: false,
            fixedWidth: '10'
          }
        }
      }
    },
    {
      component: 'Button',
      props: {
        children: 'Continue',
        type: 'submit',
        testId: 'submitButton'
      }
    },
    {
      component: 'Details',
      props: {
        summary: 'I have not received a text message'
      },
      content: [
        {
          component: 'BodyText',
          props: {
            children: 'The text message may take a few minutes to arrive.'
          }
        },
        {
          component: 'BodyText',
          content: [
            {
              component: 'SpanText',
              props: {
                children: 'If it does not arrive, you can '
              }
            },
            {
              component: 'LinkText',
              props: {
                children: 'ask us to send you another text message',
                href: '/account/manage/change-phone-number/_restart'
              }
            },
            {
              component: 'SpanText',
              props: {
                children: '.'
              }
            }
          ]
        }
      ]
    }
  ],
  UPDATE_PHONE_3: [
    {
      component: 'Redirect',
      dynamicProps: {
        url: '${changeSuccessPath}'
      }
    }
  ]
}
export default updatePhoneStages
