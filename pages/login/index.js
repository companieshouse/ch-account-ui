import React from 'react'
import LoginIndexView from '../../components/views/login/IndexView'
import { login } from '../../services/forgerock'
import HeadingCount from '../../services/HeadingCount'

const Login = () => {
  const headingCount = new HeadingCount()

  React.useEffect(() => {
    headingCount.reset()
  })

  const [errors, setErrors] = React.useState([])

  const onLoginSubmit = (evt) => {
    evt.preventDefault()

    setErrors([])

    const username = evt.target.elements.username.value
    const password = evt.target.elements.password.value

    login({ username, password }).then((response) => {
      console.log('Response', response)
    }).catch((err) => {
      const message = err?.payload?.message || 'Login failure'
      const reason = err?.payload?.reason || 'Unknown'
      const newErrors = []

      switch (reason) {
        case 'Unauthorised':
          newErrors.push({
            label: message,
            anchor: 'username'
          })
          break

        default:
          newErrors.push({
            label: message,
            anchor: 'username'
          })
          break
      }

      setErrors(newErrors)
    })
  }

  return (
    <LoginIndexView onSubmit={onLoginSubmit} errors={errors} />
  )
}

export default Login
