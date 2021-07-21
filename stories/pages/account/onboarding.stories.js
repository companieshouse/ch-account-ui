import React from 'react'
import fetchMock from 'fetch-mock'
import { Onboarding } from '../../../pages/account/onboarding'
import { mockAuthId } from '../common-mocks'

const path = 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?ForceAuth=true&authIndexType=service&authIndexValue=CHOnboarding'

export default {
  title: 'Pages/Account/Onboarding',
  args: {
    lang: 'en'
  }
}

const Template = (args) => {
  const { responseData, ...rest } = args
  fetchMock.restore().mock(path, responseData, {
    delay: 100 // fake a slow network
  })
  return <Onboarding {...rest} />
}

export const ONBOARDING_PWD = Template.bind({})
ONBOARDING_PWD.args = {
  queryParams: {},
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'TextOutputCallback',
        output: [
          {
            name: 'message',
            value: 'Please create new password for user stuart.parr@amido.com'
          },
          {
            name: 'messageType',
            value: '0'
          }
        ]
      },
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: 'stuart.parr@amido.com'
          },
          {
            name: 'id',
            value: 'userName'
          }
        ],
        input: [
          {
            name: 'IDToken2',
            value: 'userName'
          }
        ]
      },
      {
        type: 'PasswordCallback',
        output: [
          {
            name: 'prompt',
            value: 'New password'
          }
        ],
        input: [
          {
            name: 'IDToken3',
            value: ''
          }
        ]
      },
      {
        type: 'PasswordCallback',
        output: [
          {
            name: 'prompt',
            value: 'Confirm new password'
          }
        ],
        input: [
          {
            name: 'IDToken4',
            value: ''
          }
        ]
      },
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: 'ONBOARDING_PWD'
          },
          {
            name: 'id',
            value: 'stage'
          }
        ],
        input: [
          {
            name: 'IDToken5',
            value: 'stage'
          }
        ]
      }
    ]
  }
}

export const ONBOARDING_PROFILE = Template.bind({})
ONBOARDING_PROFILE.args = {
  queryParams: {},
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'TextOutputCallback',
        output: [
          {
            name: 'message',
            value: 'Update your personal details'
          },
          {
            name: 'messageType',
            value: '0'
          }
        ]
      },
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: 'BOTH'
          },
          {
            name: 'id',
            value: 'BOTH'
          }
        ],
        input: [
          {
            name: 'IDToken2',
            value: 'BOTH'
          }
        ]
      },
      {
        type: 'NameCallback',
        output: [
          {
            name: 'prompt',
            value: 'What is your full name? (optional)'
          }
        ],
        input: [
          {
            name: 'IDToken3',
            value: ''
          }
        ]
      },
      {
        type: 'NameCallback',
        output: [
          {
            name: 'prompt',
            value: 'What is your mobile number? (optional)'
          }
        ],
        input: [
          {
            name: 'IDToken4',
            value: ''
          }
        ]
      },
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: 'ONBOARDING_PROFILE'
          },
          {
            name: 'id',
            value: 'stage'
          }
        ],
        input: [
          {
            name: 'IDToken5',
            value: 'stage'
          }
        ]
      },
      {
        type: 'ConfirmationCallback',
        output: [
          {
            name: 'prompt',
            value: 'Do you want to skip?'
          },
          {
            name: 'messageType',
            value: 0
          },
          {
            name: 'options',
            value: [
              'SKIP',
              'SUBMIT'
            ]
          },
          {
            name: 'optionType',
            value: -1
          },
          {
            name: 'defaultOption',
            value: 1
          }
        ],
        input: [
          {
            name: 'IDToken6',
            value: 0
          }
        ]
      }
    ]
  }
}
