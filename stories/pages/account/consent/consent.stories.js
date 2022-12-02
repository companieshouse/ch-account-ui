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
            type: 'TextOutputCallback',
            output: [
                {
                    name: 'message',
                    value: 'Allow ApiFilingWebClient to do the following:'
                },
                {
                    name: 'messageType',
                    value: '0'
                }
            ]
        },
        {
            type: 'TextOutputCallback',
            output: [
                {
                    name: 'message',
                    value: '- https://api.companieshouse.gov.uk/company/registered-office-address.update'
                },
                {
                    name: 'messageType',
                    value: '0'
                }
            ]
        },
        {
            type: 'TextOutputCallback',
            output: [
                {
                    name: 'message',
                    value: 'Info'
                },
                {
                    name: 'messageType',
                    value: '0'
                }
            ]
        },
        {
            type: 'TextOutputCallback',
            output: [
                {
                    name: 'message',
                    value: '- company: 00102498'
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
                    value: '{\"company\":\"00102498\",\"scopes\":[\"https://api.companieshouse.gov.uk/company/registered-office-address.update\",\"https://api.companieshouse.gov.uk/company/registered-office-address.update123\"]}'
                },
                {
                    name: 'id',
                    value: 'pagePropsJSON'
                }
            ],
            input: [
                {
                    name: 'IDToken5'
                }
            ]
        },
        {
            type: 'HiddenValueCallback',
            output: [
                {
                    name: 'value',
                    value: 'GET_CONSENT'
                },
                {
                    name: 'id',
                    value: 'stage'
                }
            ],
            input: [
                {
                    name: 'IDToken6'
                }
            ]
        },
        {
            type: 'ConfirmationCallback',
            output: [
                {
                    name: 'prompt',
                    value: ''
                },
                {
                    name: 'messageType',
                    value: 0
                },
                {
                    name: 'options',
                    value: [
                        'Yes',
                        'No'
                    ]
                },
                {
                    name: 'optionType',
                    value: -1
                },
                {
                    name: 'defaultOption',
                    value: 1
                }
            ],
            input: [
                {
                    name: 'IDToken7'
                }
            ]
        }
    ],
    status: 200,
    ok: true,
    stage: 'GET_CONSENT'
}
}

export const CONSENT_FINISH = Template.bind({})
CONSENT_FINISH.args = {
  queryParams: COIDCParams,
  responseData: {
      authId: mockAuthId,
      callbacks: [
          {
              type: "TextOutputCallback",
              output: [
                  {
                      name: "message",
                      value: "{\"successUrl\":\"https://idam-ui.amido.aws.chdev.org/account/chslogin/?goto=https%3A%2F%2Fidam.amido.aws.chdev.org%3A443%2Fam%2Foauth2%2Fauthorize%3Fresponse_type%3Dcode%26client_id%3DApiFilingWebClient%26redirect_uri%3Dhttp%3A%2F%2Flocalhost%3A8090%2Fredirect%26scope%3Dhttps%3A%2F%2Fapi.companieshouse.gov.uk%2Fcompany%2Fregistered-office-address.update%26claims%3D%257B%2522userinfo%2522%3A%257B%2522company%2522%3A%257B%2522value%2522%3A%252200102498%2522%257D%257D%2C%2522id_token%2522%3A%257B%2522company%2522%3A%257B%2522value%2522%3A%252200102498%2522%257D%257D%257D%26acr%3Dchs%26acr_sig%3D-GLbSR4PMwnA6W2zFMYpw7C291edgF76IdBzN3s3xCE%26prompt%3D&realm=/alpha&service=CHLogin&authIndexType=service&authIndexValue=CHLogin&mode=AUTHN_ONLY\"}"
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
                      value: "CONSENT_FINISH"
                  },
                  {
                      name: "id",
                      value: "stage"
                  }
              ],
              input: [
                  {
                      name: "IDToken2",
                      value: "stage"
                  }
              ]
          },
          {
              type: "HiddenValueCallback",
              output: [
                  {
                      name: "value",
                      value: "{\"successUrl\":\"https://idam-ui.amido.aws.chdev.org/account/chslogin/?goto=https%3A%2F%2Fidam.amido.aws.chdev.org%3A443%2Fam%2Foauth2%2Fauthorize%3Fresponse_type%3Dcode%26client_id%3DApiFilingWebClient%26redirect_uri%3Dhttp%3A%2F%2Flocalhost%3A8090%2Fredirect%26scope%3Dhttps%3A%2F%2Fapi.companieshouse.gov.uk%2Fcompany%2Fregistered-office-address.update%26claims%3D%257B%2522userinfo%2522%3A%257B%2522company%2522%3A%257B%2522value%2522%3A%252200102498%2522%257D%257D%2C%2522id_token%2522%3A%257B%2522company%2522%3A%257B%2522value%2522%3A%252200102498%2522%257D%257D%257D%26acr%3Dchs%26acr_sig%3D-GLbSR4PMwnA6W2zFMYpw7C291edgF76IdBzN3s3xCE%26prompt%3D&realm=/alpha&service=CHLogin&authIndexType=service&authIndexValue=CHLogin&mode=AUTHN_ONLY\"}"
                  },
                  {
                      name: "id",
                      value: "pagePropsJSON"
                  }
              ],
              input: [
                  {
                      name: "IDToken3",
                      value: "pagePropsJSON"
                  }
              ]
          }
      ]
  }
}