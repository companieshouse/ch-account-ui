import React from 'react'
import CHSLogin from '../../../pages/account/chslogin'
import Dynamic from '../../../components/Dynamic'
import componentMap from '../../../services/componentMap'
import { mockAuthId } from '../common-mocks'
import fetchMock from 'fetch-mock'
import { getStageFeatures } from '../../../services/translate'
import HeadingCount from '../../../services/HeadingCount'
import FeatureDynamicView from '../../../components/views/FeatureDynamicView'

export default {
    title: 'Pages/Account/CHSLogin',
    args: {
        lang: 'en'
    }
}

const OIDC = {
    service: 'CHWebFiling',
    authIndexType: 'service',
    authIndexValue: 'CHWebFiling'
}

const uiStage = 'GET_CONSENT'

const uiFeatures = getStageFeatures('en', uiStage)

const Template = (args) => {
    console.log("ARGS: ", args)
    console.log("REQUEST", args.responseData)
    if (args.responseData === undefined) {
      return <FeatureDynamicView><Dynamic {...args} /></FeatureDynamicView>
    }

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

export const CHS_TEST = Template.bind({})
CHS_TEST.args = {
    componentMap: componentMap,
    content: uiFeatures,
    uiStage: uiStage,
    errors: [],
    uiElements: [{
        type: 'NameCallback',
        output: [{ name: 'prompt', value: 'User Name' }],
        input: [{ name: 'IDToken1', value: '' }],
        _id: 0
      }, {
        type: 'PasswordCallback',
        output: [{ name: 'prompt', value: 'Password' }],
        input: [{ name: 'IDToken2', value: '' }],
        _id: 1
      }],
    headingCount: new HeadingCount()
}

export const EWF_LOGIN_1 = Template.bind({})
EWF_LOGIN_1.args = {
  path: 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?authIndexType=service&authIndexValue=CHWebFiling',
  queryParams: OIDC,
  responseData: {
    authId: mockAuthId,
    callbacks: [],
    stage: 'EWF_LOGIN_1',
    header: 'Sign In to WebFiling',
    description: 'New here? <a href="#/service/Registration">Create an account</a><br><a href="#/service/ForgottenUsername">Forgot username?</a><a href="#/service/ResetPassword"> Forgot password?</a>'

  }
}