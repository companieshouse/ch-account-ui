import React from 'react'
import fetchMock from 'fetch-mock'
import { AuthorisedPerson } from '../../../../pages/account/your-companies/authorised-person'
import {
  mockAuthId,
  mockUserProfile,
  tokens, mockUserPath,
  mockCompaniesResponse,
  mockCompanyPath,
  mockCompanyResponse
} from '../../common-mocks'

export default {
  title: 'Pages/Account/YourCompanies/AuthorisedPerson',
  args: {
    lang: 'en'
  }
}

// eslint-disable-next-line react/prop-types
const Template = ({ userOrgsResponse, orgUsersResponse, ...rest }) => {
  fetchMock.restore()
  fetchMock.mock('begin:https://idam.amido.aws.chdev.org/am/oauth2/realms/root/realms/alpha/authorize?client_id=ForgeRockSDKClient&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Faccount%2Fhome%2F&response_type=code&scope=openid%20email%20phone%20profile%20fr%3Aidm%3A*&state=', () => {
    window.localStorage.setItem('forgerock-sdk-ForgeRockSDKClient', JSON.stringify(tokens))
    return { redirectUrl: 'http://not.used.com', status: 302 }
  })
  fetchMock.mock(mockUserPath, mockUserProfile)
  fetchMock.mock(mockCompanyPath, mockCompanyResponse)
  return <AuthorisedPerson {...rest} />
}

export const HOME_AUTHORISED_PERSON_CONFIRMED = Template.bind({})
HOME_AUTHORISED_PERSON_CONFIRMED.args = {
  queryParams: {
    companyNumber: '06600043',
    userId: '12e26a55-1c1b-4571-b7f1-374be012bc68'
  },
  companiesResponse: mockCompaniesResponse,
  accessToken: mockAuthId,
  profile: mockUserProfile
}

export const HOME_AUTHORISED_PERSON_PENDING = Template.bind({})
HOME_AUTHORISED_PERSON_PENDING.args = {
  queryParams: {
    companyNumber: '06600043',
    userId: '74f90707-0e36-4a8e-b574-799b33e26e55'
  },
  companiesResponse: mockCompaniesResponse,
  accessToken: mockAuthId,
  profile: mockUserProfile
}
