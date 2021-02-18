import React from 'react'
import LoginIndexView from '../../components/views/login/IndexView'
import { login, loginFlow } from '../../services/forgerock'
import HeadingCount from '../../services/HeadingCount'

const step1 = [{
  type: 'NameCallback',
  output: [{ name: 'prompt', value: 'User Name' }],
  input: [{ name: 'IDToken1', value: '' }],
  _id: 0
}, {
  type: 'PasswordCallback',
  output: [{ name: 'prompt', value: 'Password' }],
  input: [{ name: 'IDToken2', value: '' }],
  _id: 1
}]

const step2 = [{
  payload: {
    type: 'BooleanAttributeInputCallback',
    output: [{ name: 'name', value: 'preferences/updates' }, {
      name: 'prompt',
      value: 'Send me news and updates'
    }, { name: 'required', value: false }, { name: 'policies', value: {} }, {
      name: 'failedPolicies',
      value: []
    }, { name: 'validateOnly', value: false }, { name: 'value', value: false }],
    input: [{ name: 'IDToken1', value: false }, { name: 'IDToken1validateOnly', value: false }],
    _id: 2
  }
}, {
  payload: {
    type: 'BooleanAttributeInputCallback',
    output: [{ name: 'name', value: 'preferences/marketing' }, {
      name: 'prompt',
      value: 'Send me special offers and services'
    }, { name: 'required', value: false }, { name: 'policies', value: {} }, {
      name: 'failedPolicies',
      value: []
    }, { name: 'validateOnly', value: false }, { name: 'value', value: false }],
    input: [{ name: 'IDToken2', value: false }, { name: 'IDToken2validateOnly', value: false }],
    _id: 3
  }
}]

const Login = () => {
  const [uiElements, setUiElements] = React.useState(step1)
  const headingCount = new HeadingCount()

  React.useEffect(() => {
    headingCount.reset()
  })

  const [errors, setErrors] = React.useState([])

  const submitData = loginFlow({
    onSuccess: () => {},
    onFailure: () => {},
    onUpdateUi: (step) => {

    }
  })

  const onLoginSubmit = (evt) => {
    evt.preventDefault()

    setErrors([])

    // Convert UI element values to JSON key/value pairs
    console.log('Form elements', Object.entries(evt.target.elements), evt.target.elements)
    const formData = Object.entries(evt.target.elements).reduce((obj, [key, element]) => {
      obj[key] = element.value
      return obj
    }, {})
    console.log('formData', formData)
    const username = evt.target.elements.username.value
    const password = evt.target.elements.password.value

    // Submit the data to the auth flow tree
    // submitData(formData)

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
    <LoginIndexView onSubmit={onLoginSubmit} errors={errors} headingCount={headingCount} uiElements={uiElements}/>
  )
}

export default Login
