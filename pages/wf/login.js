import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import Router from 'next/router'
import { findCustomPageProps, forgerockFlow } from '../../services/forgerock'
import HeadingCount from '../../services/HeadingCount'
import { CH_COOKIE_NAME, ID_COOKIE_NAME, FORGEROCK_TREE_WF_LOGIN } from '../../services/environment'
import { getStageFeatures } from '../../services/translate'
import FeatureDynamicView from '../../components/views/FeatureDynamicView'
import WithLang from '../../services/lang/WithLang'
import { useCookies } from 'react-cookie'
import componentMap from '../../services/componentMap'
import Dynamic from '../../components/Dynamic'
import withQueryParams from '../../components/providers/WithQueryParams'
import { serializeForm } from '../../services/formData'

const Login = ({ lang, queryParams }) => {
  const [, setCookie] = useCookies()
  const [customPageProps, setCustomPageProps] = React.useState({})
  const [errors, setErrors] = React.useState([])
  const [uiStage, setUiStage] = React.useState('')
  const [uiFeatures, setUiFeatures] = React.useState([])
  const [uiElements, setUiElements] = React.useState([])
  const [submitData, setSubmitData] = React.useState((formData) => {})
  const headingCount = useMemo(() => new HeadingCount(), [])

  const {
    goto,
    notifyType,
    notifyHeading,
    notifyTitle,
    notifyChildren,
    overrideStage = ''
  } = queryParams

  React.useEffect(() => {
    headingCount.reset()
    forgerockFlow({
      journeyName: FORGEROCK_TREE_WF_LOGIN,
      journeyNamespace: 'WF_LOGIN',
      lang,
      onSuccess: (loginData) => {
        // Set auth cookie
        setCookie(CH_COOKIE_NAME, loginData.tokens.accessToken, { path: '/' })
        setCookie(ID_COOKIE_NAME, loginData.currentUser, { path: '/' })

        if (goto) {
          return Router.push(goto)
        }

        Router.push('/account/home')
      },
      onFailure: (errData, newErrors = []) => {
        setErrors(newErrors)
        setUiFeatures(getStageFeatures(lang, overrideStage || 'WF_LOGIN_1'))
      },
      onUpdateUi: (step, submitDataFunc, stepErrors = []) => {
        const stepCustomPageProps = findCustomPageProps(step)

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
        setUiStage(step.payload.stage)
        setUiFeatures(getStageFeatures(lang, overrideStage || step.payload.stage))
        setUiElements(step.callbacks)
        setSubmitData(() => submitDataFunc)
      }
    })
  }, [overrideStage, notifyType, notifyHeading, notifyTitle, notifyChildren, headingCount, lang, goto, setCookie])

  const onSubmit = (evt) => {
    evt.preventDefault()
    setErrors([])

    const formData = serializeForm(evt.target)
    submitData(formData)
  }

  return (
    <FeatureDynamicView
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

export default withQueryParams(WithLang(Login))

Login.propTypes = {
  lang: PropTypes.string,
  queryParams: PropTypes.object
}
