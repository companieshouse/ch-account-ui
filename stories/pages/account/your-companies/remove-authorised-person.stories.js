import React from 'react'
import fetchMock from 'fetch-mock'
import { RemoveAuthorisedPerson } from '../../../../pages/account/your-companies/remove-authorised-person'
import { mockAuthId } from '../../common-mocks'

const path = 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?companyNumber=12341234&userId=49f9b653-a542-4e90-9849-0688d768b227&ForceAuth=true&authIndexType=service&authIndexValue=CHRemoveAuthorisedUser'

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

export const REMOVE_USER_CONFIRM = Template.bind({})
REMOVE_USER_CONFIRM.args = {
  queryParams: {
    companyNumber: '12341234',
    userId: '49f9b653-a542-4e90-9849-0688d768b227'
  },
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'TextOutputCallback',
        output: [
          {
            name: 'message',
            value: 'You need to read the info before proceeding. Please confirm you have read the information.'
          },
          {
            name: 'messageType',
            value: '2'
          }
        ]
      },
      {
        type: 'BooleanAttributeInputCallback',
        output: [
          {
            name: 'name',
            value: 'agreement'
          },
          {
            name: 'prompt',
            value: 'I confirm that I have read and understood this information.'
          },
          {
            name: 'required',
            value: true
          },
          {
            name: 'policies',
            value: []
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
            value: 'Do you want to cancel?'
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
            value: 'REMOVE_USER_CONFIRM'
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
            value: '{"errors":[{"label":"You need to read the info before proceeding.","token":"MISSING_CONFIRM_READ_ERROR","fieldName":"IDToken2","anchor":"IDToken2"}],"company":{"number":"08023036","status":"active","authCode":"222222","_rev":"0000000092cdea88","name":"1X100 LIMITED","_id":"0b8640c8-f2d6-47ce-9c5c-75855f93090d","members":[{"_ref":"managed/alpha_user/d3ab53b5-ad67-4ba9-9268-311448bc7af3","_refResourceCollection":"managed/alpha_user","_refResourceId":"d3ab53b5-ad67-4ba9-9268-311448bc7af3","_refProperties":{"_id":"542ce9d8-48c4-4fde-a21f-32243d84cc0b","_rev":"00000000c464c3dc","inviterId":null,"membershipStatus":"confirmed","inviteTimestamp":null}},{"_ref":"managed/alpha_user/945d1e07-a367-4206-b66b-75502acd9faa","_refResourceCollection":"managed/alpha_user","_refResourceId":"945d1e07-a367-4206-b66b-75502acd9faa","_refProperties":{"_id":"8ccea6fb-4fdc-4806-8a38-70a970183e28","_rev":"000000005fd6c0b2","membershipStatus":"confirmed","inviterId":"","inviteTimestamp":""}}]},"userDisplayName":"ravi.kota@amido.com"}'
          },
          {
            name: 'id',
            value: 'pagePropsJSON'
          }
        ],
        input: [
          {
            name: 'IDToken6',
            value: 'pagePropsJSON'
          }
        ]
      }
    ],
    status: 200,
    ok: true,
    stage: 'REMOVE_USER_CONFIRM'
  }
}
