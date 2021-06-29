import React from 'react'
import ManageAccount from '../../../pages/account/manage'
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
  title: 'Pages/Account/Manage',
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
  return <ManageAccount {...rest} />
}

export const HOME_MANAGE_ACCOUNT = Template.bind({})
HOME_MANAGE_ACCOUNT.args = {
  accessToken: mockAuthId,
  userOrgsResponse: mockUserOrgsResponse,
  orgUsersResponse: mockOrgUsersResponse,
  mockUserResponse: mockUserProfile
}
