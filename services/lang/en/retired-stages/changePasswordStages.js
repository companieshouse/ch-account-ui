const changePasswordStages = {
  CHANGE_PASSWORD_1: [
    {
      component: 'BrowserTitle',
      props: {
        title: 'Change your password'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: 'Change your password'
      }
    },
    {
      component: 'DisplayUiElements',
      props: {
        elementProps: {
          IDToken2: {
            label: 'Enter your current password',
            suffix: null,
            customValidation: [{
              name: 'required',
              token: 'PASSWORD_REQUIRED'
            }]
          },
          IDToken3: {
            label: 'Enter a new password',
            hint: 'This must be at least 8 characters long and hard to guess.',
            formGroup: 'newPassword'
          },
          IDToken4: {
            label: 'Re-enter the new password',
            formGroup: 'newPassword'
          }
        }
      }
    },
    {
      component: 'Details',
      props: {
        summary: 'Help with creating your password'
      },
      content: [
        {
          component: 'Fragment',
          content: []
        },
        {
          component: 'BodyText',
          props: {
            children: 'You can use numbers, symbols and spaces.'
          }
        },
        {
          component: 'BodyText',
          props: {
            children: 'A good way to create a secure and memorable password is to use 3 random words.'
          }
        }
      ]
    },
    {
      component: 'Button',
      props: {
        children: 'Reset password',
        type: 'submit',
        testId: 'submitButton'
      }
    },
    {
      component: 'BodyText',
      content: [
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
  CHANGE_PASSWORD_2: [
    {
      component: 'Redirect',
      props: {
        url: "/account/manage/?notifyTitle=Success&notifyHeading=You've successfully changed your password.&notifyType=success"
      }
    }
  ]
}
export default changePasswordStages
