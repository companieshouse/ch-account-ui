import PropTypes from 'prop-types'
import React, { useCallback, useState, useMemo } from 'react'
import { FORGEROCK_TREE_INVITE_USER } from '../../../services/environment'
import { findCustomPageProps, findCustomStage, findNotificationId, forgerockFlow } from '../../../services/forgerock'
import Router, { useRouter } from 'next/router'
import { getStageFeatures } from '../../../services/translate'
import FeatureDynamicView from '../../../components/views/FeatureDynamicView'
import Dynamic from '../../../components/Dynamic'
import componentMap from '../../../services/componentMap'
import WithLang from '../../../services/lang/WithLang'
import HeadingCount from '../../../services/HeadingCount'
import { serializeForm } from '../../../services/formData'
import { generateQueryUrl } from '../../../services/queryString'
import log from '../../../services/log'

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { pageStep: '_start' } }
    ],
    fallback: false
  }
}

export const getStaticProps = async () => {
  return { props: {} }
}

const InviteUser = ({ lang }) => {
  const router = useRouter()
  const [uiFeatures, setUiFeatures] = useState([])
  const [uiElements, setUiElements] = useState([])
  const [errors, setErrors] = useState([])
  const [uiStage, setUiStage] = useState('')
  const [customPageProps, setCustomPageProps] = useState({})
  const [submitData, setSubmitData] = useState((formData, stepOptions) => {})

  const { pageStep = '', service = '', token, overrideStage = '', companyNumber, action } = router.query

  const headingCount = useMemo(() => new HeadingCount(), [])

  const getStepOptions = useCallback(() => {
    const requestQuery = { companyNumber: companyNumber, token }
    if (action) {
      requestQuery.action = action
    }
    return { query: requestQuery }
  }, [companyNumber, token, action])

  React.useEffect(() => {
    headingCount.reset()

    const journeyName = FORGEROCK_TREE_INVITE_USER
    const stepOptions = getStepOptions()

    log.debug(`Staring FR with pageStep "${pageStep}", journey "${journeyName}", stepOptions:`, stepOptions)

    forgerockFlow({
      journeyName,
      journeyNamespace: 'INVITE_USER',
      lang,
      stepOptions,
      onSuccess: () => {
        Router.push('/account/your-companies')
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

        // Setup success URL for step 2 redirect
        if (stage === 'INVITE_USER_2') {
          const notificationId = findNotificationId(step)
          stepCustomPageProps.authoriseSuccessPath = generateQueryUrl('/account/your-companies/', {
            notifyToken: 'authSuccess',
            notifyId: notificationId,
            invitedUser: stepCustomPageProps.invitedUser,
            companyName: stepCustomPageProps.company.name
          })
        }

        // Setup success URL for step 3 (accept) redirect
        if (stage === 'INVITE_USER_3') {
          stepCustomPageProps.acceptSuccessPath = generateQueryUrl('/account/your-companies/', {
            notifyToken: `${action}Success`,
            companyName: stepCustomPageProps.company.name
          })
        }

        if (stepCustomPageProps?.apiError) {
          // Transform the apiError structure to the app's errors array structure
          const apiErrorsAsAppErrors = stepCustomPageProps.apiError.errors.map((errorItem) => ({
            label: errorItem.message
          }))

          stepErrors.push(...apiErrorsAsAppErrors)
        }

        // // Update the errors for the page
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
  }, [pageStep, overrideStage, service, token, getStepOptions, headingCount, lang])

  const onSubmit = (evt) => {
    evt.preventDefault()
    setErrors([])

    const formData = serializeForm(evt.target)
    const stepOptions = getStepOptions()
    submitData(formData, stepOptions)
  }

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
        {...router.query}
        {...customPageProps}
        componentMap={componentMap}
        headingCount={headingCount}
        content={uiFeatures}
        uiElements={uiElements}
        uiStage={uiStage}
        errors={errors}
      />
    </FeatureDynamicView>
  )
}

InviteUser.propTypes = {
  lang: PropTypes.string
}

export default WithLang(InviteUser)
