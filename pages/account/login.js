import React from 'react'
import Router, { useRouter } from 'next/router'
import { findCustomPageProps, loginFlow } from '../../services/forgerock'
import HeadingCount from '../../services/HeadingCount'
import { FORGEROCK_TREE_LOGIN } from '../../services/environment'
import { getStageFeatures } from '../../services/translate'
import UiFeatures from '../../components/general-ui/UiFeatures'
import FeatureDynamicView from '../../components/views/FeatureDynamicView'
import withLang from '../../services/lang/withLang'

const Login = ({ lang }) => {
  const router = useRouter()
  const [customPageProps, setCustomPageProps] = React.useState({})
  const [errors, setErrors] = React.useState([])
  const [uiStage, setUiStage] = React.useState('')
  const [uiFeatures, setUiFeatures] = React.useState([])
  const [uiElements, setUiElements] = React.useState([])
  const [submitData, setSubmitData] = React.useState((formData) => {})
  const headingCount = new HeadingCount()

  const { goto } = router.query
  const { notifyType, notifyHeading, notifyTitle, notifyChildren, overrideStage = '' } = router.query

  React.useEffect(() => {
    headingCount.reset()
    loginFlow({
      journeyName: FORGEROCK_TREE_LOGIN,
      onSuccess: (loginData) => {
        if (goto) {
          return Router.push(goto)
        }

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

        if (!uiStage) {
          setUiStage('GENERIC_ERROR')
        }

        setUiFeatures(getStageFeatures(lang, overrideStage || 'GENERIC_ERROR'))
      },
      onUpdateUi: (step, submitDataFunc) => {
        const stepCustomPageProps = findCustomPageProps(step)

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
        setUiStage(step.payload.stage)
        setUiFeatures(getStageFeatures(lang, overrideStage || step.payload.stage))
        setUiElements(step.callbacks)
        setSubmitData(() => submitDataFunc)
      }
    })
  }, [goto])

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

export default withLang(Login)
