import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import HeadingCount from '../../../../services/HeadingCount'
import { findCustomPageProps, findCustomStage, forgerockFlow } from '../../../../services/forgerock'
import { FORGEROCK_TREE_CHANGE_PREFS } from '../../../../services/environment'
import { useRouter } from 'next/router'
import { getStageFeatures } from '../../../../services/translate'
import FeatureDynamicView from '../../../../components/views/FeatureDynamicView'
import componentMap from '../../../../services/componentMap'
import Dynamic from '../../../../components/Dynamic'
import { serializeForm } from '../../../../services/formData'
import { generateQueryUrl } from '../../../../services/queryString'
import WithLang from '../../../../services/lang/WithLang'

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

const ChangePreferences = ({ lang }) => {
  const router = useRouter()
  const [errors, setErrors] = React.useState([])
  const [customPageProps, setCustomPageProps] = React.useState({})
  const [uiStage, setUiStage] = React.useState('')
  const [uiFeatures, setUiFeatures] = React.useState([])
  const [uiElements, setUiElements] = React.useState([])
  const [submitData, setSubmitData] = React.useState((formData) => {})
  const headingCount = useMemo(() => new HeadingCount(), [])
  const { pageStep = '', action } = router.query

  React.useEffect(() => {
    const journeyName = FORGEROCK_TREE_CHANGE_PREFS
    headingCount.reset()

    if (!pageStep || !action) return

    if (pageStep === '_restart') {
      router.replace('/account/manage/change-preferences/_start/')
      return
    }

    setErrors([])

    const stepOptions = {
      query: {
        ForceAuth: true,
        action
      }
    }

    forgerockFlow({
      journeyName,
      journeyNamespace: 'CHANGE_CONSENT_UPDATES',
      lang,
      stepOptions,
      onFailure: (errData, newErrors = []) => {
        // We only get here if there was a fatal error signal from the forgerock client library
        // all other errors are not considered a failure (such as incorrectly formatted inputs etc
        // and are handled gracefully by the onUpdateUi function
        setErrors(newErrors)

        let stage = 'CHANGE_CONSENT_UPDATES'
        newErrors.forEach((error) => {
          if (error.stage) {
            stage = error.stage
          }
        })
        setUiFeatures(getStageFeatures(lang, stage))
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

        stepCustomPageProps.changeSuccessPath = generateQueryUrl('/account/manage/', {
          notifyToken: 'changePreferencesSuccess'
        })

        // Update the errors for the page
        setErrors((currentErrorsArray) => {
          return [...currentErrorsArray, ...stepErrors]
        })

        setCustomPageProps(stepCustomPageProps)
        setUiStage(stage)
        setUiFeatures(getStageFeatures(lang, stage))
        setUiElements(step.callbacks)
        setSubmitData(() => submitDataFunc)
      }
    })
  }, [pageStep, headingCount, lang, router, action])

  const onSubmit = (evt) => {
    evt.preventDefault()
    setErrors([])

    const formData = serializeForm(evt.target)
    const stepOptions = {
      query: {
        ForceAuth: true,
        action
      }
    }
    submitData(formData, stepOptions)
  }

  // Check if the router has been initialised yet
  if (!pageStep) return null

  return (
    <FeatureDynamicView
      width='two-thirds'
      titleLinkHref="/account/home"
      onSubmit={onSubmit}
      hasAccountLinks
      accountLinksItem={5}
    >
      <Dynamic
        {...customPageProps}
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

export default WithLang(ChangePreferences)

ChangePreferences.propTypes = {
  lang: PropTypes.string.isRequired
}
