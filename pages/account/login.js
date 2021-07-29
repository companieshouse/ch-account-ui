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
import { serializeForm, customValidation } from '../../services/formData'
import { translateErrors } from '../../services/errors'
import { companyTypeMapping, mapCompanyData } from '../../services/mappings'

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
    overrideStage = '',
    companyNo,
    jurisdiction
  } = queryParams

  useEffect(() => {
    headingCount.reset()

    const links = {
      chooseCompanyPath: `${asPath}`,
      requestAuthCodePath: CH_EWF_REQUEST_AUTH_CODE_URL,
      ewfLegacyAuthUrl: CH_EWF_LEGACY_AUTH_URL,
      resumePath: authIndexValue === FORGEROCK_TREE_WF_LOGIN ? asPath : '/account/login/'
    }

    forgerockFlow({
      journeyName: authIndexValue || FORGEROCK_TREE_WF_LOGIN,
      journeyNamespace: 'LOGIN',
      isAuthOnly: mode === 'AUTHN_ONLY',
      lang,
      stepOptions: {
        query: {
          ForceAuth: true,
          companyNo,
          jurisdiction
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
        setCustomPageProps({ links })
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

        if (stepCustomPageProps?.company) {
          stepCustomPageProps.company = mapCompanyData(stepCustomPageProps.company)
        }

        setErrors(stepErrors)
        setCustomPageProps({ ...stepCustomPageProps, links })
        setUiStage(step.payload.stage)
        setUiElements(step.callbacks)
        setSubmitData(() => submitDataFunc)
      }
    })
  }, [asPath, overrideStage, headingCount, goto, authIndexValue, mode, push])

  useEffect(() => {
    setUiFeatures(getStageFeatures(lang, overrideStage || uiStage))
  }, [lang, uiStage, overrideStage])

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
    submitData(formData, {
      query: {
        companyNo,
        jurisdiction
      }
    })
  }

  const onSecondarySubmit = (evt, params) => {
    evt.preventDefault()
    document.getElementsByName(params.target)[0].value = params.value
    onSubmit()
  }

  const onBack = (evt, params) => {
    evt.preventDefault()
    push(authIndexValue === FORGEROCK_TREE_WF_LOGIN ? asPath : '/account/login/')
  }

  if (!uiStage) {
    return null
  }

  return (
    <FeatureDynamicView
      onSubmit={onSubmit}
      formRef={formRef}
      onBack={onBack}
      hasBackLink={uiStage !== 'CH_LOGIN_1' && uiStage !== 'EWF_LOGIN_1'}
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
