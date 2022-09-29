import React from 'react'
import { Home } from '../../../pages/account/home'
import fetchMock from 'fetch-mock'
import {
  mockAuthId,
  mockCompaniesPath,
  mockCompaniesResponse,
  mockUserProfile,
  mockUserPath,
  tokens
} from '../common-mocks'

export default {
  title: 'Pages/Account/Home',
  args: {
    lang: 'en',
    companyNo: 1234
  }
}

// eslint-disable-next-line react/prop-types
const Template = ({ userOrgsResponse, orgUsersResponse, mockUserResponse, ...rest }) => {
  fetchMock.restore()
  fetchMock.mock('begin:https://idam.amido.aws.chdev.org/am/oauth2/realms/root/realms/alpha/authorize?client_id=ForgeRockSDKClient&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Faccount%2Fhome%2F&&companyNo=012345response_type=code&scope=openid%20email%20phone%20profile%20fr%3Aidm%3A*&state=', () => {
    window.localStorage.setItem('forgerock-sdk-ForgeRockSDKClient', JSON.stringify(tokens))
    return { redirectUrl: 'http://not.used.com', status: 302 }
  })
  fetchMock.mock(mockUserPath, mockUserProfile)
  fetchMock.mock(mockCompaniesPath, mockCompaniesResponse)
  return <Home {...rest} />
}

export const HOME_OVERVIEW = Template.bind({})
HOME_OVERVIEW.args = {
  accessToken: mockAuthId,
  companiesResponse: mockCompaniesResponse,
  queryParams: {companyNo: 1234},
}
