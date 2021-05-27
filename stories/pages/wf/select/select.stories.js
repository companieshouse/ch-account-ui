import React from 'react'
import fetchMock from 'fetch-mock'
import AssociateUserAndWebFilingCompany from '../../../../pages/wf/select/[pageStep]'
import { mockAuthId } from '../../util'

const path = 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?authIndexType=service&authIndexValue=WFCompanySelection'

export default {
  title: 'Pages/WebFiling/SelectCompany ',
  args: {
    lang: 'en'
  },
  parameters: {
    nextRouter: {
      query: {
        pageStep: '_start'
      }
    }
  }
}

const Template = (args) => {
  fetchMock.restore().mock(path, args.responseData, {
    delay: 100 // fake a slow network
  })
  return <AssociateUserAndWebFilingCompany {...args} />
}

export const WF_COMPANY_SELECTION_1 = Template.bind({})
WF_COMPANY_SELECTION_1.args = {
  responseData: {
    authId: mockAuthId,
    callbacks: [{
      type: 'NameCallback',
      output: [{ name: 'prompt', value: 'User Name' }],
      input: [{ name: 'IDToken2', value: '' }],
      _id: 0
    }],
    stage: 'WF_COMPANY_SELECTION_1',
    header: 'Sign In'
  }
}

export const WF_COMPANY_SELECTION_2 = Template.bind({})
WF_COMPANY_SELECTION_2.args = {
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: 'WF_COMPANY_SELECTION_2'
          },
          {
            name: 'id',
            value: 'stage'
          }
        ],
        input: [
          {
            name: 'IDToken1',
            value: 'stage'
          }
        ]
      },
      {
        type: 'TextOutputCallback',
        output: [
          {
            name: 'message',
            value: '{"_id":"2adbc7e9-7ae3-4a61-8b43-003945e80e96","_rev":"00000000c22701a0","number":"08023036","type":"ltd","status":"active","locality":"London","postalCode":"N11 1GN","addressLine1":"Building 3 North London Business Park","addressLine2":"Oakleigh Road South","region":null,"creationDate":"2012-04-10T00:00:00Z","jurisdiction":"england-wales","adminIDs":[],"ownerIDs":[],"parentAdminIDs":[],"parentIDs":[],"parentOwnerIDs":[],"authCode":"$2a$10$uS7dsFz8iIuNvXQK6dG1v.F//uQajFz0BLc60/B8qrGqsdFrU77MO","authCodeIsActive":true,"name":"1X100 LIMITED"}'
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
            value: '{"company":{"_id":"2adbc7e9-7ae3-4a61-8b43-003945e80e96","_rev":"00000000c22701a0","number":"08023036","type":"ltd","status":"active","locality":"London","postalCode":"N11 1GN","addressLine1":"Building 3 North London Business Park","addressLine2":"Oakleigh Road South","region":null,"creationDate":"2012-04-10T00:00:00Z","jurisdiction":"england-wales","adminIDs":[],"ownerIDs":[],"parentAdminIDs":[],"parentIDs":[],"parentOwnerIDs":[],"authCode":"$2a$10$uS7dsFz8iIuNvXQK6dG1v.F//uQajFz0BLc60/B8qrGqsdFrU77MO","authCodeIsActive":true,"name":"1X100 LIMITED"}}'
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
        type: 'ConfirmationCallback',
        output: [
          {
            name: 'prompt',
            value: 'Do you want to file for this company?'
          },
          {
            name: 'messageType',
            value: 0
          },
          {
            name: 'options',
            value: [
              'YES',
              'NO'
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
      }
    ],
    stage: 'WF_COMPANY_SELECTION_2'
  }
}

export const WF_COMPANY_SELECTION_3 = Template.bind({})
WF_COMPANY_SELECTION_3.args = {
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'TextOutputCallback',
        output: [
          {
            name: 'message',
            value: 'Please enter the company auth code.'
          },
          {
            name: 'messageType',
            value: '0'
          }
        ]
      },
      {
        type: 'NameCallback',
        output: [
          {
            name: 'prompt',
            value: 'Enter Auth Code'
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
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: 'WF_COMPANY_SELECTION_3'
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
            value: '{"company":{"_id":"2adbc7e9-7ae3-4a61-8b43-003945e80e96","_rev":"00000000c22701a0","number":"08023036","type":"ltd","status":"active","locality":"London","postalCode":"N11 1GN","addressLine1":"Building 3 North London Business Park","addressLine2":"Oakleigh Road South","region":null,"creationDate":"2012-04-10T00:00:00Z","jurisdiction":"england-wales","adminIDs":[],"ownerIDs":[],"parentAdminIDs":[],"parentIDs":[],"parentOwnerIDs":[],"authCode":"$2a$10$uS7dsFz8iIuNvXQK6dG1v.F//uQajFz0BLc60/B8qrGqsdFrU77MO","authCodeIsActive":true,"name":"1X100 LIMITED"}}'
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

export const WF_COMPANY_SELECTION_4 = Template.bind({})
WF_COMPANY_SELECTION_4.args = {
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'TextOutputCallback',
        output: [
          {
            name: 'message',
            value: 'Please enter the company auth code.'
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
            value: 'Do you wanto your Companies House account?'
          },
          {
            name: 'choices',
            value: [
              'Yes',
              'No'
            ]
          },
          {
            name: 'defaultChoice',
            value: 1
          }
        ],
        input: [
          {
            name: 'IDToken1',
            value: 0
          }
        ]
      },
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: 'WF_COMPANY_SELECTION_4'
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
            value: '{"company":{"_id":"2adbc7e9-7ae3-4a61-8b43-003945e80e96","_rev":"00000000c22701a0","number":"08023036","type":"ltd","status":"active","locality":"London","postalCode":"N11 1GN","addressLine1":"Building 3 North London Business Park","addressLine2":"Oakleigh Road South","region":null,"creationDate":"2012-04-10T00:00:00Z","jurisdiction":"england-wales","adminIDs":[],"ownerIDs":[],"parentAdminIDs":[],"parentIDs":[],"parentOwnerIDs":[],"authCode":"$2a$10$uS7dsFz8iIuNvXQK6dG1v.F//uQajFz0BLc60/B8qrGqsdFrU77MO","authCodeIsActive":true,"name":"1X100 LIMITED"}}'
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
