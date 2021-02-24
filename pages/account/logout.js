import React from 'react'
import Router from 'next/router'
import LogoutView from '../../components/views/account/LogoutView'
import { logoutFlow } from '../../services/forgerock'
import HeadingCount from '../../services/HeadingCount'

const Logout = () => {
  const [errors, setErrors] = React.useState([])
  const headingCount = new HeadingCount()

  React.useEffect(() => {
    headingCount.reset()
    logoutFlow({
      onSuccess: (loginData) => {
        Router.push('/account/login')
      },
      onFailure: () => {
        const newErrors = [{
          label: 'Authentication service error'
        }]

        setErrors(newErrors)
      }
    })
  }, [])

  return (
    <LogoutView errors={errors} headingCount={headingCount} />
  )
}

export default Logout
