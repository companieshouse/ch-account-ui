/* eslint-disable no-template-curly-in-string */
const changeNameStages = {
  CHANGE_NAME_1: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Change your name'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: 'Change your name'
      }
    },
    {
      component: 'BodyText',
      content: [
        {
          component: 'SpanText',
          dynamicProps: {
            children: 'The name currently shown in your Companies House account is '
          }
        },
        {
          component: 'SpanText',
          props: {
            weight: 'bold'
          },
          dynamicProps: {
            children: '${profileName}.'
          }
        },
        {
          component: 'SpanText',
          dynamicProps: {
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
            label: 'Enter new full name',
            autoComplete: 'off'
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
            children: 'Change name',
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
  CHANGE_NAME_2: [
    {
      component: 'Redirect',
      dynamicProps: {
        url: '${changeSuccessPath}'
      }
    }
  ]
}
export default changeNameStages
