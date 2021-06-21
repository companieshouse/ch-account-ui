import React from 'react'
import { Logout } from '../../../pages/account/logout'

export default {
  title: 'Pages/Account/Logout',
  args: {
    lang: 'en'
  }
}

const Template = (args) => {
  return <Logout {...args} />
}

export const LOGOUT_ERROR = Template.bind({})
