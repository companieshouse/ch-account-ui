import React from 'react'
import CHConsent from '../../../../pages/account/consent'
import { mockAuthId } from '../../common-mocks'
import fetchMock from 'fetch-mock'

export default {
    title: 'Pages/Account/Consent',
    args: {
        lang: 'en'
    }
}

const COIDCParams = {
  service: 'CHConsent',
  authIndexType: 'service',
  authIndexValue: 'CHConsent'
}

const Template = (args) => {
  fetchMock.restore()
  fetchMock.mock(args.path, args.responseData, {
    delay: 100 // fake a slow network
  })
  if (args.submitPath) {
    fetchMock.mock(args.submitPath, args.submitResponseData, {
      delay: 100 // fake a slow network
    })
  }
  return <CHConsent {...args} />
}

export const GET_CONSENT = Template.bind({})
GET_CONSENT.args = {
  consent: true,
  queryParams: COIDCParams,
  responseData: {
    authId: mockAuthId,
    callbacks: [
        {
            type: "TextOutputCallback",
            output: [
                {
                    name: "message",
                    value: "Allow ApiFilingWebClient to do the following:"
                },
                {
                    name: "messageType",
                    value: "0"
                }
            ]
        },
        {
            type: "TextOutputCallback",
            output: [
                {
                    name: "message",
                    value: "- https://api.companieshouse.gov.uk/company/registered-office-address.update"
                },
                {
                    name: "messageType",
                    value: "0"
                }
            ]
        },
        {
            type: "TextOutputCallback",
            output: [
                {
                    name: "message",
                    value: "Info"
                },
                {
                    name: "messageType",
                    value: "0"
                }
            ]
        },
        {
            type: "TextOutputCallback",
            output: [
                {
                    name: "message",
                    value: "- company: 00102498"
                },
                {
                    name: "messageType",
                    value: "0"
                }
            ]
        },
        {
            type: "HiddenValueCallback",
            output: [
                {
                    name: "value",
                    value: "{\"id_token\":\"null\",\"userinfo\":\"null\"}"
                },
                {
                    name: "id",
                    value: "pagePropsJSON"
                }
            ],
            input: [
                {
                    name: "IDToken5"
                }
            ]
        },
        {
            type: "HiddenValueCallback",
            output: [
                {
                    name: "value",
                    value: "GET_CONSENT"
                },
                {
                    name: "id",
                    value: "stage"
                }
            ],
            input: [
                {
                    name: "IDToken6"
                }
            ]
        },
        {
            type: "ConfirmationCallback",
            output: [
                {
                    name: "prompt",
                    value: ""
                },
                {
                    name: "messageType",
                    value: 0
                },
                {
                    name: "options",
                    value: [
                        "Yes",
                        "No"
                    ]
                },
                {
                    name: "optionType",
                    value: -1
                },
                {
                    name: "defaultOption",
                    value: 1
                }
            ],
            input: [
                {
                    name: "IDToken7"
                }
            ]
        }
    ],
    status: 200,
    ok: true,
    stage: 'GET_CONSENT'
}
}

export const CHS_LOGIN = Template.bind({})
CHS_LOGIN.args = {
    consent: false,
    queryParams: {
        authId: 'sldkjfsl'
    },
    responseData: {
        authId: mockAuthId,
        callbacks: [
            {
                type: 'NameCallback',
                output: [
                {
                    name: 'prompt',
                    value: 'User Name'
                }
                ],
                input: [
                {
                    name: 'IDToken1',
                    value: ''
                }
                ],
                _id: 0
            },
            {
                type: 'PasswordCallback',
                output: [
                {
                    name: 'prompt',
                    value: 'Password'
                }
                ],
                input: [
                {
                    name: 'IDToken2',
                    value: ''
                }
                ],
                _id: 1
            }
        ],
        stage: 'CH_LOGIN_1',
    }
}