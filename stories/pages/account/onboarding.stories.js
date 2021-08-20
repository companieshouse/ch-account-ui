import React from 'react'
import fetchMock from 'fetch-mock'
import { Onboarding } from '../../../pages/account/onboarding'
import { mockAuthId } from '../common-mocks'
import { setCallback } from '../story-utils'

const path = 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?ForceAuth=true&authIndexType=service&authIndexValue=CHOnboarding'

export default {
  title: 'Pages/Account/Onboarding',
  args: {
    lang: 'en'
  }
}

const Template = (args) => {
  const { responseData, pageProps, ...rest } = args
  if (pageProps) {
    // eslint-disable-next-line react/prop-types
    setCallback(responseData.callbacks, 'pagePropsJSON', pageProps)
  }
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

export const PHONE_OTP = Template.bind({})
PHONE_OTP.args = {
  queryParams: {},
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
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
            name: 'IDToken1',
            value: 'pagePropsJSON'
          }
        ],
        _id: 0
      },
      {
        type: 'TextOutputCallback',
        output: [
          {
            name: 'message',
            value: 'Please check your phone'
          },
          {
            name: 'messageType',
            value: '0'
          }
        ],
        _id: 1
      },
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: 'notificationId'
          },
          {
            name: 'id',
            value: 'notificationId'
          }
        ],
        input: [
          {
            name: 'IDToken3',
            value: 'notificationId'
          }
        ],
        _id: 2
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
            name: 'IDToken4',
            value: ''
          }
        ],
        _id: 4
      }
    ],
    stage: 'PHONE_OTP',
    header: 'Please enter your code',
    description: 'Please enter the code you received'
  }
}

export const ONBOARDING_ERROR = Template.bind({})

const onBoardingErrors = {
  ONBOARDING_NO_TOKEN_ERROR: '{"errors":[{"label":"An error has occurred! Please try again later.","token":"ONBOARDING_NO_TOKEN_ERROR"}]}',
  ONBOARDING_TOKEN_PARSING_ERROR: '{"errors":[{"label":"An error has occurred! Please try again later.","token":"ONBOARDING_TOKEN_PARSING_ERROR"}]}',
  ONBOARDING_ERROR_TOKEN_EXPIRED: '{"errors":[{"label":"An error has occurred! Please try again later.","token":"ONBOARDING_ERROR_TOKEN_EXPIRED"}]}',
  ONBOARDING_USER_LOOKUP_ERROR: '{"errors":[{"label":"An error has occurred! Please try again later.","token":"ONBOARDING_USER_LOOKUP_ERROR"}]}',
  ONBOARDING_USER_NOT_FOUND_ERROR: '{"errors":[{"label":"An error has occurred! Please try again later.","token":"ONBOARDING_USER_NOT_FOUND_ERROR"}]}',
  ONBOARDING_DATE_EXPIRED_ERROR: '{"errors":[{"label":"An error has occurred! Please try again later.","token":"ONBOARDING_DATE_EXPIRED_ERROR"}]}',
  ONBOARDING_NO_INVITE_FOUND: '{"errors":[{"label":"An error has occurred! Please try again later.","token":"ONBOARDING_NO_INVITE_FOUND"}]}',
  ONBOARDING_ERROR_JWT_TYPE_UNKNOWN: '{"errors":[{"label":"An error has occurred! Please try again later.","token":"ONBOARDING_ERROR_JWT_TYPE_UNKNOWN"}]}',
  ONBOARDING_ERROR_TOKEN_ISSUER_MISMATCH: '{"errors":[{"label":"An error has occurred! Please try again later.","token":"ONBOARDING_ERROR_TOKEN_ISSUER_MISMATCH"}]}',
  ONBOARDING_ERROR_TOKEN_ISSUED_IN_FUTURE: '{"errors":[{"label":"An error has occurred! Please try again later.","token":"ONBOARDING_ERROR_TOKEN_ISSUED_IN_FUTURE"}]}'
}

ONBOARDING_ERROR.argTypes = {
  pageProps: {
    options: Object.keys(onBoardingErrors),
    type: 'select',
    mapping: onBoardingErrors
  }
}
ONBOARDING_ERROR.story = {
  parameters: {
    nextRouter: {
      query: {
        pageStep: '_start'
      }
    }
  }
}
ONBOARDING_ERROR.args = {
  queryParams: {},
  responseData: {
    authId: mockAuthId,
    callbacks: [{
      type: 'HiddenValueCallback',
      output: [
        {
          name: 'value',
          value: 'ONBOARDING_ERROR'
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
