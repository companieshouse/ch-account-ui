import React from 'react'
import fetchMock from 'fetch-mock'
import RemoveAuthorisedPerson from '../../../../pages/account/your-companies/remove-authorised-person'
import { mockAuthId } from '../../common-mocks'

const path = 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?authIndexType=service&authIndexValue=CHRemoveAuthorisedUser'

export default {
  title: 'Pages/Account/YourCompanies/RemoveAuthorisedPerson',
  args: {
    lang: 'en'
  }
}

// eslint-disable-next-line react/prop-types
const Template = (args) => {
  const { responseData, ...rest } = args
  fetchMock.restore().mock(path, responseData, {
    delay: 100 // fake a slow network
  })
  return <RemoveAuthorisedPerson {...rest} />
}

export const REMOVE_AUTHORISED_USER_1 = Template.bind({})
REMOVE_AUTHORISED_USER_1.args = {
  responseData: {
    authId: mockAuthId,
    callbacks: [{
      type: 'TextOutputCallback',
      output: [{
        name: 'message',
        value: 'What are the details of the person you want to authorise to file for this company?'
      }, { name: 'messageType', value: '0' }]
    }, {
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
    },
    {
      type: 'HiddenValueCallback',
      output: [{ name: 'value', value: 'REMOVE_AUTHORISED_USER_1' }, { name: 'id', value: 'stage' }],
      input: [{ name: 'IDToken4', value: 'stage' }]
    }]
  }
}
REMOVE_AUTHORISED_USER_1.story = {
  parameters: {
    nextRouter: {
      query: {
        companyId: '12345678'
      }
    }
  }
}
