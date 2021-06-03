import React from 'react'
import fetchMock from 'fetch-mock'
import { Login } from '../../../pages/account/login'
import { mockAuthId } from '../common-mocks'

export default {
  title: 'Pages/Account/Login',
  args: {
    lang: 'en'
  }
}

const WFOIDCParams = {
  service: 'CHWebFiling',
  authIndexType: 'service',
  authIndexValue: 'CHWebFiling'
}

const Template = (args) => {
  fetchMock.restore().mock(args.path, args.responseData, {
    delay: 100 // fake a slow network
  })
  return <Login {...args} />
}

export const CH_LOGIN_1 = Template.bind({})
CH_LOGIN_1.args = {
  queryParams: {},
  path: 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?authIndexType=service&authIndexValue=CHLogin',
  responseData: {
    authId: mockAuthId,
    callbacks: [{
      type: 'NameCallback',
      output: [{ name: 'prompt', value: 'User Name' }],
      input: [{ name: 'IDToken1', value: '' }],
      _id: 0
    }, {
      type: 'PasswordCallback',
      output: [{ name: 'prompt', value: 'Password' }],
      input: [{ name: 'IDToken2', value: '' }],
      _id: 1
    }],
    stage: 'CH_LOGIN_1',
    header: 'Sign In',
    description: 'New here? <a href="#/service/Registration">Create an account</a><br><a href="#/service/ForgottenUsername">Forgot username?</a><a href="#/service/ResetPassword"> Forgot password?</a>'
  },
  label: 'Button'
}

export const EWF_LOGIN_1 = Template.bind({})
EWF_LOGIN_1.args = {
  path: 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?authIndexType=service&authIndexValue=CHWebFiling',
  queryParams: WFOIDCParams,
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'NameCallback',
        output: [
          {
            name: 'prompt',
            value: 'User Name'
          }
        ],
        input: [
          {
            name: 'IDToken1',
            value: ''
          }
        ],
        _id: 0
      },
      {
        type: 'PasswordCallback',
        output: [
          {
            name: 'prompt',
            value: 'Password'
          }
        ],
        input: [
          {
            name: 'IDToken2',
            value: ''
          }
        ],
        _id: 1
      }
    ],
    stage: 'EWF_LOGIN_1',
    header: 'Sign In to WebFiling',
    description: 'New here? <a href="#/service/Registration">Create an account</a><br><a href="#/service/ForgottenUsername">Forgot username?</a><a href="#/service/ResetPassword"> Forgot password?</a>'

  }
}

export const EWF_LOGIN_2 = Template.bind({})
EWF_LOGIN_2.args = {
  path: 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?authIndexType=service&authIndexValue=CHWebFiling',
  queryParams: WFOIDCParams,
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: 'EWF_LOGIN_2'
          },
          {
            name: 'id',
            value: 'stage'
          }
        ],
        input: [
          {
            name: 'IDToken1',
            value: 'stage'
          }
        ]
      },
      {
        type: 'TextOutputCallback',
        output: [
          {
            name: 'message',
            value: '{"_id":"2adbc7e9-7ae3-4a61-8b43-003945e80e96","_rev":"00000000c22701a0","number":"08023036","type":"ltd","status":"active","locality":"London","postalCode":"N11 1GN","addressLine1":"Building 3 North London Business Park","addressLine2":"Oakleigh Road South","region":null,"creationDate":"2012-04-10T00:00:00Z","jurisdiction":"england-wales","adminIDs":[],"ownerIDs":[],"parentAdminIDs":[],"parentIDs":[],"parentOwnerIDs":[],"authCode":"$2a$10$uS7dsFz8iIuNvXQK6dG1v.F//uQajFz0BLc60/B8qrGqsdFrU77MO","authCodeIsActive":true,"name":"1X100 LIMITED"}'
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
            value: '{"company":{"_id":"2adbc7e9-7ae3-4a61-8b43-003945e80e96","_rev":"00000000c22701a0","number":"08023036","type":"ltd","status":"active","locality":"London","postalCode":"N11 1GN","addressLine1":"Building 3 North London Business Park","addressLine2":"Oakleigh Road South","region":null,"creationDate":"2012-04-10T00:00:00Z","jurisdiction":"england-wales","adminIDs":[],"ownerIDs":[],"parentAdminIDs":[],"parentIDs":[],"parentOwnerIDs":[],"authCode":"$2a$10$uS7dsFz8iIuNvXQK6dG1v.F//uQajFz0BLc60/B8qrGqsdFrU77MO","authCodeIsActive":true,"name":"1X100 LIMITED"}}'
          },
          {
            name: 'id',
            value: 'pagePropsJSON'
          }
        ],
        input: [
          {
            name: 'IDToken3',
            value: 'pagePropsJSON'
          }
        ]
      },
      {
        type: 'ConfirmationCallback',
        output: [
          {
            name: 'prompt',
            value: 'Do you want to file for this company?'
          },
          {
            name: 'messageType',
            value: 0
          },
          {
            name: 'options',
            value: [
              'YES',
              'NO'
            ]
          },
          {
            name: 'optionType',
            value: -1
          },
          {
            name: 'defaultOption',
            value: 0
          }
        ],
        input: [
          {
            name: 'IDToken4',
            value: 0
          }
        ]
      }
    ],
    stage: 'EWF_LOGIN_2'
  }
}

export const EWF_LOGIN_3 = Template.bind({})
EWF_LOGIN_3.args = {
  path: 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?authIndexType=service&authIndexValue=CHWebFiling',
  queryParams: WFOIDCParams,
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'TextOutputCallback',
        output: [
          {
            name: 'message',
            value: 'Please enter the company auth code.'
          },
          {
            name: 'messageType',
            value: '0'
          }
        ]
      },
      {
        type: 'NameCallback',
        output: [
          {
            name: 'prompt',
            value: 'Enter Auth Code'
          }
        ],
        input: [
          {
            name: 'IDToken2',
            value: ''
          }
        ]
      },
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: 'EWF_LOGIN_3'
          },
          {
            name: 'id',
            value: 'stage'
          }
        ],
        input: [
          {
            name: 'IDToken3',
            value: 'stage'
          }
        ]
      },
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: '{"company":{"_id":"2adbc7e9-7ae3-4a61-8b43-003945e80e96","_rev":"00000000c22701a0","number":"08023036","type":"ltd","status":"active","locality":"London","postalCode":"N11 1GN","addressLine1":"Building 3 North London Business Park","addressLine2":"Oakleigh Road South","region":null,"creationDate":"2012-04-10T00:00:00Z","jurisdiction":"england-wales","adminIDs":[],"ownerIDs":[],"parentAdminIDs":[],"parentIDs":[],"parentOwnerIDs":[],"authCode":"$2a$10$uS7dsFz8iIuNvXQK6dG1v.F//uQajFz0BLc60/B8qrGqsdFrU77MO","authCodeIsActive":true,"name":"1X100 LIMITED"}}'
          },
          {
            name: 'id',
            value: 'pagePropsJSON'
          }
        ],
        input: [
          {
            name: 'IDToken4',
            value: 'pagePropsJSON'
          }
        ]
      }
    ]
  }
}

export const EWF_LOGIN_4 = Template.bind({})
EWF_LOGIN_4.args = {
  path: 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?authIndexType=service&authIndexValue=CHWebFiling',
  queryParams: WFOIDCParams,
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'TextOutputCallback',
        output: [
          {
            name: 'message',
            value: 'Please enter the company auth code.'
          },
          {
            name: 'messageType',
            value: '0'
          }
        ]
      },
      {
        type: 'ChoiceCallback',
        output: [
          {
            name: 'prompt',
            value: 'Do you wan to your Companies House account?'
          },
          {
            name: 'choices',
            value: [
              'Yes',
              'No'
            ]
          },
          {
            name: 'defaultChoice',
            value: 1
          }
        ],
        input: [
          {
            name: 'IDToken1',
            value: 0
          }
        ]
      },
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: 'EWF_LOGIN_4'
          },
          {
            name: 'id',
            value: 'stage'
          }
        ],
        input: [
          {
            name: 'IDToken3',
            value: 'stage'
          }
        ]
      },
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: '{"company":{"_id":"2adbc7e9-7ae3-4a61-8b43-003945e80e96","_rev":"00000000c22701a0","number":"08023036","type":"ltd","status":"active","locality":"London","postalCode":"N11 1GN","addressLine1":"Building 3 North London Business Park","addressLine2":"Oakleigh Road South","region":null,"creationDate":"2012-04-10T00:00:00Z","jurisdiction":"england-wales","adminIDs":[],"ownerIDs":[],"parentAdminIDs":[],"parentIDs":[],"parentOwnerIDs":[],"authCode":"$2a$10$uS7dsFz8iIuNvXQK6dG1v.F//uQajFz0BLc60/B8qrGqsdFrU77MO","authCodeIsActive":true,"name":"1X100 LIMITED"}}'
          },
          {
            name: 'id',
            value: 'pagePropsJSON'
          }
        ],
        input: [
          {
            name: 'IDToken4',
            value: 'pagePropsJSON'
          }
        ]
      }
    ]
  }
}

export const GENERIC_ERROR = Template.bind({})
GENERIC_ERROR.args = {
  queryParams: {},
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: 'GENERIC_ERROR'
          },
          {
            name: 'id',
            value: 'stage'
          }
        ],
        input: [
          {
            name: 'IDToken3',
            value: 'stage'
          }
        ]
      },
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: '{"errors":[{"label":"Unknown error occurred","token":"ERROR_UNKNOWN","fieldName":"IDToken1","anchor":"IDToken1"}]}'
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
      }
    ]
  }
}
