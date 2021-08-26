import React from 'react'
import { RequestAuthCode } from '../../../pages/account/request-auth-code'

export default {
  title: 'Pages/Account/RequestAuthCode',
  args: {
    lang: 'en',
    queryParams: {
      companyName: 'FLOWERS LIMITED'
    }
  }
}

const Template = (args) => {
  return <RequestAuthCode {...args} />
}

export const REQUEST_AUTH_CODE = Template.bind({})
