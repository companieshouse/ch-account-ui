import PropTypes from 'prop-types'
import React, { useState, useMemo } from 'react'
import HeadingCount from '../../../services/HeadingCount'
import { findCustomPageProps, findCustomStage, forgerockFlow } from '../../../services/forgerock'
import {
  CH_EWF_REQUEST_AUTH_CODE_URL,
  FORGEROCK_TREE_COMPANY_ASSOCIATION
} from '../../../services/environment'
import Router, { useRouter } from 'next/router'
import { getStageFeatures } from '../../../services/translate'
import FeatureDynamicView from '../../../components/views/FeatureDynamicView'
import WithLang from '../../../services/lang/WithLang'
import Dynamic from '../../../components/Dynamic'
import componentMap from '../../../services/componentMap'
import { serializeForm } from '../../../services/formData'
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

const AssociateUserAndCompany = ({ lang }) => {
  const router = useRouter()
  const [errors, setErrors] = useState([])
  const [customPageProps, setCustomPageProps] = useState({})
  const [uiStage, setUiStage] = useState('')
  const [uiFeatures, setUiFeatures] = useState([])
  const [uiElements, setUiElements] = useState([])
  const [submitData, setSubmitData] = useState((formData) => {})
  const headingCount = useMemo(() => new HeadingCount(), [])

  const { pageStep = '', service = '', token, overrideStage = '' } = router.query

  React.useEffect(() => {
    let journeyName = ''

    headingCount.reset()

    if (!pageStep) return

    if (pageStep === '_restart') {
      router.replace('/account/associate/_start/')
      return
    }

    if (pageStep === 'verify' && service && token) {
      journeyName = service
    } else {
      journeyName = FORGEROCK_TREE_COMPANY_ASSOCIATION
    }

    setErrors([])

    const stepOptions = {
      query: {
        token
      }
    }

    log.debug(`Staring FR with pageStep "${pageStep}", journey "${journeyName}", stepOptions:`, stepOptions)
    forgerockFlow({
      journeyName,
      journeyNamespace: 'COMPANY_ASSOCIATION',
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

        stepCustomPageProps.links = { requestAuthCodePath: CH_EWF_REQUEST_AUTH_CODE_URL }

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
      width='two-thirds'
      onSubmit={onSubmit}
      hasBackLink={true}
      hasAccountLinks={true}
      hasLogoutLink={true}
      titleLinkHref="/account/home"
    >
      <Dynamic
        {...customPageProps}
        {...router.query}
        componentMap={componentMap}
        headingCount={headingCount}
        content={uiFeatures}
        errors={errors}
        uiElements={uiElements}
        uiStage={uiStage}
      />
    </FeatureDynamicView>
  )
}

export default WithLang(AssociateUserAndCompany)

AssociateUserAndCompany.propTypes = {
  lang: PropTypes.string.isRequired
}
