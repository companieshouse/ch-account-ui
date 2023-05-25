import PropTypes from 'prop-types'
import React, { useMemo, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import HeadingCount from '../../services/HeadingCount'
import {
  CH_EWF_LEGACY_AUTH_URL,
  FORGEROCK_TREE_WF_LOGIN
} from '../../services/environment'
import FeatureDynamicView from '../../components/views/FeatureDynamicView'
import WithLang from '../../services/lang/WithLang'
import componentMap from '../../services/componentMap'
import Dynamic from '../../components/Dynamic'
import withQueryParams from '../../components/providers/WithQueryParams'
import useFRFlow from '../../services/useFRFlow'
import { generateQueryUrl } from '../../services/queryString'
import { mapCompanyData } from '../../services/mappings'

const Login = ({ lang, queryParams }) => {
  const router = useRouter()
  const formRef = useRef()
  const headingCount = useMemo(() => new HeadingCount(), [])
  const { asPath, push } = router

  const {
    goto,
    authIndexValue,
    ForceAuth,
    mode,
    companyNo,
    jurisdiction
  } = queryParams

  useEffect(() => {
    headingCount.reset()
  })

  const FRFlowConfig = {
    journeyName: authIndexValue || FORGEROCK_TREE_WF_LOGIN,
    journeyNamespace: 'LOGIN',
    isAuthOnly: mode === 'AUTHN_ONLY',
    defaultErrorStage: 'NO_SESSION_ERROR',
    lang,
    formRef,
    stepQuery: {
      companyNo,
      ForceAuth,
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

  const isCompanySelection = uiStage === 'EWF_LOGIN_2' || uiStage === 'EWF_LOGIN_3' || uiStage === 'EWF_LOGIN_4' || uiStage === 'EWF_LOGIN_5'

  const onBack = (evt) => {
    evt.preventDefault()
    const home = isCompanySelection ? '/account/home/' : '/account/login/'
    window.location.assign(authIndexValue === FORGEROCK_TREE_WF_LOGIN ? asPath : home)
  }

  const links = {
    chooseCompanyPath: `${asPath}`,
    requestAuthCodePath: generateQueryUrl('/account/request-auth-code', { companyName: stepPageProps.company?.name }),
    ewfLegacyAuthUrl: CH_EWF_LEGACY_AUTH_URL,
    resumePath: authIndexValue === FORGEROCK_TREE_WF_LOGIN ? asPath : '/account/login/'
  }

  const { errors = [], company, ...restPageProps } = stepPageProps

  useEffect(() => {
    if (uiStage === 'EWF_LOGIN_5') {
      sessionStorage.setItem('refresh', true)
    }
  }, [uiStage])

  return (
    <FeatureDynamicView
      onSubmit={onSubmit}
      formRef={formRef}
      onBack={onBack}
      hasBackLink={false}
      hasLogoutLink={isCompanySelection || uiStage === 'EWF_PROFILE'}
      hasAccountLinks={isCompanySelection}
    >
      {uiStage
        ? <Dynamic
        {...restPageProps}
        {...queryParams}
        componentMap={componentMap}
        content={uiFeatures}
        company={company ? mapCompanyData(company) : null}
        errors={errors}
        handlers={restHandlers}
        headingCount={headingCount}
        links={links}
        loading={loading}
        uiElements={uiElements}
        uiStage={uiStage}
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
