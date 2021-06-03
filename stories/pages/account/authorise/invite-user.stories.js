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
    callbacks: [{
      type: 'HiddenValueCallback',
      output: [{ name: 'value', value: 'INVITE_USER_ERROR' }, { name: 'id', value: 'stage' }],
      input: [{ name: 'IDToken4', value: 'stage' }]
    },
    {
      type: 'HiddenValueCallback',
      output: [
        {
          name: 'value',
          value: '{"errors":[{"label":"No Company Number found in request.","token":"INVITE_USER_NO_COMPANY_IN_REQUEST_ERROR","fieldName":"IDToken1","anchor":"IDToken1"}]}'
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
INVITE_USER_1.story = {
  parameters: {
    nextRouter: {
      query: {
        companyId: '12345678'
      }
    }
  }
}
