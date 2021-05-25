import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import HeadingCount from '../../../services/HeadingCount'
import { findCustomPageProps, findCustomStage, forgerockFlow } from '../../../services/forgerock'
import { FORGEROCK_TREE_REQUEST_AUTH_CODE } from '../../../services/environment'
import Router, { useRouter } from 'next/router'
import { getStageFeatures } from '../../../services/translate'
import FeatureDynamicView from '../../../components/views/FeatureDynamicView'
import WithLang from '../../../services/lang/WithLang'
import Dynamic from '../../../components/Dynamic'
import componentMap from '../../../services/componentMap'
import { serializeForm } from '../../../services/formData'

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { pageStep: '_start' } },
      { params: { pageStep: '_restart' } }
    ],
    fallback: false
  }
}

export const getStaticProps = async () => {
  return { props: {} }
}

const RequestAuthCode = ({ lang }) => {
  const router = useRouter()
  const [errors, setErrors] = React.useState([])
  const [customPageProps, setCustomPageProps] = React.useState({})
  const [uiStage, setUiStage] = React.useState('')
  const [uiFeatures, setUiFeatures] = React.useState([])
  const [uiElements, setUiElements] = React.useState([])
  const [submitData, setSubmitData] = React.useState((formData) => {})
  const headingCount = useMemo(() => new HeadingCount(), [])

  const { pageStep = '', service = '', token, overrideStage = '' } = router.query

  React.useEffect(() => {
    const journeyName = FORGEROCK_TREE_REQUEST_AUTH_CODE

    headingCount.reset()
    if (!pageStep) return

    if (pageStep === '_restart') {
      router.replace('/account/request-auth-code/_start/')
      return
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
      journeyNamespace: 'REQUEST_AUTHENTICATION_CODE',
      lang,
      stepOptions,
      onSuccess: () => {
        Router.push('/account/home')
      },
      onFailure: (errData, newErrors = []) => {
        // We only get here if there was a fatal error signal from the forgerock client library
        // all other errors are not considered a failure (such as incorrectly formatted inputs etc
        // and are handled gracefully by the onUpdateUi function
        setErrors(newErrors)
        setUiFeatures(getStageFeatures(lang, overrideStage || 'REQUEST_AUTHENTICATION_CODE_1'))
      },
      onUpdateUi: (step, submitDataFunc, stepErrors = []) => {
        const stepCustomPageProps = findCustomPageProps(step)
        const stage = step.payload.stage || findCustomStage(step)
        step.payload.stage = stage

        if (stepCustomPageProps) {
          if (stepCustomPageProps.apiError) {
            // Transform the apiError structure to the app's errors array structure
            const apiErrorsAsAppErrors = stepCustomPageProps.apiError.errors.map((errorItem) => ({
              label: errorItem.message
            }))

            stepErrors.push(...apiErrorsAsAppErrors)
          }
        }

        // Update the errors for the page
        setErrors((currentErrorsArray) => {
          return [...currentErrorsArray, ...stepErrors]
        })

        setCustomPageProps(stepCustomPageProps)
        setUiStage(stage)
        setUiFeatures(getStageFeatures(lang, overrideStage || stage))
        setUiElements(step.callbacks)
        setSubmitData(() => submitDataFunc)
      }
    })
  }, [pageStep, overrideStage, service, token, headingCount, lang, router])

  const onSubmit = (evt) => {
    evt.preventDefault()
    setErrors([])

    const formData = serializeForm(evt.target)
    submitData(formData)
  }

  // Check if the router has been initialised yet
  if (!pageStep) return null

  return (
    <FeatureDynamicView
      width='full'
      hasAccountLinks={true}
      hasLogoutLink={true}
      onSubmit={onSubmit}
      titleLinkHref="/account/home"
      headingCount={headingCount}
    >
      <Dynamic
        componentMap={componentMap}
        headingCount={headingCount}
        content={uiFeatures}
        errors={errors}
        uiElements={uiElements}
        uiStage={uiStage}
        {...router.query}
        {...customPageProps}
      />
    </FeatureDynamicView>
  )
}

export default WithLang(RequestAuthCode)

RequestAuthCode.propTypes = {
  lang: PropTypes.string.isRequired
}
