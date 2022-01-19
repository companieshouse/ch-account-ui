import PropTypes from 'prop-types'
import React, { useEffect, useMemo, useRef } from 'react'
import { useRouter } from 'next/router'
import { CH_EWF_AUTHENTICATED_ENTRY_URL, CH_EWF_LEGACY_AUTH_URL, FORGEROCK_TREE_SCRS_ACTIVATION } from '../../../services/environment'
import Dynamic from '../../../components/Dynamic'
import WithQueryParams from '../../../components/providers/WithQueryParams'
import FeatureDynamicView from '../../../components/views/FeatureDynamicView'
import HeadingCount from '../../../services/HeadingCount'
import WithLang from '../../../services/lang/WithLang'
import useFRFlow from '../../../services/useFRFlow'
import componentMap from '../../../services/componentMap'

const Scrs = ({ lang, queryParams }) => {
  const formRef = useRef()
  const router = useRouter()
  const { push } = router
  const headingCount = useMemo(() => new HeadingCount(), [])
  const { goto, token, _id, companyNo, tokenId } = queryParams

  useEffect(() => {
    headingCount.reset()
  })

  const FRFlowConfig = {
    journeyName: FORGEROCK_TREE_SCRS_ACTIVATION,
    journeyNameSpace: 'SCRS_EXISTING_USER',
    defaultErrorStage: 'SCRS_ERROR',
    lang,
    formRef,
    stepQuery: {
      token,
      ForceAuth: true,
      _id,
      companyNo,
      tokenId
    },
    handleSuccess: () => {
      if (goto) {
        return push(goto)
      }
      push('/account/notifications')
    }
  }

  const { uiFeatures, uiElements, uiStage, stepPageProps, flowHandlers, loading } = useFRFlow(FRFlowConfig)
  const { errors = [], ...restPageProps } = stepPageProps
  const { onSubmit, onReset, ...restHandlers } = flowHandlers

  return (
    <FeatureDynamicView
      formRef={formRef}
      onSubmit={onSubmit}
      hasBackLink={uiStage !== 'SCRS_ERROR'}
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
        links={{ ewfAuthenticatedEntry: CH_EWF_AUTHENTICATED_ENTRY_URL, ewfLegacyAuthUrl: CH_EWF_LEGACY_AUTH_URL }}
        loading={loading}
        uiElements={uiElements}
        uiStage={uiStage}
        />
        : null}
    </FeatureDynamicView>
  )
}

export { Scrs }

export default WithQueryParams(WithLang(Scrs))

Scrs.propTypes = {
  lang: PropTypes.string,
  queryParams: PropTypes.object
}
