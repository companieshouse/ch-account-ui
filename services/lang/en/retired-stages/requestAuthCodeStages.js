/* eslint-disable no-template-curly-in-string */
const requestAuthCodeStages = {
  REQUEST_AUTHENTICATION_CODE_1: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Requesting an authentication code'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: 'Do you want us to send the authentication code to the registered office address?'
      }
    },
    {
      component: 'DisplayUiElements'
    },
    {
      component: 'BodyText',
      props: {
        children: "We'll send the authentication code by post to:"
      }
    },
    {
      component: 'BodyText',
      props: {
        weight: 'bold'
      },
      content: [
        {
          component: 'NlToBr',
          props: {
            content: '37 London Road\nLondon\nSE3 6GI'
          }
        }
      ]
    },
    {
      component: 'BodyText',
      props: {
        children: 'It can take up to 5 days to arrive.'
      }
    },
    {
      component: 'Button',
      props: {
        children: 'Send the authentication code',
        type: 'submit',
        testId: 'submitButton'
      }
    },
    {
      component: 'Button',
      props: {
        children: 'Cancel',
        secondary: true,
        className: 'marginLeft',
        renderAs: 'link',
        href: '/account/associate/',
        type: 'button',
        testId: 'cancelButton'
      }
    }
  ],
  REQUEST_AUTHENTICATION_CODE_2: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Authentication code requested'
      }
    },
    {
      component: 'NotificationBanner',
      props: {
        type: 'success',
        title: 'Success',
        heading: 'The authentication code for FLOWERS LIMITED will be posted to the registered office address.',
        children: 'It usually takes up to 5 days to arrive.'
      }
    },
    {
      component: 'DisplayUiElements'
    }
  ]
}
export default requestAuthCodeStages
