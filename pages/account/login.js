import PropTypes from 'prop-types'
import React, { useMemo, useEffect } from 'react'
import { useRouter } from 'next/router'
import { findCustomPageProps, findCustomStage, forgerockFlow } from '../../services/forgerock'
import HeadingCount from '../../services/HeadingCount'
import { CH_REQUEST_AUTH_CODE_URL, FORGEROCK_TREE_LOGIN } from '../../services/environment'
import { getStageFeatures } from '../../services/translate'
import FeatureDynamicView from '../../components/views/FeatureDynamicView'
import WithLang from '../../services/lang/WithLang'
import componentMap from '../../services/componentMap'
import Dynamic from '../../components/Dynamic'
import withQueryParams from '../../components/providers/WithQueryParams'
import { serializeForm } from '../../services/formData'

const navMap = {
  EWF_LOGIN_2: 'EWF_LOGIN_1',
  EWF_LOGIN_3: 'EWF_LOGIN_2',
  EWF_LOGIN_4: 'EWF_LOGIN_3',
  EWF_LOGIN_5: 'EWF_LOGIN_4'
}

const Login = ({ lang, queryParams }) => {
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
    goto,
    initStage,
    overrideStage = '',
    authIndexValue,
    mode
  } = queryParams

  useEffect(() => {
    headingCount.reset()

    forgerockFlow({
      journeyName: authIndexValue || FORGEROCK_TREE_LOGIN,
      journeyNamespace: 'LOGIN',
      initialStep: initStage || undefined,
      isAuthOnly: mode === 'AUTHN_ONLY',
      lang,
      onSuccess: () => {
        if (goto) {
          return push(goto)
        }
        push('/account/home')
      },
      onFailure: (errData, newErrors = []) => {
        setErrors(newErrors)
        setUiFeatures(getStageFeatures(lang, overrideStage || 'CH_LOGIN_1'))
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

        if (stage === 'EWF_LOGIN_3') {
          stepCustomPageProps.chooseCompanyPath = `${asPath}&initStage='EWF_LOGIN_2'`
        }

        if (stage === 'EWF_LOGIN_4') {
          stepCustomPageProps.requestAuthCodePath = CH_REQUEST_AUTH_CODE_URL
        }

        // Update the errors for the page
        setErrors((currentErrorsArray) => {
          return [...currentErrorsArray, ...stepErrors]
        })

        setCustomPageProps(stepCustomPageProps)
        setUiStage(step.payload.stage)
        setUiFeatures(getStageFeatures(lang, overrideStage || stage))
        setUiElements(step.callbacks)
        setSubmitData(() => submitDataFunc)
      }
    })
  }, [overrideStage, headingCount, lang, goto, authIndexValue, mode, push])

  const onBack = (evt) => {
    evt.preventDefault()
    push(`${asPath}&initStage=${navMap[uiStage]}`)
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
    setErrors([])

    const formData = serializeForm(evt.target)
    submitData(formData)
  }

  return (
    <FeatureDynamicView
      onBack={onBack}
      onSubmit={onSubmit}
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
      />
    </FeatureDynamicView>
  )
}

export { Login }

export default withQueryParams(WithLang(Login))

Login.propTypes = {
  lang: PropTypes.string,
  queryParams: PropTypes.object
}
