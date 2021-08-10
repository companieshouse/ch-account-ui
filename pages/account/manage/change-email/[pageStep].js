import PropTypes from 'prop-types'
import React, { useMemo, useRef } from 'react'
import HeadingCount from '../../../../services/HeadingCount'
import { findCustomPageProps, findCustomStage, forgerockFlow } from '../../../../services/forgerock'
import {
  FORGEROCK_TREE_CHANGE_EMAIL_ADDRESS
} from '../../../../services/environment'
import { useRouter } from 'next/router'
import { getStageFeatures } from '../../../../services/translate'
import FeatureDynamicView from '../../../../components/views/FeatureDynamicView'
import componentMap from '../../../../services/componentMap'
import Dynamic from '../../../../components/Dynamic'
import { serializeForm } from '../../../../services/formData'
import { generateQueryUrl } from '../../../../services/queryString'
import WithLang from '../../../../services/lang/WithLang'
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

const ChangeEmail = ({ lang }) => {
  const formRef = useRef()
  const router = useRouter()
  const [errors, setErrors] = React.useState([])
  const [customPageProps, setCustomPageProps] = React.useState({})
  const [uiStage, setUiStage] = React.useState('')
  const [uiFeatures, setUiFeatures] = React.useState([])
  const [uiElements, setUiElements] = React.useState([])
  const [submitData, setSubmitData] = React.useState((formData) => {})
  const headingCount = useMemo(() => new HeadingCount(), [])
  const onSubmitCallbacks = []

  const { pageStep = '', service = '', overrideStage = '' } = router.query

  React.useEffect(() => {
    headingCount.reset()
    if (!pageStep) return

    if (pageStep === '_restart') {
      router.replace('/account/manage/change-email/_start/')
      return
    }

    const journeyName = FORGEROCK_TREE_CHANGE_EMAIL_ADDRESS

    setErrors([])

    const stepOptions = {
      query: {
        ForceAuth: true
      }
    }

    log.debug('Staring FR journey', journeyName, stepOptions)
    forgerockFlow({
      journeyName,
      journeyNamespace: 'CHANGE_EMAIL',
      lang,
      stepOptions,
      onSuccess: () => {
        const successPath = generateQueryUrl('/account/manage/', {
          notifyToken: 'changeEmailSuccess'
        })
        router.push(successPath)
      },
      onFailure: (errData, newErrors = []) => {
        // We only get here if there was a fatal error signal from the forgerock client library
        // all other errors are not considered a failure (such as incorrectly formatted inputs etc
        // and are handled gracefully by the onUpdateUi function
        let stage = 'CHANGE_EMAIL_1'
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
  }, [pageStep, overrideStage, service, headingCount, lang, router])

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
      width='two-thirds'
      titleLinkHref="/account/home"
      hasAccountLinks
      accountLinksItem={6}
      onSubmit={onSubmit}
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

export default WithLang(ChangeEmail)

ChangeEmail.propTypes = {
  lang: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired
}
