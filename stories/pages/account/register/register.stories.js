import React from 'react'
import fetchMock from 'fetch-mock'
import { Register } from '../../../../pages/account/register/[pageStep]'
import { mockAuthId } from '../../common-mocks'
import { setCallback } from '../../story-utils'

const path = 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?authIndexType=service&authIndexValue=CHRegistration'

export default {
  title: 'Pages/Account/Register',
  args: {
    lang: 'en'
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
  return <Register {...rest} />
}

export const REGISTRATION_1 = Template.bind({})
REGISTRATION_1.story = {
  parameters: {
    nextRouter: {
      query: {
        pageStep: '_start'
      }
    }
  }
}
REGISTRATION_1.args = {
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'StringAttributeInputCallback',
        output: [
          {
            name: 'name',
            value: 'givenName'
          },
          {
            name: 'prompt',
            value: 'Full Name (optional)'
          },
          {
            name: 'required',
            value: false
          },
          {
            name: 'policies',
            value: {
              policyRequirements: [
                'VALID_TYPE'
              ],
              fallbackPolicies: null,
              name: 'givenName',
              policies: [
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
      },
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
            name: 'IDToken2',
            value: ''
          },
          {
            name: 'IDToken2validateOnly',
            value: false
          }
        ],
        _id: 1
      },
      {
        type: 'StringAttributeInputCallback',
        output: [
          {
            name: 'name',
            value: 'telephoneNumber'
          },
          {
            name: 'prompt',
            value: 'Mobile Number (optional)'
          },
          {
            name: 'required',
            value: false
          },
          {
            name: 'policies',
            value: {
              policyRequirements: [
                'MATCH_REGEXP',
                'VALID_TYPE'
              ],
              fallbackPolicies: null,
              name: 'telephoneNumber',
              policies: [
                {
                  policyRequirements: [
                    'MATCH_REGEXP'
                  ],
                  policyId: 'regexpMatches',
                  params: {
                    regexp: '^\\+?([0-9\\- \\(\\)])*$'
                  }
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
            name: 'IDToken3',
            value: ''
          },
          {
            name: 'IDToken3validateOnly',
            value: false
          }
        ],
        _id: 2
      }
    ],
    stage: 'REGISTRATION_1',
    header: 'Sign Up',
    description: "Signing up is fast and easy.<br>Already have an account? <a href='#/service/Login'>Sign In</a>"
  }
}

export const REGISTRATION_3 = Template.bind({})
REGISTRATION_3.story = {
  parameters: {
    nextRouter: {
      query: {
        pageStep: '_start'
      }
    }
  }
}
REGISTRATION_3.args = {
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'TextOutputCallback',
        output: [
          {
            name: 'message',
            value: 'Please check your email to complete registration - oliver.evans@example.com'
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
            value: 'REGISTRATION_3'
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
      },
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: '{"email":"oliver.evans@example.com", "resend":"true"}'
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
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: '512f2ebf-c7cd-451e-a0b0-4c908b018782'
          },
          {
            name: 'id',
            value: 'notificationId'
          }
        ],
        input: [
          {
            name: 'IDToken4',
            value: 'notificationId'
          }
        ]
      }
    ]
  }
}

export const REGISTRATION_4 = Template.bind({})
REGISTRATION_4.story = {
  parameters: {
    nextRouter: {
      query: {
        pageStep: '_start'
      }
    }
  }
}
REGISTRATION_4.args = {
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'TextOutputCallback',
        output: [
          {
            name: 'message',
            value: 'Please create new password for user sparr@companieshouse.gov.uk'
          },
          {
            name: 'messageType',
            value: '0'
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
            name: 'IDToken2',
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
            value: 'REGISTRATION_4'
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
            value: '{"company":{"name":null},"user":{"userName":"sparr@companieshouse.gov.uk"}}'
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
    stage: 'REGISTRATION_4',
    header: 'Enter your password',
    description: 'Please enter your account password'
  }
}

export const REGISTRATION_RESEND = Template.bind({})
REGISTRATION_RESEND.story = {
  parameters: {
    nextRouter: {
      query: {
        pageStep: 'resend' // this may require the _
      }
    }
  }
}
REGISTRATION_RESEND.args = {
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'TextOutputCallback',
          output: [
              {
                  name: 'message',
                  value: 'Do you want to resend the email to pspence@companieshouse.gov.uk?'
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
                  value: 'Do you want to resend email or change address?'
              },
              {
                  name: 'messageType',
                  value: 0
              },
              {
                  name: 'options',
                  value: [
                      'RESEND',
                      'CHANGE_EMAIL'
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
                  value: 'REGISTRATION_RESEND'
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
                  value: '{"emailAddress":"pspence@companieshouse.gov.uk"}'
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

export const REGISTRATION_MFA = Template.bind({})
REGISTRATION_MFA.story = {
  parameters: {
    nextRouter: {
      query: {
        pageStep: '_start'
      }
    }
  }
}
REGISTRATION_MFA.args = {
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: '{"phoneNumber":"07736831354"}'
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
        _id: 3
      },
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: 'b094568f-0f21-426e-b9a6-5c4a0f5f5882'
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
        _id: 4
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
        _id: 5
      }
    ],
    stage: 'REGISTRATION_MFA',
    header: 'Please enter your code',
    description: 'Please enter the code you received via SMS'
  }
}

export const REGISTRATION_ERROR = Template.bind({})

const registrationsErrors = {
  REGISTRATION_GENERAL_ERROR: '{"errors":[{"label":"An error has occurred! Please try again later.","token":"REGISTRATION_GENERAL_ERROR"}]}',
  REGISTRATION_SEND_EMAIL_ERROR: '{"errors":[{"label":"An error occurred while sending the email. Please try again later.","token":"REGISTRATION_SEND_EMAIL_ERROR"}]}',
  REGISTRATION_TOKEN_PARSING_ERROR: '{"errors":[{"label":"An error occurred while parsing the token. Please try again.","token":"REGISTRATION_TOKEN_PARSING_ERROR"}]}',
  REGISTRATION_NO_TOKEN_ERROR: '{"errors":[{"label":"No Registration Token found in request.","token":"REGISTRATION_NO_TOKEN_ERROR"}]}',
  REGISTRATION_ERROR_TOKEN_EXPIRED: '{"errors":[{"label":"The registration token has expired. Please restart the registration process.","token":"REGISTRATION_ERROR_TOKEN_EXPIRED"}]}',
  REGISTRATION_ERROR_USER_ALREADY_EXIST: '{"errors":[{"label":"Registration Failed: a user with this email already exists","token":"REGISTRATION_ERROR_USER_ALREADY_EXIST"}]}',
  REGISTRATION_ERROR_JWT_TYPE_UNKNOWN: '{"errors":[{"label":"Registration Failed: a user with this email already exists","token":"REGISTRATION_ERROR_JWT_TYPE_UNKNOWN"}]}',
  REGISTRATION_TOKEN_ISSUED_IN_FUTURE: '{"errors":[{"label":"Registration Failed: a user with this email already exists","token":"REGISTRATION_TOKEN_ISSUED_IN_FUTURE"}]}',
  REGISTRATION_ERROR_TOKEN_ISSUER_MISMATCH: '{"errors":[{"label":"Registration Failed: a user with this email already exists","token":"REGISTRATION_ERROR_TOKEN_ISSUER_MISMATCH"}]}'
}

REGISTRATION_ERROR.argTypes = {
  pageProps: {
    options: Object.keys(registrationsErrors),
    type: 'select',
    mapping: registrationsErrors
  }
}
REGISTRATION_ERROR.story = {
  parameters: {
    nextRouter: {
      query: {
        pageStep: '_start'
      }
    }
  }
}
REGISTRATION_ERROR.args = {
  responseData: {
    authId: mockAuthId,
    callbacks: [{
      type: 'HiddenValueCallback',
      output: [
        {
          name: 'value',
          value: 'REGISTRATION_ERROR'
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
