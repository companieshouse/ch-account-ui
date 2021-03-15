import React from 'react'
import HeadingCount from '../../../services/HeadingCount'
import { findCustomPageProps, findCustomStage, forgerockFlow } from '../../../services/forgerock'
import { FORGEROCK_TREE_REGISTER } from '../../../services/environment'
import Router, { useRouter } from 'next/router'
import { getStageFeatures } from '../../../services/translate'
import UiFeatures from '../../../components/general-ui/UiFeatures'
import FeatureDynamicView from '../../../components/views/FeatureDynamicView'
import withLang from '../../../services/lang/withLang'

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

const RegisterContactDetails = ({ lang }) => {
  const router = useRouter()
  const [errors, setErrors] = React.useState([])
  const [customPageProps, setCustomPageProps] = React.useState({})
  const [uiStage, setUiStage] = React.useState('')
  const [uiFeatures, setUiFeatures] = React.useState([])
  const [uiElements, setUiElements] = React.useState([])
  const [submitData, setSubmitData] = React.useState((formData) => {})
  const headingCount = new HeadingCount()

  const { pageStep = '', service = '', token, overrideStage = '' } = router.query
  const { notifyType, notifyHeading, notifyTitle, notifyChildren } = router.query

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

        if (!uiStage) {
          setUiStage('GENERIC_ERROR')
        }

        setUiFeatures(getStageFeatures(lang, overrideStage || 'GENERIC_ERROR'))
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
        }

        setCustomPageProps(stepCustomPageProps)
        setUiStage(stage)
        setUiFeatures(getStageFeatures(lang, overrideStage || stage))
        setUiElements(step.callbacks)
        setSubmitData(() => submitDataFunc)
      }
    })
  }, [pageStep, service, token])

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
    <FeatureDynamicView
      renderFeatures={renderFeatures}
      onSubmit={onSubmit}
      errors={errors}
      headingCount={headingCount}
      uiFeatures={uiFeatures}
      uiElements={uiElements}
      uiStage={uiStage}
      notifyType={notifyType}
      notifyHeading={notifyHeading}
      notifyTitle={notifyTitle}
      notifyChildren={notifyChildren}
      {...customPageProps}
    />
  )
}

export default withLang(RegisterContactDetails)
