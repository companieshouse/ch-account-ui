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
  /* eslint-disable no-unused-vars */
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
    journeyName: authIndexValue || FORGEROCK_TREE_LOGIN,
    journeyNamespace: 'CHS LOGIN',
    isAuthOnly: mode === 'AUTHN_ONLY',
    defaultErrorStage: 'NO_SESSION_ERROR',
    lang,
    formRef,
    stepQuery: {
      companyNo,
      ForceAuth,
      jurisdiction,
      ...queryParams
    },
    handleSuccess: (branch) => {
      if (goto) {
        log.debug('GOTO: ', goto)
        // CHLogin journey ONLY
        // does the user have a session, if so send them to the redirect_uri
        if (branch === '/hassession') {
          let backToApp = ''
          const params = goto.split('&')

          params.map(param => {
            const split = param.split('=')
            if (split[0] === 'redirect_uri') {
              log.debug('push to ', split[1])
              backToApp = split[1]
            }

            return split.join('=')
          })

          if (backToApp !== '') {
            push(backToApp)
          }
          log.debug('/hassession branch backToApp: ', backToApp)
        } else {
          if (branch) {
            log.debug('NO SESSION: branch is defined: ', branch)
            return push(goto)
          }
        }
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

export default withQueryParams(WithLang(CHSLogin))

CHSLogin.propTypes = {
  lang: PropTypes.string,
  queryParams: PropTypes.object
}
