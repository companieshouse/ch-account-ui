import PropTypes from 'prop-types'
import React, { useMemo, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { findCustomPageProps, findCustomStage, findNotificationId, forgerockFlow } from '../../../services/forgerock'
import HeadingCount from '../../../services/HeadingCount'
import { getStageFeatures } from '../../../services/translate'
import FeatureDynamicView from '../../../components/views/FeatureDynamicView'
import WithLang from '../../../services/lang/WithLang'
import componentMap from '../../../services/componentMap'
import Dynamic from '../.././../components/Dynamic'
import withQueryParams from '../../../components/providers/WithQueryParams'
import { serializeForm } from '../../../services/formData'
import { translateErrors } from '../../../services/errors'
import { FORGEROCK_TREE_REMOVE_AUTHORISED_USER } from '../../../services/environment'
import { generateQueryUrl } from '../../../services/queryString'

const RemoveAuthorisedPerson = ({ lang, queryParams }) => {
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
  const onSubmitCallbacks = []

  const { companyNumber, userId } = queryParams

  useEffect(() => {
    headingCount.reset()

    const stepOptions = {
      query: {
        companyNumber,
        userId,
        ForceAuth: true
      }
    }

    forgerockFlow({
      journeyName: FORGEROCK_TREE_REMOVE_AUTHORISED_USER,
      journeyNamespace: 'REMOVE_USER',
      lang,
      stepOptions,
      onSuccess: () => {
        push('/account/your-companies/')
      },
      onFailure: (errData, newErrors = []) => {
        setErrors(newErrors)
        setUiFeatures(getStageFeatures(lang, 'REMOVE_USER_CONFIRM'))
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

        stepCustomPageProps.displayName = stepCustomPageProps.invitedUser?.displayName
        stepCustomPageProps.links = {
          removeUserSuccess: generateQueryUrl('/account/your-companies/', {
            notifyToken: 'removeUserSuccess',
            notifyId: findNotificationId(step),
            userName: stepCustomPageProps.user,
            companyName: stepCustomPageProps.company

          })
        }

        setErrors(stepErrors)
        setCustomPageProps(stepCustomPageProps)
        setUiStage(step.payload.stage)
        setUiFeatures(getStageFeatures(lang, stage))
        setUiElements(step.callbacks)
        setSubmitData(() => submitDataFunc)
      }
    })
  }, [companyNumber, userId, asPath, headingCount, lang, push])

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
    submitData(formData, {
      query: {
        companyNumber,
        userId,
        ForceAuth: true
      }
    })
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
      hasAccountLinks
      accountLinksItem={2}
      hasBackLink={false}
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
        handlers={{ onSecondarySubmit, onSubmitCallbacks }}
      />
    </FeatureDynamicView>
  )
}

export { RemoveAuthorisedPerson }

export default withQueryParams(WithLang(RemoveAuthorisedPerson))

RemoveAuthorisedPerson.propTypes = {
  lang: PropTypes.string,
  queryParams: PropTypes.object
}
