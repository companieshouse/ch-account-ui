import React from 'react'
import { Home } from '../../../pages/account/home'
import fetchMock from 'fetch-mock'
import {
  mockAuthId,
  mockOrgUsersPath,
  mockOrgUsersResponse,
  mockUserOrgsPath,
  mockUserOrgsResponse,
  mockUserProfile,
  mockUserPath
} from '../common-mocks'

export default {
  title: 'Pages/Account/Home',
  args: {
    lang: 'en'
  }
}

// eslint-disable-next-line react/prop-types
const Template = ({ userOrgsResponse, orgUsersResponse, mockUserResponse, ...rest }) => {
  fetchMock.restore()
  fetchMock.mock(mockUserPath, userOrgsResponse)
  fetchMock.mock(mockUserOrgsPath, userOrgsResponse)
  fetchMock.mock(mockOrgUsersPath, orgUsersResponse)
  return <Home {...rest} />
}

export const HOME_OVERVIEW = Template.bind({})
HOME_OVERVIEW.args = {
  accessToken: mockAuthId,
  userOrgsResponse: mockUserOrgsResponse,
  orgUsersResponse: mockOrgUsersResponse,
  mockUserResponse: mockUserProfile
}
