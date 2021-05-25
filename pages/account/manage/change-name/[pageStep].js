import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import HeadingCount from '../../../../services/HeadingCount'
import { findCustomPageProps, findCustomStage, forgerockFlow } from '../../../../services/forgerock'
import { FORGEROCK_TREE_CHANGE_NAME, ID_COOKIE_NAME } from '../../../../services/environment'
import { useRouter } from 'next/router'
import { getStageFeatures } from '../../../../services/translate'
import FeatureDynamicView from '../../../../components/views/FeatureDynamicView'
import componentMap from '../../../../services/componentMap'
import Dynamic from '../../../../components/Dynamic'
import { serializeForm } from '../../../../services/formData'
import { generateQueryUrl } from '../../../../services/queryString'
import { useCookies } from 'react-cookie'
import WithLang from '../../../../services/lang/WithLang'
import WithProfile from '../../../../components/providers/WithProfile'

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

const ChangeName = ({ lang, profile }) => {
  const router = useRouter()
  const [, setCookie] = useCookies()
  const [errors, setErrors] = React.useState([])
  const [customPageProps, setCustomPageProps] = React.useState({})
  const [uiStage, setUiStage] = React.useState('')
  const [uiFeatures, setUiFeatures] = React.useState([])
  const [uiElements, setUiElements] = React.useState([])
  const [submitData, setSubmitData] = React.useState((formData) => {})
  const headingCount = useMemo(() => new HeadingCount(), [])
  const givenName = profile?.given_name

  const { pageStep = '', service = '', token, overrideStage = '' } = router.query

  React.useEffect(() => {
    const journeyName = FORGEROCK_TREE_CHANGE_NAME
    headingCount.reset()
    if (!pageStep) return

    if (pageStep === '_restart') {
      router.replace('/account/manage/change-name/_start/')
      return
    }

    setErrors([])

    const stepOptions = {
      query: {
        token
      }
    }

    forgerockFlow({
      journeyName,
      journeyNamespace: 'CHANGE_NAME',
      lang,
      stepOptions,
      onUpdateUser: (currentUser) => {
        setCookie(ID_COOKIE_NAME, currentUser, { path: '/' })
      },
      onFailure: (errData, newErrors = []) => {
        // We only get here if there was a fatal error signal from the forgerock client library
        // all other errors are not considered a failure (such as incorrectly formatted inputs etc
        // and are handled gracefully by the onUpdateUi function
        setErrors(newErrors)
        setUiFeatures(getStageFeatures(lang, overrideStage || 'CHANGE_NAME_1'))
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

        if (givenName) {
          stepCustomPageProps.profileName = givenName
        }

        stepCustomPageProps.changeSuccessPath = generateQueryUrl('/account/manage/', {
          notifyToken: 'changeNameSuccess'
        })

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
  }, [pageStep, overrideStage, service, token, givenName, headingCount, lang, setCookie, router])

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
      titleLinkHref="/account/home"
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
        {...router.query}
      />
    </FeatureDynamicView>
  )
}

export default WithProfile(WithLang(ChangeName))

ChangeName.propTypes = {
  lang: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired
}
