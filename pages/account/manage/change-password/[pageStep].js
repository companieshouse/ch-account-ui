import PropTypes from 'prop-types'
import React, { useMemo, useRef } from 'react'
import HeadingCount from '../../../../services/HeadingCount'
import { findCustomPageProps, findCustomStage, forgerockFlow } from '../../../../services/forgerock'
import { FORGEROCK_TREE_CHANGE_PASSWORD } from '../../../../services/environment'
import { useRouter } from 'next/router'
import { getStageFeatures } from '../../../../services/translate'
import FeatureDynamicView from '../../../../components/views/FeatureDynamicView'
import WithLang from '../../../../services/lang/WithLang'
import componentMap from '../../../../services/componentMap'
import Dynamic from '../../../../components/Dynamic'
import { customValidation, serializeForm } from '../../../../services/formData'
import { translateErrors } from '../../../../services/errors'
import log from '../../../../services/log'

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

const ChangePassword = ({ lang }) => {
  const router = useRouter()
  const formRef = useRef()
  const [errors, setErrors] = React.useState([])
  const [customPageProps, setCustomPageProps] = React.useState({})
  const [uiStage, setUiStage] = React.useState('')
  const [uiFeatures, setUiFeatures] = React.useState([])
  const [uiElements, setUiElements] = React.useState([])
  const [submitData, setSubmitData] = React.useState((formData) => {})
  const headingCount = useMemo(() => new HeadingCount(), [])

  const { pageStep = '', service = '', token, overrideStage = '' } = router.query

  React.useEffect(() => {
    const journeyName = FORGEROCK_TREE_CHANGE_PASSWORD

    headingCount.reset()
    if (!pageStep) return

    if (pageStep === '_restart') {
      router.replace('/account/manage/change-password/_start/')
      return
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
      journeyNamespace: 'CHANGE_PASSWORD',
      lang,
      stepOptions,
      onFailure: (errData, newErrors = []) => {
        // We only get here if there was a fatal error signal from the forgerock client library
        // all other errors are not considered a failure (such as incorrectly formatted inputs etc
        // and are handled gracefully by the onUpdateUi function
        let stage = 'CHANGE_PASSWORD_1'
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
  }, [pageStep, overrideStage, service, token, headingCount, lang, router])

  const onSubmit = (evt) => {
    evt?.preventDefault()

    // Clear existing errors
    setErrors([])

    // Get formData from the DOM with callback IDTokens as the key
    const formData = serializeForm(formRef.current)

    // Apply any client side validation rules defined in the uiElements feature
    const uiElements = uiFeatures.find((feature) => feature.component === 'DisplayUiElements')
    if (uiElements) {
      const errors = customValidation(formData, uiElements.props.elementProps)
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
      width='two-thirds'
      titleLinkHref="/account/home"
      onSubmit={onSubmit}
      errors={errors}
      headingCount={headingCount}
      uiStage={uiStage}
      hasAccountLinks
      accountLinksItem={5}
      {...customPageProps}
    >
      <Dynamic
        componentMap={componentMap}
        headingCount={headingCount}
        content={uiFeatures}
        errors={errors}
        uiElements={uiElements}
        uiStage={uiStage}
        {...router.query}
      />
    </FeatureDynamicView>
  )
}

export default WithLang(ChangePassword)

ChangePassword.propTypes = {
  lang: PropTypes.string.isRequired
}
