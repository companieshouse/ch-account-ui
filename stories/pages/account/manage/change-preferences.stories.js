// eslint-disable-next-line react/prop-types
import fetchMock from 'fetch-mock'
import { mockAuthId } from '../../common-mocks'
import ChangePreferences from '../../../../pages/account/manage/change-preferences/[pageStep]'
import React from 'react'

export default {
  title: 'Pages/Account/Manage/ChangePreferences',
  args: {
    lang: 'en'
  }
}

const path = 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?ForceAuth=true&action=changeUpdates&authIndexType=service&authIndexValue=CHManageEmailConsent'

const Template = ({ responseData, ...rest }) => {
  fetchMock.restore().mock(path, responseData, {
    delay: 100 // fake a slow network
  })
  return <ChangePreferences {...rest} />
}

export const CHANGE_CONSENT_UPDATES = Template.bind({})
CHANGE_CONSENT_UPDATES.story = {
  parameters: {
    nextRouter: {
      query: {
        action: 'changeUpdates',
        pageStep: '_start'
      }
    }
  }
}
CHANGE_CONSENT_UPDATES.args = {
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'TextOutputCallback',
        output: [
          {
            name: 'message',
            value: 'Receive email updates?'
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
            value: 'Receive email updates?'
          },
          {
            name: 'choices',
            value: [
              'YES',
              'NO'
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
        type: 'TextOutputCallback',
        output: [
          {
            name: 'message',
            value: 'Do you want to cancel?'
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
            value: 'Do you want to confirm the changes?'
          },
          {
            name: 'messageType',
            value: 0
          },
          {
            name: 'options',
            value: [
              'SUBMIT',
              'CANCEL'
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
      },
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: 'CHANGE_CONSENT_UPDATES'
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
