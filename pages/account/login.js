import React from 'react'
import Router from 'next/router'
import { loginFlow } from '../../services/forgerock'
import HeadingCount from '../../services/HeadingCount'
import { FORGEROCK_TREE_LOGIN } from '../../services/environment'
import { getStageFeatures } from '../../services/translate'
import UiFeatures from '../../components/general-ui/UiFeatures'
import FeatureDynamicView from '../../components/views/FeatureDynamicView'

const Login = () => {
  const [errors, setErrors] = React.useState([])
  const [uiStage, setUiStage] = React.useState('')
  const [uiFeatures, setUiFeatures] = React.useState([])
  const [uiElements, setUiElements] = React.useState([])
  const [submitData, setSubmitData] = React.useState((formData) => {})
  const headingCount = new HeadingCount()

  React.useEffect(() => {
    headingCount.reset()
    loginFlow({
      journeyName: FORGEROCK_TREE_LOGIN,
      onSuccess: (loginData) => {
        Router.push('/account/home')
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
        setUiStage(step.payload.stage)
        setUiFeatures(getStageFeatures('en', step.payload.stage))
        setUiElements(step.callbacks)
        setSubmitData(() => submitDataFunc)
      }
    })
  }, [])

  const onSubmit = (evt) => {
    evt.preventDefault()
    setErrors([])

    // Convert UI element values to JSON key/value pairs
    const formData = Object.entries(evt.target.elements).reduce((obj, [key, element]) => {
      obj[key] = element.value
      return obj
    }, {})

    submitData(formData)
  }

  const renderFeatures = (props) => {
    return <UiFeatures {...props} />
  }

  return (
    <FeatureDynamicView renderFeatures={renderFeatures} onSubmit={onSubmit} errors={errors} headingCount={headingCount} uiFeatures={uiFeatures} uiElements={uiElements} uiStage={uiStage} />
  )
}

export default Login
