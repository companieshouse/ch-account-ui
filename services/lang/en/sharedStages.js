/* eslint-disable no-template-curly-in-string */
const sharedStages = {
  PHONE_OTP: [
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
  ]
}
export default sharedStages
