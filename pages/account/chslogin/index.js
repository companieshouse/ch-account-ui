import PropTypes from 'prop-types'
import React, { useMemo, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import HeadingCount from '../../../services/HeadingCount'
import {
  CH_EWF_LEGACY_AUTH_URL,
  FORGEROCK_TREE_LOGIN
} from '../../../services/environment'
import FeatureDynamicView from '../../../components/views/FeatureDynamicView'
import WithLang from '../../../services/lang/WithLang'
import componentMap from '../../../services/componentMap'
import Dynamic from '../../../components/Dynamic'
import withQueryParams from '../../../components/providers/WithQueryParams'
import useFRFlow from '../../../services/useFRFlow'
import { generateQueryUrl } from '../../../services/queryString'
import { mapCompanyData } from '../../../services/mappings'
import log from '../../../services/log'

const CHSLogin = ({ lang, queryParams }) => {
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

  log.debug('CHS queryParams: ', queryParams)

  useEffect(() => {
    headingCount.reset()
  })

  log.debug('CHS ForceAuth: ', ForceAuth)

  const FRFlowConfig = {
    journeyName: authIndexValue || FORGEROCK_TREE_LOGIN,
    journeyNamespace: 'CHS LOGIN',
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
      log.debug('CHS handleSuccess: ')
      if (goto) {
        log.debug('CHS goto: ', goto)
        log.debug('CHS mode: ', mode)
        return push('localhost:8090/redirect')
      }
    }
  }

  const { uiFeatures, uiElements, uiStage, stepPageProps, flowHandlers, loading } = useFRFlow(FRFlowConfig)

  const { onSubmit, ...restHandlers } = flowHandlers

  const isCompanySelection = uiStage === 'EWF_LOGIN_2' || uiStage === 'EWF_LOGIN_3' || uiStage === 'EWF_LOGIN_4' || uiStage === 'EWF_LOGIN_5'

  const onBack = (evt) => {
    evt.preventDefault()
    const home = isCompanySelection ? '/account/home/' : '/account/chslogin/'
    window.location.assign(authIndexValue === FORGEROCK_TREE_LOGIN ? asPath : home)
  }

  const links = {
    chooseCompanyPath: `${asPath}`,
    requestAuthCodePath: generateQueryUrl('/account/request-auth-code', { companyName: stepPageProps.company?.name }),
    ewfLegacyAuthUrl: CH_EWF_LEGACY_AUTH_URL,
    resumePath: authIndexValue === FORGEROCK_TREE_LOGIN ? asPath : '/account/chslogin/'
  }

  const { errors = [], company, ...restPageProps } = stepPageProps

  return (
    <FeatureDynamicView
      onSubmit={onSubmit}
      formRef={formRef}
      onBack={onBack}
      hasBackLink={false}
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

export { CHSLogin }

export default withQueryParams(WithLang(CHSLogin))

CHSLogin.propTypes = {
  lang: PropTypes.string,
  queryParams: PropTypes.object
}
