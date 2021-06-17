/* eslint-disable no-template-curly-in-string */
import genericError from './genericError.json'

const inviteUserStages = {
  INVITE_USER_1: [
    {
      component: 'BrowserTitle',
      props: {
        title: "What are the authorised person's details?"
      }
    },
    {
      component: 'Caption',
      dynamicProps: {
        children: '${companyName}'
      }
    },
    {
      component: 'PageHeading',
      props: {
        children: "What are the authorised person's details?"
      }
    },
    {
      component: 'BodyText',
      props: {
        children: 'Tell us the details of the person you want to authorise to file online for this company.'
      }
    },
    {
      component: 'InsetText',
      props: {
        children: 'You can change who is authorised to file at any time.'
      }
    },
    {
      component: 'DisplayUiElements',
      props: {
        elementProps: {
          IDToken2: {
            formGroup: 'nameAndEmail',
            label: 'Email address',
            hint: "We'll send an email that contains a request link."
          }
        }
      }
    },
    {
      component: 'Button',
      props: {
        children: 'Send email request',
        type: 'submit',
        testId: 'submitButton'
      }
    }
  ],
  INVITE_USER_2: [
    {
      component: 'Redirect',
      dynamicProps: {
        url: '${authoriseSuccessPath}'
      }
    }
  ],
  INVITE_USER_3: [
    {
      component: 'Redirect',
      dynamicProps: {
        url: '${acceptSuccessPath}'
      }
    }
  ],
  INVITE_USER_ERROR: genericError
}
export default inviteUserStages
