import React from 'react'
import fetchMock from 'fetch-mock'
import { Login } from '../../pages/account/login'
import { mockAuthId } from './common-mocks'
import { setCallback } from './story-utils'

const path = 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?authIndexType=service&authIndexValue=CHWebFiling-Login'

export default {
  title: 'Pages/Shared',
  args: {
    queryParams: {},
    lang: 'en'
  },
  argTypes: {
    lang: {
      options: ['en', 'cy'],
      control: { type: 'radio' }
    }
  }
}

// eslint-disable-next-line react/prop-types
const Template = ({ pageProps, responseData, ...rest }) => {
  if (pageProps) {
    // eslint-disable-next-line react/prop-types
    setCallback(responseData.callbacks, 'pagePropsJSON', pageProps)
  }
  fetchMock.restore().mock(path, responseData, {
    delay: 100 // fake a slow network
  })
  return <Login {...rest} />
}

export const GENERIC_ERROR = Template.bind({})
const generalErrors = {
  ERROR_UNKNOWN: '{"errors":[{"label":"An error has occurred! Please try again later.","token":"ERROR_UNKNOWN"}]}'
}
GENERIC_ERROR.argTypes = {
  pageProps: {
    options: Object.keys(generalErrors),
    type: 'select',
    mapping: generalErrors
  }
}
GENERIC_ERROR.story = {
  parameters: {
    nextRouter: {
      query: {
        pageStep: '_start'
      }
    }
  }
}
GENERIC_ERROR.args = {
  responseData: {
    authId: mockAuthId,
    callbacks: [{
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

export const LIMIT_EXCEEDED_ERROR = Template.bind({})
const limitExceededErrors = {
  ERROR_UNKNOWN: '{"errors":[{"label":"Exceeded number of attempts, please try again later.,","token":"MAX_ATTEMPTS_EXCEEDED"}]}'
}
LIMIT_EXCEEDED_ERROR.argTypes = {
  pageProps: {
    options: Object.keys(limitExceededErrors),
    type: 'select',
    mapping: generalErrors
  }
}
LIMIT_EXCEEDED_ERROR.story = {
  parameters: {
    nextRouter: {
      query: {
        pageStep: '_start'
      }
    }
  }
}
LIMIT_EXCEEDED_ERROR.args = {
  responseData: {
    authId: mockAuthId,
    callbacks: [{
      type: 'HiddenValueCallback',
      output: [
        {
          name: 'value',
          value: 'LIMIT_EXCEEDED_ERROR'
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

export const NO_SESSION_ERROR = Template.bind({})
NO_SESSION_ERROR.args = {
  responseData: {
    authId: mockAuthId,
    callbacks: [{
      type: 'HiddenValueCallback',
      output: [
        {
          name: 'value',
          value: 'NO_SESSION_ERROR'
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
          value: '{"errors":[{"label":"Exceeded number of attempts, please try again later.,","token":"NO_ACTIVE_SESSION"}]}'
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

export const SEND_MFA_SMS_ERROR = Template.bind({})

SEND_MFA_SMS_ERROR.args = {
  responseData: {
    authId: mockAuthId,
    callbacks: [{
      type: 'HiddenValueCallback',
      output: [
        {
          name: 'value',
          value: 'SEND_MFA_SMS_ERROR'
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
          value: '{"errors":[{"label":"Exceeded number of attempts, please try again later.,","token":"SEND_MFA_SMS_ERROR"}]}'
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

export const PHONE_OTP = Template.bind({})
PHONE_OTP.args = {
  path: 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?authIndexType=service&authIndexValue=CHWebFiling-Login',
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: '{"phoneNumber":"077777777777"}'
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
            value: 'Please check your email'
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
            value: '653a0781-a6ef-43fb-87a0-2014512930ef'
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
        _id: 3
      }
    ],
    stage: 'PHONE_OTP',
    header: 'Please enter your code',
    description: 'Please enter the code you received via SMS'
  }
}

export const EMAIL_CONSENT = Template.bind({})
EMAIL_CONSENT.args = {
  path: 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?ForceAuth=true&authIndexType=service&authIndexValue=CHWebFiling-Login',
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'BooleanAttributeInputCallback',
        output: [
          {
            name: 'name',
            value: 'preferences/updates'
          },
          {
            name: 'prompt',
            value: 'Send me news and updates'
          },
          {
            name: 'required',
            value: false
          },
          {
            name: 'policies',
            value: {}
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
            value: false
          }
        ],
        input: [
          {
            name: 'IDToken1',
            value: false
          },
          {
            name: 'IDToken1validateOnly',
            value: false
          }
        ],
        _id: 0
      },
      {
        type: 'BooleanAttributeInputCallback',
        output: [
          {
            name: 'name',
            value: 'preferences/marketing'
          },
          {
            name: 'prompt',
            value: 'Send me special offers and services'
          },
          {
            name: 'required',
            value: false
          },
          {
            name: 'policies',
            value: {}
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
            value: false
          }
        ],
        input: [
          {
            name: 'IDToken2',
            value: false
          },
          {
            name: 'IDToken2validateOnly',
            value: false
          }
        ],
        _id: 1
      }
    ],
    stage: 'EMAIL_CONSENT',
    header: 'Please enter your email preferences',
    description: 'Please enter your email preferences'
  }
}
