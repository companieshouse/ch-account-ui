import { useEffect, useRef, useState } from 'react'
import { findCustomPageProps, findCustomStage, forgerockFlow, findNotificationId } from './forgerock'
import { getStageFeatures } from './translate'
import { serializeForm } from './formData'
import { translateErrors } from './errors'
import log from '../services/log'

/**
 * React custom hook which provides an interface with the Forgerock SDK in order to navigate authentication trees
 * @param {Object} config - Static config used to initialise the flow
 * @param {String} config.defaultErrorStage - Default stage to render if not specified in the error
 * @param {String} config.lang - Current language selection
 * @param {Function} config.handleSuccess - Callback on LoginSuccess response from FIDC
 * @param {Boolean} config.isAuthOnly - Used in OIDC auth flow where we do not need to retrieve tokens, passed as param from IG
 * @param {String} config.journeyName - The tree/flow name to initialise as configure in FIDC AM
 * @param {String} config.journeyNamespace - Name spaces used when retrieving content tokens
 * @param {Object} config.stepOptions - Optional params to be passed to the FRAuth.next() SDK call, includes query.
 *
 * @returns {{flowHandlers: {onSubmit: onSubmit, onSubmitCallbacks: *[], onSecondarySubmit: onSecondarySubmit, onReset: onReset}, uiElements: *[], stepPageProps: {}, uiStage: string, uiFeatures: *[], notificationId: string, loading: boolean}}
 */
const useFRFlow = (config) => {
  const [reset, setReset] = useState(false)
  const [loading, setLoading] = useState(true)
  const [stepPageProps, setStepPageProps] = useState({})
  const [notificationId, setNotificationId] = useState()
  const [uiStage, setUiStage] = useState('')
  const [uiFeatures, setUiFeatures] = useState([])
  const [uiElements, setUiElements] = useState([])
  const [submitData, setSubmitData] = useState(() => {})
  const onSubmitCallbacks = []

  const { formRef, lang, pageStep } = config

  // Initial config
  const flowConfig = useRef({
    defaultErrorStage: config.defaultErrorStage,
    getLang: () => config.lang,
    handleSuccess: config.handleSuccess,
    isAuthOnly: config.isAuthOnly,
    journeyName: config.journeyName,
    journeyNamespace: config.journeyNamespace,
    stepOptions: { query: config.stepQuery }
  })

  useEffect(() => {
    const {
      defaultErrorStage,
      isAuthOnly,
      journeyName,
      journeyNamespace,
      stepOptions,
      handleSuccess,
      getLang
    } = flowConfig.current
    log.debug(`Starting useFRFlow, journey "${journeyName}", stepOptions:`, stepOptions)
    forgerockFlow({
      journeyName,
      journeyNamespace,
      isAuthOnly,
      getLang,
      stepOptions,
      onSuccess: () => {
        handleSuccess()
      },
      onFailure: (errData, newErrors = []) => {
        let stage = defaultErrorStage
        setStepPageProps((currentProps) => ({ ...currentProps, errors: newErrors }))
        newErrors.forEach((error) => {
          if (error.stage) {
            stage = error.stage
          }
        })
        setUiStage(stage)
        setLoading(false)
      },
      onUpdateUi: (step, submitDataFunc, stepErrors = []) => {
        const stepProps = findCustomPageProps(step)
        step.payload.stage = step.payload.stage || findCustomStage(step)

        if (stepProps?.apiError) {
          // Transform the apiError structure to the app's errors array structure
          const apiErrorsAsAppErrors = stepProps.apiError.errors.map((errorItem) => ({
            label: errorItem.message
          }))
          stepErrors.push(...apiErrorsAsAppErrors)
        }

        // Replace raw errors with translated errors
        stepProps.errors = stepErrors
        setNotificationId(findNotificationId(step))
        setStepPageProps(stepProps)
        setUiStage(step.payload.stage)
        setUiElements(step.callbacks)
        setSubmitData(() => submitDataFunc)
        setLoading(false)
      }
    })
    setReset(false)
  }, [flowConfig, pageStep, reset])

  useEffect(() => {
    if (uiStage && lang) {
      setUiFeatures(getStageFeatures(lang, uiStage))
    }
  }, [lang, uiStage])

  const onSubmit = (evt, noValidate = false) => {
    evt?.preventDefault()
    setLoading(true)

    // Get formData from the DOM with callback IDTokens as the key
    const formData = serializeForm(formRef.current)

    // Execute any submit callbacks defined in the child components and apply returned errors
    if (!noValidate) {
      for (const callback of onSubmitCallbacks) {
        const errors = callback(formData)
        if (errors?.length) {
          setStepPageProps((currentProps) => ({ ...currentProps, errors: translateErrors(errors, lang) }))
          setLoading(false)
          return
        }
      }
    }

    // Clear existing errors
    setStepPageProps((currentProps) => ({ ...currentProps, errors: [] }))

    // Submit FR stage
    submitData(formData)
  }

  // Update callback values before submission
  const onSecondarySubmit = (evt, params) => {
    params.noValidate = params.noValidate !== undefined ? params.noValidate : false
    evt.preventDefault()
    document.getElementsByName(params.target)[0].value = params.value
    onSubmit(null, params.noValidate)
  }

  // Restart the flow
  const onReset = (evt) => {
    evt.preventDefault()
    setReset(true)
  }

  return {
    notificationId,
    uiFeatures,
    uiElements,
    uiStage,
    stepPageProps,
    flowHandlers: { onSubmit, onSecondarySubmit, onReset, onSubmitCallbacks },
    loading
  }
}

export default useFRFlow
