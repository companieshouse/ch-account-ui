import PropTypes from 'prop-types'
import React, { useEffect, useMemo, useRef } from 'react'
import HeadingCount from '../../../../services/HeadingCount'
import { FORGEROCK_TREE_CHANGE_PASSWORD } from '../../../../services/environment'
import { useRouter } from 'next/router'
import FeatureDynamicView from '../../../../components/views/FeatureDynamicView'
import WithLang from '../../../../services/lang/WithLang'
import componentMap from '../../../../services/componentMap'
import Dynamic from '../../../../components/Dynamic'
import { generateQueryUrl } from '../../../../services/queryString'
import useFRFlow from '../../../../services/useFRFlow'

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

const ChangePassword = ({ lang }) => {
  const router = useRouter()
  const formRef = useRef()
  const headingCount = useMemo(() => new HeadingCount(), [])
  const { push, query } = router
  const { pageStep } = query

  useEffect(() => {
    headingCount.reset()
  })

  const FRFlowConfig = {
    journeyName: FORGEROCK_TREE_CHANGE_PASSWORD,
    journeyNamespace: 'CHANGE_PASSWORD',
    defaultErrorStage: 'CHANGE_PASSWORD_1',
    lang,
    formRef,
    pageStep,
    handleSuccess: () => {
      push('/account/home/')
    }
  }
  const { uiFeatures, uiElements, uiStage, stepPageProps, flowHandlers, loading } = useFRFlow(FRFlowConfig)

  stepPageProps.changeSuccessPath = generateQueryUrl('/account/manage/', {
    notifyToken: 'changePasswordSuccess'
  })

  const { onSubmit, ...restHandlers } = flowHandlers
  const { errors = [], ...restPageProps } = stepPageProps

  return (
    <FeatureDynamicView
      formRef={formRef}
      width='two-thirds'
      onSubmit={onSubmit}
      onBack={() => { push('/account/manage') }}
      headingCount={headingCount}
      hasLogoutLink={true}
      hasAccountLinks
      accountLinksItem={6}
    >
      <Dynamic
        {...restPageProps}
        {...query}
        componentMap={componentMap}
        headingCount={headingCount}
        content={uiFeatures}
        errors={errors}
        loading={loading}
        handlers={restHandlers}
        uiElements={uiElements}
        uiStage={uiStage}
      />
    </FeatureDynamicView>
  )
}

export default WithLang(ChangePassword)

ChangePassword.propTypes = {
  lang: PropTypes.string.isRequired
}
