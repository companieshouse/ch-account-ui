import React from 'react'
import CHSLogin from '../../../../pages/account/chslogin'
import Dynamic from '../../../../components/Dynamic'
import componentMap from '../../../../services/componentMap'
import { mockAuthId } from '../../common-mocks'
import fetchMock from 'fetch-mock'
import { getStageFeatures } from '../../../../services/translate'
import HeadingCount from '../../../../services/HeadingCount'
import FeatureDynamicView from '../../../../components/views/FeatureDynamicView'

export default {
    title: 'Pages/Account/CHSLogin',
    args: {
      lang: 'en'
    }
}

const OIDC = {
    service: 'CHLogin',
    authIndexType: 'service',
    authIndexValue: 'CHLogin'
}

const uiStage = 'CH_LOGIN_1'

const uiFeatures = getStageFeatures('en', uiStage)

const Template = (args) => {
    console.log("ARGS: ", args)
    console.log("REQUEST", args.responseData)

    fetchMock.restore()
    fetchMock.mock(args.path, args.responseData, {
      delay: 100 // fake a slow network
    })
    if (args.submitPath) {
      fetchMock.mock(args.submitPath, args.submitResponseData, {
        delay: 100 // fake a slow network
      })
    }
    return <CHSLogin {...args} />
}

export const CHS_LOGIN = Template.bind({})
CHS_LOGIN.args = {
    consent: false,
    queryParams: OIDC,
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