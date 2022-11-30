import PropTypes from 'prop-types'
import React, { useMemo, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import HeadingCount from '../../../services/HeadingCount'
import {
  CH_CONSENT
} from '../../../services/environment'
import FeatureDynamicView from '../../../components/views/FeatureDynamicView'
import WithLang from '../../../services/lang/WithLang'
import componentMap from '../../../services/componentMap'
import Dynamic from '../../../components/Dynamic'
import withQueryParams from '../../../components/providers/WithQueryParams'
import useFRFlow from '../../../services/useFRFlow'
import log from '../../../services/log'

const CHConsent = ({ lang, queryParams }) => {
  const router = useRouter()
  const formRef = useRef()
  const headingCount = useMemo(() => new HeadingCount(), [])
  const { push } = router

  const {
    goto,
    authIndexValue,
    ForceAuth,
    mode
  } = queryParams

  useEffect(() => {
    headingCount.reset()
  })

  const FRFlowConfig = {
    journeyName: authIndexValue || CH_CONSENT,
    journeyNamespace: 'CHS CONSENT',
    isAuthOnly: mode === 'AUTHN_ONLY',
    defaultErrorStage: 'NO_SESSION_ERROR',
    lang,
    formRef,
    stepQuery: {
      goto,
      authIndexValue,
      ForceAuth,
      mode
    },
    handleSuccess: (branch) => {
      if (goto) {
        return push(goto)
      }
      log.debug('CONSENT JOURNEY COMPLETE AND SUCCESSFULL')
      log.debug('branch: consent: ', branch)
    }
  }

  log.debug(FRFlowConfig)

  const { uiFeatures, uiElements, uiStage, stepPageProps, flowHandlers, loading } = useFRFlow(FRFlowConfig)

  const { onSubmit, ...restHandlers } = flowHandlers

  const { errors = [], ...restPageProps } = stepPageProps

  return (
    <FeatureDynamicView
      onSubmit={onSubmit}
      formRef={formRef}
      hasBackLink={false}
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
        loading={loading}
        uiElements={uiElements}
        uiStage={uiStage}
      />
        : null}
    </FeatureDynamicView>
  )
}

export default withQueryParams(WithLang(CHConsent))

CHConsent.propTypes = {
  lang: PropTypes.string,
  queryParams: PropTypes.object
}
