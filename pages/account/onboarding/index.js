import PropTypes from 'prop-types'
import React, { useMemo, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import HeadingCount from '../../../services/HeadingCount'
import { CH_EWF_AUTHENTICATED_ENTRY_URL, FORGEROCK_TREE_ONBOARDING } from '../../../services/environment'
import FeatureDynamicView from '../../../components/views/FeatureDynamicView'
import WithLang from '../../../services/lang/WithLang'
import componentMap from '../../../services/componentMap'
import Dynamic from '../../../components/Dynamic'
import useFRFlow from '../../../services/useFRFlow'
import WithQueryParams from '../../../components/providers/WithQueryParams'

const Onboarding = ({ lang, queryParams }) => {
  const formRef = useRef()
  const router = useRouter()
  const { push } = router
  const headingCount = useMemo(() => new HeadingCount(), [])
  const { goto, token } = queryParams

  useEffect(() => {
    headingCount.reset()
  })

  const FRFlowConfig = {
    journeyName: FORGEROCK_TREE_ONBOARDING,
    journeyNamespace: 'ONBOARDING',
    defaultErrorStage: 'ONBOARDING_PWD',
    lang,
    formRef,
    stepQuery: {
      token,
      ForceAuth: true
    },
    handleSuccess: () => {
      if (goto) {
        return push(goto)
      }
      push('/account/home/')
    }
  }

  const { uiFeatures, uiElements, uiStage, stepPageProps, flowHandlers, loading } = useFRFlow(FRFlowConfig)
  const { errors = [], ...restPageProps } = stepPageProps
  const { onSubmit, onReset, ...restHandlers } = flowHandlers

  return (
    <FeatureDynamicView
      formRef={formRef}
      onSubmit={onSubmit}
      hasBackLink={false}
      onBack={onReset}
    >
      {uiStage
        ? <Dynamic
        {...restPageProps}
        {...queryParams}
        componentMap={componentMap}
        content={uiFeatures}
        errors={errors}
        handlers={restHandlers}
        headingCount={headingCount}
        links={{ ewfAuthenticatedEntry: CH_EWF_AUTHENTICATED_ENTRY_URL }}
        loading={loading}
        uiElements={uiElements}
        uiStage={uiStage}
      />
        : null }
    </FeatureDynamicView>
  )
}

export { Onboarding }

export default WithQueryParams(WithLang(Onboarding))

Onboarding.propTypes = {
  lang: PropTypes.string,
  queryParams: PropTypes.object
}
