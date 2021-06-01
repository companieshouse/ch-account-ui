import React from 'react'
import fetchMock from 'fetch-mock'
import { AuthorisedPerson } from '../../../../pages/account/your-companies/authorised-person'
import { mockAuthId, mockUserProfile, mockUserOrgsPath, mockOrgUsersPath, mockOrgUsersResponse, mockUserOrgsResponse } from '../../common-mocks'

export default {
  title: 'Pages/Account/YourCompanies/AuthorisedPerson',
  args: {
    lang: 'en'
  }
}

// eslint-disable-next-line react/prop-types
const Template = ({ userOrgsResponse, orgUsersResponse, ...rest }) => {
  fetchMock.restore()
  fetchMock.mock(mockUserOrgsPath, userOrgsResponse)
  fetchMock.mock(mockOrgUsersPath, orgUsersResponse)
  return <AuthorisedPerson {...rest} />
}

export const HOME_AUTHORISED_PERSON_CONFIRMED = Template.bind({})
HOME_AUTHORISED_PERSON_CONFIRMED.story = {
  parameters: {
    nextRouter: {
      query: {
        companyNumber: '08023036',
        userId: '08a989a1-7aba-4050-97dd-64b8c7dd3cbc'
      }
    }
  }
}
HOME_AUTHORISED_PERSON_CONFIRMED.args = {
  userOrgsResponse: mockUserOrgsResponse,
  orgUsersResponse: mockOrgUsersResponse,
  accessToken: mockAuthId,
  profile: mockUserProfile
}

export const HOME_AUTHORISED_PERSON_PENDING = Template.bind({})
HOME_AUTHORISED_PERSON_PENDING.story = {
  parameters: {
    nextRouter: {
      query: {
        companyNumber: '08023036',
        userId: '4f167155-1a32-40d2-98ea-18a2b335cecc'
      }
    }
  }
}
HOME_AUTHORISED_PERSON_PENDING.args = {
  userOrgsResponse: mockUserOrgsResponse,
  orgUsersResponse: mockOrgUsersResponse,
  accessToken: mockAuthId,
  profile: mockUserProfile
}
