import PropTypes from 'prop-types'
import React, { useMemo, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import HeadingCount from '../../services/HeadingCount'
import {
  CH_EWF_LEGACY_AUTH_URL,
  CH_EWF_REQUEST_AUTH_CODE_URL,
  FORGEROCK_TREE_WF_LOGIN
} from '../../services/environment'
import FeatureDynamicView from '../../components/views/FeatureDynamicView'
import WithLang from '../../services/lang/WithLang'
import componentMap from '../../services/componentMap'
import Dynamic from '../../components/Dynamic'
import withQueryParams from '../../components/providers/WithQueryParams'
import useFRFlow from '../../services/useFRFlow'

const Login = ({ lang, queryParams }) => {
  const router = useRouter()
  const formRef = useRef()
  const headingCount = useMemo(() => new HeadingCount(), [])
  const { asPath, push } = router

  const {
    goto,
    authIndexValue,
    mode,
    companyNo,
    jurisdiction
  } = queryParams

  const links = {
    chooseCompanyPath: `${asPath}`,
    requestAuthCodePath: CH_EWF_REQUEST_AUTH_CODE_URL,
    ewfLegacyAuthUrl: CH_EWF_LEGACY_AUTH_URL,
    resumePath: authIndexValue === FORGEROCK_TREE_WF_LOGIN ? asPath : '/account/login/'
  }

  useEffect(() => {
    headingCount.reset()
  })

  const FRFlowConfig = {
    journeyName: authIndexValue || FORGEROCK_TREE_WF_LOGIN,
    journeyNamespace: 'LOGIN',
    isAuthOnly: mode === 'AUTHN_ONLY',
    defaultErrorStage: 'EWF_LOGIN_1',
    lang,
    formRef,
    stepQuery: {
      companyNo,
      jurisdiction
    },
    handleSuccess: () => {
      if (goto) {
        return push(goto)
      }
      push('/account/home/')
    }
  }

  const { uiFeatures, uiElements, uiStage, stepPageProps, flowHandlers, loading } = useFRFlow(FRFlowConfig)

  const { onSubmit, ...restHandlers } = flowHandlers

  const onBack = (evt) => {
    evt.preventDefault()
    window.location.assign(authIndexValue === FORGEROCK_TREE_WF_LOGIN ? asPath : '/account/login/')
  }

  const { errors = [], ...restPageProps } = stepPageProps

  return (
    <FeatureDynamicView
      onSubmit={onSubmit}
      formRef={formRef}
      onBack={onBack}
      hasBackLink={uiStage !== 'CH_LOGIN_1' && uiStage !== 'EWF_LOGIN_1'}
      hasAccountLinks={uiStage === 'EWF_LOGIN_2' || uiStage === 'EWF_LOGIN_3' || uiStage === 'EWF_LOGIN_4' || uiStage === 'EWF_LOGIN_5'}
    >
      {uiStage
        ? <Dynamic
        {...restPageProps}
        {...queryParams}
        componentMap={componentMap}
        headingCount={headingCount}
        content={uiFeatures}
        errors={errors}
        uiElements={uiElements}
        uiStage={uiStage}
        handlers={restHandlers}
        links={links}
        loading={loading}
      />
        : null}
    </FeatureDynamicView>
  )
}

export { Login }

export default withQueryParams(WithLang(Login))

Login.propTypes = {
  lang: PropTypes.string,
  queryParams: PropTypes.object
}
