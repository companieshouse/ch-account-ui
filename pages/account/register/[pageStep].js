import PropTypes from 'prop-types'
import React, { useMemo, useRef } from 'react'
import HeadingCount from '../../../services/HeadingCount'
import { findCustomPageProps, findCustomStage, forgerockFlow } from '../../../services/forgerock'
import { FORGEROCK_TREE_REGISTER } from '../../../services/environment'
import Router, { useRouter } from 'next/router'
import { getStageFeatures } from '../../../services/translate'
import FeatureDynamicView from '../../../components/views/FeatureDynamicView'
import WithLang from '../../../services/lang/WithLang'
import Dynamic from '../../../components/Dynamic'
import componentMap from '../../../services/componentMap'
import { customValidation, serializeForm } from '../../../services/formData'
import { translateErrors } from '../../../services/errors'
import log from '../../../services/log'

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

const Register = ({ lang }) => {
  const router = useRouter()
  const formRef = useRef()
  const [errors, setErrors] = React.useState([])
  const [customPageProps, setCustomPageProps] = React.useState({})
  const [uiStage, setUiStage] = React.useState('')
  const [uiFeatures, setUiFeatures] = React.useState([])
  const [uiElements, setUiElements] = React.useState([])
  const [submitData, setSubmitData] = React.useState((formData) => {})
  const headingCount = useMemo(() => new HeadingCount(), [])
  const onSubmitCallbacks = []

  const { pageStep = '', service = '', token, overrideStage = '' } = router.query

  React.useEffect(() => {
    let journeyName = ''

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

    log.debug('Staring FR journey', journeyName, stepOptions)
    forgerockFlow({
      journeyName,
      journeyNamespace: 'REGISTRATION',
      lang,
      stepOptions,
      onSuccess: () => {
        Router.push('/account/home')
      },
      onFailure: (errData, newErrors = []) => {
        // We only get here if there was a fatal error signal from the forgerock client library
        // all other errors are not considered a failure (such as incorrectly formatted inputs etc
        // and are handled gracefully by the onUpdateUi function
        let stage = 'GENERIC_ERROR'
        newErrors.forEach((error) => {
          if (error.stage) {
            stage = error.stage
          }
        })
        setUiFeatures(getStageFeatures(lang, overrideStage || stage))
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
    // eslint-disable-next-line
  }, [pageStep, overrideStage, service, token, headingCount, lang, router])

  const onSubmit = (evt) => {
    evt?.preventDefault()

    // Clear existing errors
    setErrors([])

    // Get formData from the DOM with callback IDTokens as the key
    const formData = serializeForm(formRef.current)

    // Execute any submit callbacks defined in the child components and apply returned errors
    for (const callback of onSubmitCallbacks) {
      const errors = callback(formData)
      if (errors.length) {
        setErrors(translateErrors(errors, lang))
        return
      }
    }

    // Submit FR stage
    submitData(formData)
  }

  // Check if the router has been initialised yet
  if (!pageStep) return null

  return (
    <FeatureDynamicView
      formRef={formRef}
      onSubmit={onSubmit}
      errors={errors}
      headingCount={headingCount}
    >
      <Dynamic
        {...customPageProps}
        componentMap={componentMap}
        headingCount={headingCount}
        content={uiFeatures}
        errors={errors}
        uiElements={uiElements}
        uiStage={uiStage}
        handlers={{ onSubmitCallbacks }}
        {...router.query}
      />
    </FeatureDynamicView>
  )
}

export { Register }

export default WithLang(Register)

Register.propTypes = {
  lang: PropTypes.string
}
