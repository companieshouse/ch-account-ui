import React from 'react'
import fetchMock from 'fetch-mock'
import {
  mockAuthId,
  mockConfirmedCompaniesPath,
  mockConfirmedCompaniesResponse,
  mockUserProfile,
  mockUserPath,
  tokens
} from '../../common-mocks'
import { YourCompanies } from '../../../../pages/account/your-companies'

export default {
  title: 'Pages/Account/YourCompanies',
  args: {
    lang: 'en'
  }
}

// eslint-disable-next-line react/prop-types
const Template = ({ userOrgsResponse, orgUsersResponse, mockUserResponse, ...rest }) => {
  fetchMock.restore()
  fetchMock.mock('begin:https://idam.amido.aws.chdev.org/am/oauth2/realms/root/realms/alpha/authorize?client_id=ForgeRockSDKClient&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Faccount%2Fhome%2F&response_type=code&scope=openid%20email%20phone%20profile%20fr%3Aidm%3A*&state=', () => {
    window.localStorage.setItem('forgerock-sdk-ForgeRockSDKClient', JSON.stringify(tokens))
    return { redirectUrl: 'http://not.used.com', status: 302 }
  })
  fetchMock.mock(mockUserPath, mockUserProfile)
  fetchMock.mock(mockConfirmedCompaniesPath, mockConfirmedCompaniesResponse)
  return <YourCompanies {...rest}/>
}

export const HOME_YOUR_COMPANIES = Template.bind({})
HOME_YOUR_COMPANIES.args = {
  accessToken: mockAuthId,
  companiesResponse: mockConfirmedCompaniesResponse
}
