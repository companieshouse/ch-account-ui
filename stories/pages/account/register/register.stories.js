import React from 'react'
import fetchMock from 'fetch-mock'
import Regsiter from '../../../../pages/account/register/[pageStep]'
import { mockAuthId } from '../../common-mocks'

const path = 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?authIndexType=service&authIndexValue=CHRegistration'

export default {
  title: 'Pages/Account/Register',
  args: {
    lang: 'en'
  }
}

const Template = (args) => {
  fetchMock.restore().mock(path, args.responseData, {
    delay: 100 // fake a slow network
  })
  return <Regsiter {...args} />
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
            value: '{"email":"oliver.evans@example.com"}'
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

export const REGISTRATION_ERROR = Template.bind({})
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
    callbacks: [
      {
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
      },
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: '{"errors":[{"label":"Unknown error occurred","token":"REGISTRATION_GENERAL_ERROR","fieldName":"IDToken1","anchor":"IDToken1"}]}'
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
