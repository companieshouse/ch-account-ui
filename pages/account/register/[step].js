import React from 'react'
import HeadingCount from '../../../services/HeadingCount'
import { forgerockFlow } from '../../../services/forgerock'
import { FORGEROCK_TREE_REGISTER } from '../../../services/environment'
import Router, { useRouter } from 'next/router'
import { getStageFeatures } from '../../../services/translate'
import UiFeatures from '../../../components/general-ui/UiFeatures'
import FeatureDynamicView from '../../../components/views/FeatureDynamicView'

const findCustomStage = (step) => {
  for (let i = 0; i < step.payload.callbacks.length; i++) {
    const callback = step.payload.callbacks[i]

    if (!callback) continue
    if (callback.type !== 'HiddenValueCallback') continue
    if (!callback.output.find((output) => output.name === 'id' && output.value === 'stage')) continue

    return callback.output.find((output) => output.name === 'value')?.value || ''
  }

  return ''
}

const RegisterContactDetails = () => {
  const router = useRouter()

  const { pageStep } = router.query || ''

  const [errors, setErrors] = React.useState([])
  const [uiStage, setUiStage] = React.useState('')
  const [uiFeatures, setUiFeatures] = React.useState([])
  const [uiElements, setUiElements] = React.useState([])
  const [submitData, setSubmitData] = React.useState(() => {})
  const headingCount = new HeadingCount()

  React.useEffect(() => {
    headingCount.reset()
    forgerockFlow({
      journeyName: FORGEROCK_TREE_REGISTER,
      onSuccess: (loginData) => {
        debugger
        Router.push('/account/home')
      },
      onFailure: (err) => {
        const message = err?.payload?.message || 'Registration failure'
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
        const stage = step.payload.stage || findCustomStage(step)
        step.payload.stage = stage

        setUiStage(stage)
        setUiFeatures(getStageFeatures('en', stage))
        setUiElements(step.callbacks)
        setSubmitData(() => submitDataFunc)

        /* if (pageStep === '_start') {
          // Replace the url rather than push to it
          router.replace(`/account/register/${stage}`, undefined, { shallow: true })
        } else {
          router.push(`/account/register/${stage}`, undefined, { shallow: true })
        } */
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

export default RegisterContactDetails
