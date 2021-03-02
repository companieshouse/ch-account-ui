import PropTypes from 'prop-types'
import React from 'react'
import Router from 'next/router'
import LogoutView from '../../components/views/account/LogoutView'
import { logoutFlow } from '../../services/forgerock'
import HeadingCount from '../../services/HeadingCount'

const Logout = () => {
  const [errors, setErrors] = React.useState([])
  const headingCount = new HeadingCount()

  const doLogout = () => {
    logoutFlow({
      onSuccess: (loginData) => {
        Router.push('/account/login')
      },
      onFailure: (err) => {
        setErrors([{
          label: 'Authentication service error'
        }, {
          label: err
        }])
      }
    })
  }

  React.useEffect(() => {
    headingCount.reset()
    doLogout()
  }, [])

  return (
    <LogoutView errors={errors} headingCount={headingCount} />
  )
}

export default Logout

Logout.propTypes = {
  errors: PropTypes.array
}

Logout.defaultProps = {
  errors: []
}
