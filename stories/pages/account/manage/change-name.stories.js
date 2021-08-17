// eslint-disable-next-line react/prop-types
import fetchMock from 'fetch-mock'
import { mockAuthId } from '../../common-mocks'
import { ChangeName } from '../../../../pages/account/manage/change-name/[pageStep]'
import React from 'react'

export default {
  title: 'Pages/Account/Manage/ChangeName',
  args: {
    lang: 'en'
  }
}

const path = 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?authIndexType=service&authIndexValue=CHChangeName'

const Template = ({ responseData, ...rest }) => {
  fetchMock.restore().mock(path, responseData, {
    delay: 100 // fake a slow network
  })
  return <ChangeName {...rest} />
}

export const CHANGE_NAME_1 = Template.bind({})
CHANGE_NAME_1.story = {
  parameters: {
    nextRouter: {
      query: {
        action: 'changeUpdates',
        pageStep: '_start'
      }
    }
  }
}
CHANGE_NAME_1.args = {
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: 'CHANGE_NAME_1'
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
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: 'true'
          },
          {
            name: 'id',
            value: 'currentValue'
          }
        ],
        input: [
          {
            name: 'IDToken6',
            value: 'currentValue'
          }
        ]
      }
    ]
  }
}
