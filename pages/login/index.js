import React from 'react'
import Router from 'next/router'
import LoginIndexView from '../../components/views/login/IndexView'
import { loginFlow } from '../../services/forgerock'
import HeadingCount from '../../services/HeadingCount'

/* const step1 = [{
  payload: {
    type: 'NameCallback',
    output: [{ name: 'prompt', value: 'User Name' }],
    input: [{ name: 'IDToken1', value: '' }],
    _id: 0
  }
}, {
  payload: {
    type: 'PasswordCallback',
    output: [{ name: 'prompt', value: 'Password' }],
    input: [{ name: 'IDToken2', value: '' }],
    _id: 1
  }
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
}] */

const Login = () => {
  const [errors, setErrors] = React.useState([])
  const [uiElements, setUiElements] = React.useState([])
  const [submitData, setSubmitData] = React.useState(() => {})
  const headingCount = new HeadingCount()

  React.useEffect(() => {
    headingCount.reset()
    loginFlow({
      onSuccess: (loginData) => {
        Router.push('/account/home/')
      },
      onFailure: (err) => {
        const message = err?.payload?.message || 'Login failure'
        const reason = err?.payload?.reason || 'Unknown'
        const newErrors = []

        switch (reason) {
          case 'Unauthorised':
            newErrors.push({
              label: message,
              anchor: 'IDToken1'
            })
            break

          default:
            newErrors.push({
              label: message,
              anchor: 'IDToken1'
            })
            break
        }

        setErrors(newErrors)
      },
      onUpdateUi: (step, submitDataFunc) => {
        setUiElements(step.callbacks)
        setSubmitData(() => submitDataFunc)
      }
    })
  }, [])

  const onLoginSubmit = (evt) => {
    evt.preventDefault()
    setErrors([])

    // Convert UI element values to JSON key/value pairs
    const formData = Object.entries(evt.target.elements).reduce((obj, [key, element]) => {
      obj[key] = element.value
      return obj
    }, {})

    submitData(formData)
  }

  return (
    <LoginIndexView onSubmit={onLoginSubmit} errors={errors} headingCount={headingCount} uiElements={uiElements}/>
  )
}

export default Login
