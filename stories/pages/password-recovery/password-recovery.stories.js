import React from 'react'
import fetchMock from 'fetch-mock'
import { ResetPassword } from '../../../pages/password-recovery/[pageStep]'
import { mockAuthId } from '../common-mocks'
import { COMPANY_ASSOCIATION_2 } from '../account/associate/associate.stories'

export default {
  title: 'Pages/PasswordRecovery/ResetPassword',
  args: {
    lang: 'en'
  }
}

const Template = (args) => {
  fetchMock.restore().mock(args.path, args.responseData, {
    delay: 100 // fake a slow network
  })
  return <ResetPassword {...args} />
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
