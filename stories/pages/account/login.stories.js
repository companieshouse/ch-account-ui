import React from 'react'
import fetchMock from 'fetch-mock'
import Login from '../../../pages/account/login'
import { mockAuthId } from '../common-mocks'

const path = 'https://idam.amido.aws.chdev.org/am/json/realms/root/realms/alpha/authenticate?authIndexType=service&authIndexValue=CHLogin'

export default {
  title: 'Pages/Account/Login',
  args: {
    lang: 'en'
  }
}

const Template = (args) => {
  fetchMock.restore().mock(path, args.responseData, {
    delay: 100 // fake a slow network
  })
  return <Login {...args} />
}

export const CH_LOGIN_1 = Template.bind({})
CH_LOGIN_1.args = {
  responseData: {
    authId: mockAuthId,
    callbacks: [{
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
    stage: 'CH_LOGIN_1',
    header: 'Sign In',
    description: 'New here? <a href="#/service/Registration">Create an account</a><br><a href="#/service/ForgottenUsername">Forgot username?</a><a href="#/service/ResetPassword"> Forgot password?</a>'
  },
  label: 'Button'
}
