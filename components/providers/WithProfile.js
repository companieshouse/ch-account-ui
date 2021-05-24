import React from 'react'
import { useCookies } from 'react-cookie'
import { ID_COOKIE_NAME } from '../../services/environment'

const WithProfile = (WrappedComponent) => function WithProfile (props) {
  const [cookies] = useCookies([ID_COOKIE_NAME])
  const profile = cookies[ID_COOKIE_NAME]

  return <WrappedComponent {...props} profile={profile} />
}

export default WithProfile
