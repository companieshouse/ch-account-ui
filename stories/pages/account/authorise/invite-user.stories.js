import React from 'react'
import fetchMock from 'fetch-mock'
import InviteUser from '../../../../pages/account/authorise/[pageStep]'
import { mockAuthId } from '../../common-mocks'

const path = 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?authIndexType=service&authIndexValue=CHInviteUser'

const defaultResponse = {
  authId: mockAuthId,
  callbacks: [{
    type: 'TextOutputCallback',
    output: [{
      name: 'message',
      value: 'What are the details of the person you want to authorise to file for this company?'
    }, { name: 'messageType', value: '0' }]
  }, {
    type: 'NameCallback',
    output: [{ name: 'prompt', value: 'Full Name' }],
    input: [{ name: 'IDToken2', value: '' }]
  }, {
    type: 'NameCallback',
    output: [{ name: 'prompt', value: 'Email Address' }],
    input: [{ name: 'IDToken3', value: '' }]
  }, {
    type: 'HiddenValueCallback',
    output: [{ name: 'value', value: 'INVITE_USER_1' }, { name: 'id', value: 'stage' }],
    input: [{ name: 'IDToken4', value: 'stage' }]
  }]
}

export default {
  title: 'Pages/Account/Authorise/InviteUser',
  args: {
    lang: 'en'
  }
}

const Template = (args) => {
  const { responseData, ...rest } = args
  fetchMock.restore().mock(path, responseData, {
    delay: 100 // fake a slow network
  })
  return <InviteUser {...rest} />
}

export const INVITE_USER_1 = Template.bind({})
INVITE_USER_1.args = {
  responseData: defaultResponse
}
INVITE_USER_1.story = {
  parameters: {
    nextRouter: {
      query: {
        companyId: '12345678'
      }
    }
  }
}

export const INVITE_USER_ERROR = Template.bind({})
INVITE_USER_ERROR.args = {
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'TextOutputCallback',
        output: [
          {
            name: 'message',
            value: 'The company 00443789 is not active or dormant.'
          },
          {
            name: 'messageType',
            value: '2'
          }
        ]
      },
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: 'INVITE_USER_ERROR'
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
            value: '{"errors":[{"label":"The company 00443789 is not active or dormant.","token":"INVITE_USER_COMPANY_LOOKUP_ERROR"}]}'
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
      }
    ]
  }
}

export const INVITE_USER_CONFIRM = Template.bind({})
INVITE_USER_CONFIRM.story = {
  parameters: {
    nextRouter: {
      query: {
        companyId: '12345678'
      }
    }
  }
}
INVITE_USER_CONFIRM.args = {
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'TextOutputCallback',
        output: [
          {
            name: 'message',
            value: "Check the authorised person's email address before we send the email to a@b.com"
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
            value: "Check the authorised person's email address before we send the email"
          },
          {
            name: 'messageType',
            value: 0
          },
          {
            name: 'options',
            value: [
              'SEND',
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
            value: 'INVITE_USER_CONFIRM'
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
            value: '{\"emailAddress\":\"a@b.com\"}'
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