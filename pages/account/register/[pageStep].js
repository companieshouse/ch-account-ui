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

const findCustomPageProps = (step) => {
  for (let i = 0; i < step.payload.callbacks.length; i++) {
    const callback = step.payload.callbacks[i]

    if (!callback) continue
    if (callback.type !== 'HiddenValueCallback') continue
    if (!callback.output.find((output) => output.name === 'id' && output.value === 'pagePropsJSON')) continue

    try {
      const customPropsObject = JSON.parse(callback.output.find((output) => output.name === 'value')?.value || '')
      return customPropsObject
    } catch (err) {
      return {
        apiError: {
          errors: [{
            error: 'JSONParseError',
            message: "API returned invalid JSON string in 'pagePropsJSON' callback data: " + err
          }]
        }
      }
    }
  }

  return ''
}

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { pageStep: '_start' } },
      { params: { pageStep: '_restart' } },
      { params: { pageStep: 'verify' } }
    ],
    fallback: false
  }
}

export const getStaticProps = async () => {
  return { props: {} }
}

const RegisterContactDetails = () => {
  const router = useRouter()
  const [errors, setErrors] = React.useState([])
  const [customPageProps, setCustomPageProps] = React.useState({})
  const [uiStage, setUiStage] = React.useState('')
  const [uiFeatures, setUiFeatures] = React.useState([])
  const [uiElements, setUiElements] = React.useState([])
  const [submitData, setSubmitData] = React.useState((formData) => {})
  const headingCount = new HeadingCount()

  const { pageStep = '', service = '', token, overrideStage = '' } = router.query || ''

  let journeyName = ''

  React.useEffect(() => {
    headingCount.reset()
    if (!pageStep) return

    if (pageStep === '_restart') {
      router.replace('/account/register/_start/')
      return
    }

    if (pageStep === 'verify' && service && token) {
      journeyName = service
    } else {
      journeyName = FORGEROCK_TREE_REGISTER
    }

    setErrors([])

    const stepOptions = {
      query: {
        token
      }
    }

    console.log('Staring FR journey', journeyName, stepOptions)
    forgerockFlow({
      journeyName,
      stepOptions,
      onSuccess: (loginData) => {
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
        const stepCustomPageProps = findCustomPageProps(step)
        const stage = step.payload.stage || findCustomStage(step)
        step.payload.stage = stage

        if (stepCustomPageProps) {
          if (stepCustomPageProps.apiError) {
            // Transform the apiError structure to the app's errors array structure
            const apiErrorsAsAppErrors = stepCustomPageProps.apiError.errors.map((errorItem) => ({
              label: errorItem.message
            }))

            // Update the errors for the page
            setErrors((currentErrorsArray) => {
              return [...currentErrorsArray, ...apiErrorsAsAppErrors]
            })
          }
          setCustomPageProps(stepCustomPageProps)
          console.log('CUSTOM PAGE PROPS', stepCustomPageProps)
        }

        setUiStage(stage)
        setUiFeatures(getStageFeatures('en', overrideStage || stage))
        setUiElements(step.callbacks)
        setSubmitData(() => submitDataFunc)
      }
    })
  }, [pageStep])

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

  // Check if the router has been initialised yet
  if (!pageStep) return null

  return (
    <FeatureDynamicView renderFeatures={renderFeatures} onSubmit={onSubmit} errors={errors} headingCount={headingCount} uiFeatures={uiFeatures} uiElements={uiElements} uiStage={uiStage} {...customPageProps} />
  )
}

export default RegisterContactDetails
