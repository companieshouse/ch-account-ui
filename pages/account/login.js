import PropTypes from 'prop-types'
import React, { useMemo, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import HeadingCount from '../../services/HeadingCount'
import {
  CH_EWF_LEGACY_AUTH_URL,
  FORGEROCK_TREE_WF_LOGIN,
  FORGEROCK_CLIENT_ID,
  FORGEROCK_REALM,
  FORGEROCK_REDIRECT,
  FORGEROCK_SCOPE,
  FORGEROCK_AM
} from '../../services/environment'
import FeatureDynamicView from '../../components/views/FeatureDynamicView'
import WithLang from '../../services/lang/WithLang'
import componentMap from '../../services/componentMap'
import Dynamic from '../../components/Dynamic'
import withQueryParams from '../../components/providers/WithQueryParams'
import useFRFlow from '../../services/useFRFlow'
import { generateQueryUrl } from '../../services/queryString'
import { mapCompanyData } from '../../services/mappings'

// move to external file
import { forgerockFlow, forgerockInit } from '../../services/forgerock'
import { Config, FRAuth, FRCallback, FRCallbackFactory } from '@forgerock/javascript-sdk'
import { findCustomStage } from '../../services/forgerock'
import { getStageFeatures } from '../../services/translate'

import createCallback from '@forgerock/javascript-sdk/lib/fr-auth/callbacks/factory'

export async function getServerSideProps(context) {

  forgerockInit()

  Config.set({
    clientId: FORGEROCK_CLIENT_ID,
    // middleware: [langMiddleware],
    realmPath: FORGEROCK_REALM,
    redirectUri: FORGEROCK_REDIRECT,
    scope: FORGEROCK_SCOPE,
    serverConfig: {
      baseUrl: FORGEROCK_AM,
      timeout: 30000
    },
    tree: FORGEROCK_TREE_WF_LOGIN
  })
  
  const step = await FRAuth.start()

  let errors = [], uiStage, uiElements, uiFeatures, loading = true

  uiStage = step.payload.stage || findCustomStage(step)
  uiElements = step.callbacks
  

  uiElements = step.callbacks.map((callback) => {
    const payload = callback?.payload
    const inputs = payload?.input || []
    return callback
  })

  uiFeatures = getStageFeatures('en', uiStage)
  const frCallback = new FRCallback()

  return {
      props: {
        errors,
        stepProps: [],
        uiStage,
        uiElements: JSON.parse(JSON.stringify(uiElements)),
        uiFeatures: uiFeatures,
        loading
      }
  }
}

const Login = ({ lang, queryParams, uiStage, uiElements, frCallback, uiFeatures, loading }) => {
  const router = useRouter()
  const formRef = useRef()
  const headingCount = useMemo(() => new HeadingCount(), [])
  const { asPath, push } = router

  uiElements = uiElements.map((element) => {
    debugger
    // on each element call the new FRCallback
    // pull out the type
    const type = element.payload.type
    // pull out the output
    const output = element.payload.output
    // pull out the input
    const input = element.payload.input
    // pull out the id
    const id = element.payload._id
    // pass the above into the createCallback call

    const ccb = createCallback({
      type: type,
      input: input,
      output: output,
      _id: id
    })

    return ccb
  })

  console.log('uiElements AFTER FRCallback', uiElements)

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

  

  // const { onSubmit, ...restHandlers } = frFlowProps.flowHandlers

  // const isCompanySelection = uiStage === 'EWF_LOGIN_2' || uiStage === 'EWF_LOGIN_3' || uiStage === 'EWF_LOGIN_4' || uiStage === 'EWF_LOGIN_5'

  // const onBack = (evt) => {
  //   evt.preventDefault()
  //   const home = isCompanySelection ? '/account/home/' : '/account/login/'
  //   window.location.assign(authIndexValue === FORGEROCK_TREE_WF_LOGIN ? asPath : home)
  // }

  // const links = {
  //   chooseCompanyPath: `${asPath}`,
  //   requestAuthCodePath: generateQueryUrl('/account/request-auth-code', { companyName: stepPageProps.company?.name }),
  //   ewfLegacyAuthUrl: CH_EWF_LEGACY_AUTH_URL,
  //   resumePath: authIndexValue === FORGEROCK_TREE_WF_LOGIN ? asPath : '/account/login/'
  // }

  // const { errors = [], company, ...restPageProps } = stepPageProps

  // return (
  //   <FeatureDynamicView
  //     onSubmit={onSubmit}
  //     formRef={formRef}
  //     onBack={onBack}
  //     hasBackLink={false}
  //     hasLogoutLink={isCompanySelection || uiStage === 'EWF_PROFILE'}
  //     hasAccountLinks={isCompanySelection}
  //   >
  //     {uiStage
  //       ? <Dynamic
  //       {...restPageProps}
  //       {...queryParams}
  //       componentMap={componentMap}
  //       content={uiFeatures}
  //       company={company ? mapCompanyData(company) : null}
  //       errors={errors}
  //       handlers={restHandlers}
  //       headingCount={headingCount}
  //       links={links}
  //       loading={loading}
  //       uiElements={uiElements}
  //       uiStage={uiStage}
  //     />
  //       : null}
  //   </FeatureDynamicView>
  // )

  return (
    <FeatureDynamicView>
      {
        uiStage ?
        <Dynamic 
          componentMap={componentMap}
          content={uiFeatures}
          errors={[]}
          uiElements={uiElements}
          uiStage={uiStage}
        /> : 
        null }
    </FeatureDynamicView>
  )
}

export { Login }

export default withQueryParams(WithLang(Login))

Login.propTypes = {
  lang: PropTypes.string,
  queryParams: PropTypes.object
}
