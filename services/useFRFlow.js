import React, { useEffect, useRef, useState } from 'react'
import { findCustomPageProps, findCustomStage, forgerockFlow } from './forgerock'
import { getStageFeatures } from './translate'
import { serializeForm } from './formData'
import { translateErrors } from './errors'
import log from '../services/log'

const useFRFlow = (config) => {
  const [loading, setLoading] = useState(true)
  const [stepPageProps, setStepPageProps] = React.useState({})
  const [uiStage, setUiStage] = React.useState('')
  const [uiFeatures, setUiFeatures] = React.useState([])
  const [uiElements, setUiElements] = React.useState([])
  const [submitData, setSubmitData] = React.useState(() => {})
  const onSubmitCallbacks = []

  const { formRef, lang, pageStep } = config

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
    const { defaultErrorStage, isAuthOnly, journeyName, journeyNamespace, stepOptions, handleSuccess, getLang } = flowConfig.current
    log.debug(`Staring useFRFlow, journey "${journeyName}", stepOptions:`, stepOptions)
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

        setStepPageProps(stepProps)
        setUiStage(step.payload.stage)
        setUiElements(step.callbacks)
        setSubmitData(() => submitDataFunc)
        setLoading(false)
      }
    })
  }, [flowConfig, pageStep])

  useEffect(() => {
    if (uiStage && lang) {
      setUiFeatures(getStageFeatures(lang, uiStage))
    }
  }, [lang, uiStage])

  const onSubmit = (evt) => {
    evt?.preventDefault()
    setLoading(true)

    // Clear existing errors
    setStepPageProps((currentProps) => ({ ...currentProps, errors: [] }))

    // Get formData from the DOM with callback IDTokens as the key
    const formData = serializeForm(formRef.current)

    // Execute any submit callbacks defined in the child components and apply returned errors
    for (const callback of onSubmitCallbacks) {
      const errors = callback(formData)
      if (errors.length) {
        setStepPageProps((currentProps) => ({ ...currentProps, errors: translateErrors(errors, lang) }))
        setLoading(false)
        return
      }
    }

    // Submit FR stage
    submitData(formData, flowConfig.current.stepOptions)
  }

  // Update callback values before submission
  const onSecondarySubmit = (evt, params) => {
    evt.preventDefault()
    document.getElementsByName(params.target)[0].value = params.value
    onSubmit()
  }

  return { uiFeatures, uiElements, uiStage, stepPageProps, flowHandlers: { onSubmit, onSecondarySubmit, onSubmitCallbacks }, loading }
}

export default useFRFlow
