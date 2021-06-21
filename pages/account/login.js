import PropTypes from 'prop-types'
import React, { useMemo, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { findCustomPageProps, findCustomStage, forgerockFlow } from '../../services/forgerock'
import HeadingCount from '../../services/HeadingCount'
import {
  CH_EWF_LEGACY_AUTH_URL,
  CH_EWF_REQUEST_AUTH_CODE_URL,
  FORGEROCK_TREE_WF_LOGIN,
  FORGEROCK_TREE_LOGIN
} from '../../services/environment'
import { getStageFeatures } from '../../services/translate'
import FeatureDynamicView from '../../components/views/FeatureDynamicView'
import WithLang from '../../services/lang/WithLang'
import componentMap from '../../services/componentMap'
import Dynamic from '../../components/Dynamic'
import withQueryParams from '../../components/providers/WithQueryParams'
import { serializeForm } from '../../services/formData'

const Login = ({ lang, queryParams }) => {
  const router = useRouter()
  const formRef = useRef()
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
    authIndexValue,
    mode,
    overrideStage = ''
  } = queryParams

  useEffect(() => {
    headingCount.reset()

    forgerockFlow({
      journeyName: authIndexValue || FORGEROCK_TREE_LOGIN,
      journeyNamespace: 'LOGIN',
      isAuthOnly: mode === 'AUTHN_ONLY',
      lang,
      stepOptions: {
        query: {
          ForceAuth: true
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

        let stage = overrideStage || 'CH_LOGIN_1'
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

        stepCustomPageProps.links = {
          chooseCompanyPath: `${asPath}`,
          requestAuthCodePath: CH_EWF_REQUEST_AUTH_CODE_URL,
          ewfLegacyAuthUrl: CH_EWF_LEGACY_AUTH_URL,
          restartPath: authIndexValue === FORGEROCK_TREE_WF_LOGIN ? asPath : '/account/login/'
        }

        setErrors(stepErrors)
        setCustomPageProps(stepCustomPageProps)
        setUiStage(step.payload.stage)
        setUiFeatures(getStageFeatures(lang, overrideStage || stage))
        setUiElements(step.callbacks)
        setSubmitData(() => submitDataFunc)
      }
    })
  }, [asPath, overrideStage, headingCount, lang, goto, authIndexValue, mode, push])

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
      onSubmit={onSubmit}
      formRef={formRef}
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

export { Login }

export default withQueryParams(WithLang(Login))

Login.propTypes = {
  lang: PropTypes.string,
  queryParams: PropTypes.object
}
