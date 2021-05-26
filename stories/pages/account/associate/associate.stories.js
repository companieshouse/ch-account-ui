import React from 'react'
import fetchMock from 'fetch-mock'
import AssociateUserAndCompany from '../../../../pages/account/associate/[pageStep]'
import { mockAuthId } from '../../common-mocks'
import { INVITE_USER_1 } from '../authorise/invite-user.stories'

export default {
  title: 'Pages/Account/Associate/CompanyAssociation',
  args: {
    lang: 'en'
  }
}

const Template = (args) => {
  const { path, responseData, ...rest } = args
  fetchMock.restore().mock(args.path, args.responseData, {
    delay: 100
  })
  return <AssociateUserAndCompany {...rest} />
}

export const COMPANY_ASSOCIATION_1 = Template.bind({})
COMPANY_ASSOCIATION_1.story = {
  parameters: {
    nextRouter: {
      query: {
        pageStep: '_start'
      }
    }
  }
}
COMPANY_ASSOCIATION_1.args = {
  path: 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?authIndexType=service&authIndexValue=CHCompanyAssociation',
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'TextOutputCallback',
        output: [
          {
            name: 'message',
            value: 'Please enter the company number.'
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
            value: 'Enter Company number'
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
            value: 'COMPANY_ASSOCIATION_1'
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
      }
    ]
  }
}

export const COMPANY_ASSOCIATION_2 = Template.bind({})
COMPANY_ASSOCIATION_2.story = {
  parameters: {
    nextRouter: {
      query: {
        pageStep: '_start'
      }
    }
  }
}
COMPANY_ASSOCIATION_2.args = {
  path: 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?authIndexType=service&authIndexValue=CHCompanyAssociation',
  responseData: {
    authId: mockAuthId,
    callbacks: [
      {
        type: 'HiddenValueCallback',
        output: [
          {
            name: 'value',
            value: 'COMPANY_ASSOCIATION_2'
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
    ]
  }
}
