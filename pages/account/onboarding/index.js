import PropTypes from 'prop-types'
import React, { useMemo, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { findCustomPageProps, findCustomStage, forgerockFlow } from '../../../services/forgerock'
import HeadingCount from '../../../services/HeadingCount'
import {
  FORGEROCK_TREE_ONBOARDING
} from '../../../services/environment'
import { getStageFeatures } from '../../../services/translate'
import FeatureDynamicView from '../../../components/views/FeatureDynamicView'
import WithLang from '../../../services/lang/WithLang'
import componentMap from '../../../services/componentMap'
import Dynamic from '../../../components/Dynamic'
import withQueryParams from '../../../components/providers/WithQueryParams'
import { serializeForm } from '../../../services/formData'

const Onboarding = ({ lang, queryParams }) => {
  const formRef = useRef()
  const router = useRouter()
  const { push, asPath } = router
  const [customPageProps, setCustomPageProps] = React.useState({})
  const [errors, setErrors] = React.useState([])
  const [uiStage, setUiStage] = React.useState('')
  const [uiFeatures, setUiFeatures] = React.useState([])
  const [uiElements, setUiElements] = React.useState([])
  const [submitData, setSubmitData] = React.useState((formData) => {})
  const headingCount = useMemo(() => new HeadingCount(), [])

  const {
    overrideStage = '',
    goto,
    token
  } = queryParams

  useEffect(() => {
    headingCount.reset()

    forgerockFlow({
      journeyName: FORGEROCK_TREE_ONBOARDING,
      journeyNamespace: 'ONBOARDING',
      lang,
      stepOptions: {
        query: {
          token
        }
      },
      onSuccess: () => {
        if (goto) {
          return push(goto)
        }
        push('/account/home')
      },
      onFailure: (errData, newErrors = []) => {
        setErrors(newErrors)
        let stage = overrideStage || 'ONBOARDING_PWD'
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

        setErrors(stepErrors)
        setCustomPageProps(stepCustomPageProps)
        setUiStage(step.payload.stage)
        setUiFeatures(getStageFeatures(lang, overrideStage || stage))
        setUiElements(step.callbacks)
        setSubmitData(() => submitDataFunc)
      }
    })
  }, [asPath, overrideStage, headingCount, lang, push])

  const onSubmit = (evt) => {
    evt?.preventDefault()

    setErrors([])

    const formData = serializeForm(formRef.current)
    submitData(formData)
  }

  const onSecondarySubmit = (evt, params) => {
    evt.preventDefault()
    document.getElementsByName(params.target)[0].value = params.value
    onSubmit()
  }

  return (
    <FeatureDynamicView
      formRef={formRef}
      onSubmit={onSubmit}
      hasBackLink={uiStage !== 'ONBOARDING_PWD'}
    >
      <Dynamic
        {...customPageProps}
        {...queryParams}
        componentMap={componentMap}
        headingCount={headingCount}
        content={uiFeatures}
        errors={errors}
        uiElements={uiElements}
        uiStage={uiStage}
        handlers={{ onSecondarySubmit }}
      />
    </FeatureDynamicView>
  )
}

export { Onboarding }

export default withQueryParams(WithLang(Onboarding))

Onboarding.propTypes = {
  lang: PropTypes.string,
  queryParams: PropTypes.object
}
