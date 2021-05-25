import React from 'react'
import { useCookies } from 'react-cookie'
import { CH_COOKIE_NAME } from '../../services/environment'

const WithAccessToken = (WrappedComponent) => function WithAccessToken (props) {
  const [cookies] = useCookies([CH_COOKIE_NAME])
  const accessToken = cookies[CH_COOKIE_NAME]

  return <WrappedComponent {...props} accessToken={accessToken}/>
}

export default WithAccessToken
