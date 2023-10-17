import PropTypes from 'prop-types'
import React, { useEffect, useMemo, useRef } from 'react'
import HeadingCount from '../../../../services/HeadingCount'
import { FORGEROCK_TREE_CHANGE_NAME } from '../../../../services/environment'
import { useRouter } from 'next/router'
import FeatureDynamicView from '../../../../components/views/FeatureDynamicView'
import componentMap from '../../../../services/componentMap'
import Dynamic from '../../../../components/Dynamic'
import { generateQueryUrl } from '../../../../services/queryString'
import WithLang from '../../../../services/lang/WithLang'
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

const ChangeName = ({ lang }) => {
  const formRef = useRef()
  const router = useRouter()
  const headingCount = useMemo(() => new HeadingCount(), [])
  const { push, query } = router
  const { pageStep, goto } = query

  useEffect(() => {
    headingCount.reset()
  })

  const FRFlowConfig = {
    journeyName: FORGEROCK_TREE_CHANGE_NAME,
    journeyNamespace: 'CHANGE_NAME',
    defaultErrorStage: 'CHANGE_NAME_1',
    lang,
    formRef,
    pageStep,
    handleSuccess: () => {
      if (goto) {
        return push(goto)
      }
      push('/account/home/')
    }
  }

  const { uiFeatures, uiElements, uiStage, stepPageProps, flowHandlers, loading } = useFRFlow(FRFlowConfig)

  stepPageProps.changeSuccessPath = generateQueryUrl('/account/manage/', {
    notifyToken: 'changeNameSuccess',
    fetchProfile: true
  })

  const { onSubmit, ...restHandlers } = flowHandlers
  const { errors = [], ...restPageProps } = stepPageProps

  return (
    <FeatureDynamicView
      width='two-thirds'
      titleLinkHref="/account/home"
      formRef={formRef}
      onSubmit={onSubmit}
      onBack={() => { push('/account/manage/') }}
      hasLogoutLink={true}
      hasAccountLinks
      accountLinksItem={6}
    >
      {uiStage
        ? <Dynamic
          {...router.query}
          {...restPageProps}
          componentMap={componentMap}
          headingCount={headingCount}
          content={uiFeatures}
          errors={errors}
          loading={loading}
          handlers={restHandlers}
          uiElements={uiElements}
          uiStage={uiStage}
        />
        : null
      }
    </FeatureDynamicView>
  )
}
export { ChangeName }
export default WithLang(ChangeName)

ChangeName.propTypes = {
  lang: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired
}
