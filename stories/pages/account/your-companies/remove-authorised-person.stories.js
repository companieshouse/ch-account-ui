import React from 'react'
import fetchMock from 'fetch-mock'
import { RemoveAuthorisedPerson } from '../../../../pages/account/your-companies/remove-authorised-person'
import { mockAuthId } from '../../common-mocks'

const path = 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?companyNumber=12341234&userId=49f9b653-a542-4e90-9849-0688d768b227&authIndexType=service&authIndexValue=CHRemoveAuthorisedUser '

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
  queryParams: {
    companyNumber: '12341234',
    userId: '49f9b653-a542-4e90-9849-0688d768b227'
  },
  responseData: {
    authId: mockAuthId,
    callbacks: [{
      type: 'TextOutputCallback',
      output: [{
        name: 'message',
        value: 'What are the details of the person you want to authorise to file for this company?'
      }, { name: 'messageType', value: '0' }]
    },
    {
      type: 'HiddenValueCallback',
      output: [
        {
          name: 'value',
          value: '{"invitedUser": {"_id":"97c8a3e6-e226-4549-a66d-1c0d561c982d","_rev":"00000000052ae5dd","_refResourceCollection":"managed/alpha_user","_refResourceId":"43185295-bb40-48f0-90ab-be114b8f4aca","_refResourceRev":"00000000f1720518","userName":"lily.lewis@example.com","givenName": null,"mail":"lily.lewis@example.com","_ref":"managed/alpha_user/43185295-bb40-48f0-90ab-be114b8f4aca","_refProperties":{"inviterId":"08a989a1-7aba-4050-97dd-64b8c7dd3cbc","membershipStatus":"confirmed","inviteTimestamp":"Tue May 25 2021 11:24:06 GMT-0000 (UTC)","_id":"97c8a3e6-e226-4549-a66d-1c0d561c982d","_rev":"00000000052ae5dd"}}, "company":{"_id":"2adbc7e9-7ae3-4a61-8b43-003945e80e96","_rev":"00000000c22701a0","number":"08023036","type":"ltd","status":"active","locality":"London","postalCode":"N11 1GN","addressLine1":"Building 3 North London Business Park","addressLine2":"Oakleigh Road South","region":null,"creationDate":"2012-04-10T00:00:00Z","jurisdiction":"england-wales","adminIDs":[],"ownerIDs":[],"parentAdminIDs":[],"parentIDs":[],"parentOwnerIDs":[],"authCode":"$2a$10$uS7dsFz8iIuNvXQK6dG1v.F//uQajFz0BLc60/B8qrGqsdFrU77MO","authCodeIsActive":true,"name":"1X100 LIMITED"}}'
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
      ]
    },
    {
      type: 'ConfirmationCallback',
      output: [
        {
          name: 'prompt',
          value: 'I confirm that I have read and understood this information.'
        },
        {
          name: 'messageType',
          value: 0
        },
        {
          name: 'options',
          value: [
            'NO',
            'YES'
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
          name: 'IDToken3',
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
