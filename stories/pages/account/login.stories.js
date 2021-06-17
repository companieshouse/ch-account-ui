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
  path: 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?ForceAuth=true&authIndexType=service&authIndexValue=CHLogin',
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
  path: 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?ForceAuth=true&authIndexType=service&authIndexValue=CHWebFiling',
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

export const EWF_PROFILE = Template.bind({})
EWF_PROFILE.args = {
  path: 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?ForceAuth=true&authIndexType=service&authIndexValue=CHWebFiling',
  queryParams: WFOIDCParams,
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
            value: 'PHONE'
          },
          {
            name: 'id',
            value: 'PHONE'
          }
        ],
        input: [
          {
            name: 'IDToken2',
            value: 'PHONE'
          }
        ]
      },
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: 'IGNOREME'
          },
          {
            name: 'id',
            value: 'IGNOREME'
          }
        ],
        input: [
          {
            name: 'IDToken3',
            value: 'IGNOREME'
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
            value: 'EWF_PROFILE'
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
            value: 0
          }
        ],
        input: [
          {
            name: 'IDToken6',
            value: 0
          }
        ]
      }
    ],
    stage: 'EWF_PROFILE',
    header: 'Sign Up',
    description: "Signing up is fast and easy.<br>Already have an account? <a href='#/service/Login'>Sign In</a>"
  }
}

export const EWF_LOGIN_2 = Template.bind({})
EWF_LOGIN_2.args = {
  path: 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?ForceAuth=true&authIndexType=service&authIndexValue=CHWebFiling',
  queryParams: WFOIDCParams,
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'TextOutputCallback',
        output: [
          {
            name: 'message',
            value: 'Please enter the company number.'
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
            value: 'Where was the company registered?'
          },
          {
            name: 'choices',
            value: [
              'en',
              'sc',
              'ni'
            ]
          },
          {
            name: 'defaultChoice',
            value: 0
          }
        ],
        input: [
          {
            name: 'IDToken2',
            value: 0
          }
        ]
      },
      {
        type: 'NameCallback',
        output: [
          {
            name: 'prompt',
            value: 'Enter Company number'
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
            name: 'IDToken4',
            value: 'stage'
          }
        ]
      }
    ],
    stage: 'EWF_LOGIN_2'
  }
}

export const EWF_LOGIN_2_ERROR = Template.bind({})
EWF_LOGIN_2_ERROR.args = {
  path: 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?ForceAuth=true&authIndexType=service&authIndexValue=CHWebFiling',
  queryParams: WFOIDCParams,
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'TextOutputCallback',
        output: [
          {
            name: 'message',
            value: 'The company 33333 could not be found. Please try again.'
          },
          {
            name: 'messageType',
            value: '2'
          }
        ]
      },
      {
        type: 'ChoiceCallback',
        output: [
          {
            name: 'prompt',
            value: 'Where was the company registered?'
          },
          {
            name: 'choices',
            value: [
              'EW',
              'SC',
              'NI'
            ]
          },
          {
            name: 'defaultChoice',
            value: 0
          }
        ],
        input: [
          {
            name: 'IDToken2',
            value: 0
          }
        ]
      },
      {
        type: 'NameCallback',
        output: [
          {
            name: 'prompt',
            value: 'Enter Company number'
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
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: 'COMPANY_ASSOCIATION_1'
          },
          {
            name: 'id',
            value: 'stage'
          }
        ],
        input: [
          {
            name: 'IDToken4',
            value: 'stage'
          }
        ]
      },
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: '{"errors":[{"label":"The company ${companyNumber} could not be found.","token":"COMPANY_NOT_FOUND","fieldName":"IDToken2","anchor":"IDToken2"}],"company":{"number":"33333"}}'
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
    ],
    stage: 'EWF_LOGIN_2'
  }
}

export const EWF_LOGIN_3 = Template.bind({})
EWF_LOGIN_3.args = {
  path: 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?ForceAuth=true&authIndexType=service&authIndexValue=CHWebFiling',
  queryParams: WFOIDCParams,
  responseData: {
    authId: mockAuthId,
    callbacks: [
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
            value: '{"_id":"6c222b5b-7211-45a6-b4ee-4fe2645ca667","_rev":"00000000f7720165","number":"03550649","type":"private-limited-guarant-nsc","status":"active","locality":null,"postalCode":"W9 3HN","addressLine1":"16 Bradiston Road","addressLine2":"London","region":null,"creationDate":"1998-04-22T00:00:00Z","jurisdiction":"england-wales","adminIDs":[],"ownerIDs":[],"parentAdminIDs":[],"parentIDs":[],"parentOwnerIDs":[],"authCode":"$2a$10$uS7dsFz8iIuNvXQK6dG1v.F//uQajFz0BLc60/B8qrGqsdFrU77MO","authCodeIsActive":true,"name":"16 BRADISTON ROAD LIMITED"}'
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
            value: '{"company":{"_id":"6c222b5b-7211-45a6-b4ee-4fe2645ca667","_rev":"00000000f7720165","number":"03550649","type":"private-limited-guarant-nsc","status":"active","locality":null,"postalCode":"W9 3HN","addressLine1":"16 Bradiston Road","addressLine2":"London","region":null,"creationDate":"1998-04-22T00:00:00Z","jurisdiction":"england-wales","adminIDs":[],"ownerIDs":[],"parentAdminIDs":[],"parentIDs":[],"parentOwnerIDs":[],"authCode":"$2a$10$uS7dsFz8iIuNvXQK6dG1v.F//uQajFz0BLc60/B8qrGqsdFrU77MO","authCodeIsActive":true,"name":"16 BRADISTON ROAD LIMITED"}}'
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
    ]
  }
}

export const EWF_LOGIN_4 = Template.bind({})
EWF_LOGIN_4.args = {
  path: 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?ForceAuth=true&authIndexType=service&authIndexValue=CHWebFiling',
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
            value: '{"company":{"_id":"6c222b5b-7211-45a6-b4ee-4fe2645ca667","_rev":"00000000f7720165","number":"03550649","type":"private-limited-guarant-nsc","status":"active","locality":null,"postalCode":"W9 3HN","addressLine1":"16 Bradiston Road","addressLine2":"London","region":null,"creationDate":"1998-04-22T00:00:00Z","jurisdiction":"england-wales","adminIDs":[],"ownerIDs":[],"parentAdminIDs":[],"parentIDs":[],"parentOwnerIDs":[],"authCode":"$2a$10$uS7dsFz8iIuNvXQK6dG1v.F//uQajFz0BLc60/B8qrGqsdFrU77MO","authCodeIsActive":true,"name":"16 BRADISTON ROAD LIMITED"}}'
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

export const EWF_LOGIN_5 = Template.bind({})
EWF_LOGIN_5.args = {
  path: 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?ForceAuth=true&authIndexType=service&authIndexValue=CHWebFiling',
  queryParams: WFOIDCParams,
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'TextOutputCallback',
        output: [
          {
            name: 'message',
            value: 'Do you want to add this company to your Companies House account?'
          },
          {
            name: 'messageType',
            value: '0'
          }
        ]
      },
      {
        type: 'ConfirmationCallback',
        output: [
          {
            name: 'prompt',
            value: 'Do you want to add this company to your Companies House account?'
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
            name: 'IDToken2',
            value: 0
          }
        ]
      },
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: 'EWF_LOGIN_5'
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
            value: '{"company":{"_id":"6c222b5b-7211-45a6-b4ee-4fe2645ca667","_rev":"00000000f7720165","number":"03550649","type":"private-limited-guarant-nsc","status":"active","locality":null,"postalCode":"W9 3HN","addressLine1":"16 Bradiston Road","addressLine2":"London","region":null,"creationDate":"1998-04-22T00:00:00Z","jurisdiction":"england-wales","adminIDs":[],"ownerIDs":[],"parentAdminIDs":[],"parentIDs":[],"parentOwnerIDs":[],"authCode":"$2a$10$uS7dsFz8iIuNvXQK6dG1v.F//uQajFz0BLc60/B8qrGqsdFrU77MO","authCodeIsActive":true,"name":"16 BRADISTON ROAD LIMITED"}}'
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

export const EWF_LOGIN_OTP_METHOD = Template.bind({})
EWF_LOGIN_OTP_METHOD.args = {
  path: 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?ForceAuth=true&authIndexType=service&authIndexValue=CHWebFiling',
  queryParams: WFOIDCParams,
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
    stage: 'EWF_LOGIN_OTP_METHOD',
    header: "How do you want to confirm it's you?",
    description: "How do you want to confirm it's you?"
  }
}

export const EWF_LOGIN_OTP = Template.bind({})
EWF_LOGIN_OTP.args = {
  path: 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?ForceAuth=true&authIndexType=service&authIndexValue=CHWebFiling',
  queryParams: WFOIDCParams,
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
    stage: 'EWF_LOGIN_OTP',
    header: 'Please enter your code',
    description: 'Please enter the code you received via SMS'
  }
}
