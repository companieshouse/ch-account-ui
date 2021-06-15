import React from 'react'
import fetchMock from 'fetch-mock'
import { ResetPassword } from '../../../pages/password-recovery/[pageStep]'
import { mockAuthId } from '../common-mocks'
import { setCallback } from '../story-utils'

export default {
  title: 'Pages/PasswordRecovery/ResetPassword',
  args: {
    lang: 'en'
  }
}

// eslint-disable-next-line react/prop-types
const Template = ({ pageProps, responseData, path, ...rest }) => {
  if (pageProps) {
    // eslint-disable-next-line react/prop-types
    setCallback(responseData.callbacks, 'pagePropsJSON', pageProps)
  }
  fetchMock.restore().mock(path, responseData, {
    delay: 100 // fake a slow network
  })
  return <ResetPassword {...rest} />
}

export const RESET_PASSWORD_1 = Template.bind({})
RESET_PASSWORD_1.story = {
  parameters: {
    nextRouter: {
      query: {
        pageStep: 'request'
      }
    }
  }
}
RESET_PASSWORD_1.args = {
  queryParams: {},
  path: 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?authIndexType=service&authIndexValue=CHResetPassword',
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'StringAttributeInputCallback',
        output: [
          {
            name: 'name',
            value: 'mail'
          },
          {
            name: 'prompt',
            value: 'Email Address'
          },
          {
            name: 'required',
            value: false
          },
          {
            name: 'policies',
            value: {
              policyRequirements: [
                'REQUIRED',
                'VALID_TYPE',
                'VALID_EMAIL_ADDRESS_FORMAT'
              ],
              fallbackPolicies: null,
              name: 'mail',
              policies: [
                {
                  policyRequirements: [
                    'REQUIRED'
                  ],
                  policyId: 'required'
                },
                {
                  policyRequirements: [
                    'VALID_TYPE'
                  ],
                  policyId: 'valid-type',
                  params: {
                    types: [
                      'string'
                    ]
                  }
                },
                {
                  policyId: 'not-empty',
                  policyRequirements: [
                    'REQUIRED'
                  ]
                },
                {
                  policyId: 'valid-email-address-format',
                  policyRequirements: [
                    'VALID_EMAIL_ADDRESS_FORMAT'
                  ]
                }
              ],
              conditionalPolicies: null
            }
          },
          {
            name: 'failedPolicies',
            value: []
          },
          {
            name: 'validateOnly',
            value: false
          },
          {
            name: 'value',
            value: ''
          }
        ],
        input: [
          {
            name: 'IDToken1',
            value: ''
          },
          {
            name: 'IDToken1validateOnly',
            value: false
          }
        ],
        _id: 0
      }
    ],
    stage: 'RESET_PASSWORD_1',
    header: 'Reset Password',
    description: 'Enter your email address or <a href="#/service/Login">Sign in</a>'
  }
}

export const RESET_PASSWORD_2 = Template.bind({})
RESET_PASSWORD_2.story = {
  parameters: {
    nextRouter: {
      query: {
        pageStep: 'request'
      }
    }
  }
}
RESET_PASSWORD_2.args = {
  queryParams: {},
  path: 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?authIndexType=service&authIndexValue=CHResetPassword',
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'ChoiceCallback',
        output: [
          {
            name: 'prompt',
            value: "How do you want to confirm it's you?"
          },
          {
            name: 'choices',
            value: [
              'email',
              'text'
            ]
          },
          {
            name: 'defaultChoice',
            value: 0
          }
        ],
        input: [
          {
            name: 'IDToken1',
            value: 0
          }
        ],
        _id: 1
      }
    ],
    stage: 'RESET_PASSWORD_2',
    header: "How do you want to confirm it's you?",
    description: "How do you want to confirm it's you?"
  }
}

export const RESET_PASSWORD_3 = Template.bind({})
RESET_PASSWORD_3.story = {
  parameters: {
    nextRouter: {
      query: {
        pageStep: 'request'
      }
    }
  }
}
RESET_PASSWORD_3.args = {
  queryParams: {},
  path: 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?authIndexType=service&authIndexValue=CHResetPassword',
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: '{"phoneNumber":"07777777777"}'
          },
          {
            name: 'id',
            value: 'pagePropsJSON'
          }
        ],
        input: [
          {
            name: 'IDToken1',
            value: 'pagePropsJSON'
          }
        ],
        _id: 0
      },
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: 'ff898fec-21ac-4794-ae9f-b1a2aeab75c2'
          },
          {
            name: 'id',
            value: 'notificationId'
          }
        ],
        input: [
          {
            name: 'IDToken2',
            value: 'notificationId'
          }
        ],
        _id: 1
      },
      {
        type: 'PasswordCallback',
        output: [
          {
            name: 'prompt',
            value: 'One Time Password'
          }
        ],
        input: [
          {
            name: 'IDToken3',
            value: ''
          }
        ],
        _id: 2
      }
    ],
    stage: 'RESET_PASSWORD_3',
    header: 'Please enter your code',
    description: 'Please enter the code you received via SMS'
  }
}

export const RESET_PASSWORD_ERROR = Template.bind({})

const registrationsErrors = {
  RESET_PASSWORD_GENERAL_ERROR: '{"errors":[{"label":"An error has occurred! Please try again later.","token":"RESET_PASSWORD_GENERAL_ERROR"}]}',
  RESET_PASSWORD_EMAIL_SEND_ERROR: '{"errors":[{"label":"An error occurred while sending the email. Please try again later.","token":" RESET_PASSWORD_EMAIL_SEND_ERROR"}]}',
  RESET_PASSWORD_TOKEN_PARSING_ERROR: '{"errors":[{"label":"An error occurred while parsing the token. Please try again.","token":"RESET_PASSWORD_TOKEN_PARSING_ERROR"}]}',
  RESET_PASSWORD_TOKEN_EXPIRED_ERROR: '{"errors":[{"label":"The registration token has expired. Please restart the registration process.","token":"RESET_PASSWORD_TOKEN_EXPIRED_ERROR"}]}'
}

RESET_PASSWORD_ERROR.argTypes = {
  pageProps: {
    options: Object.keys(registrationsErrors),
    type: 'select',
    mapping: registrationsErrors
  }
}
RESET_PASSWORD_ERROR.story = {
  parameters: {
    nextRouter: {
      query: {
        pageStep: 'request'
      }
    }
  }
}
RESET_PASSWORD_ERROR.args = {
  queryParams: {},
  path: 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?authIndexType=service&authIndexValue=CHResetPassword',
  responseData: {
    authId: mockAuthId,
    callbacks: [{
      type: 'HiddenValueCallback',
      output: [
        {
          name: 'value',
          value: 'RESET_PASSWORD_ERROR'
        },
        {
          name: 'id',
          value: 'stage'
        }
      ],
      input: [
        {
          name: 'IDToken2',
          value: 'stage'
        }
      ]
    }, {
      type: 'HiddenValueCallback',
      output: [
        {
          name: 'value',
          value: ''
        },
        {
          name: 'id',
          value: 'pagePropsJSON'
        }
      ],
      input: [
        {
          name: 'IDToken5',
          value: 'pagePropsJSON'
        }
      ]
    }]
  }
}
