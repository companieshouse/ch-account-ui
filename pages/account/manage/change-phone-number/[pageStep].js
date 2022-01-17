import PropTypes from 'prop-types'
import React, { useMemo, useRef } from 'react'
import HeadingCount from '../../../../services/HeadingCount'
import { FORGEROCK_TREE_CHANGE_PHONE_NUMBER } from '../../../../services/environment'
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
      { params: { pageStep: '_start' } },
      { params: { pageStep: '_restart' } }
    ],
    fallback: false
  }
}

export const getStaticProps = async () => {
  return { props: {} }
}

const ChangeNumber = ({ lang }) => {
  const formRef = useRef()
  const router = useRouter()
  const headingCount = useMemo(() => new HeadingCount(), [])
  const { push, replace, query } = router
  const { pageStep } = query

  React.useEffect(() => {
    headingCount.reset()
  })

  React.useEffect(() => {
    if (pageStep === '_restart') {
      replace('/account/manage/change-phone-number/_start/')
    }
  }, [pageStep, replace])

  const FRFlowConfig = {
    journeyName: FORGEROCK_TREE_CHANGE_PHONE_NUMBER,
    journeyNamespace: 'UPDATE_PHONE',
    defaultErrorStage: 'UPDATE_PHONE_1',
    lang,
    formRef,
    pageStep,
    handleSuccess: () => {
      push('/account/home/')
    }
  }

  const { uiFeatures, uiElements, uiStage, stepPageProps, flowHandlers, loading } = useFRFlow(FRFlowConfig)

  stepPageProps.changeSuccessPath = generateQueryUrl('/account/manage/', {
    notifyToken: 'changeNumberSuccess'
  })

  const { onSubmit, ...restHandlers } = flowHandlers
  const { errors = [], ...restPageProps } = stepPageProps

  return (
    <FeatureDynamicView
      accountLinksItem={6}
      formRef={formRef}
      hasAccountLinks
      hasLogoutLink={true}
      onSubmit={onSubmit}
      titleLinkHref="/account/home"
      width='two-thirds'
    >
      <Dynamic
        {...query}
        {...restPageProps}
        componentMap={componentMap}
        content={uiFeatures}
        errors={errors}
        handlers={restHandlers}
        headingCount={headingCount}
        loading={loading}
        uiElements={uiElements}
        uiStage={uiStage}
      />
    </FeatureDynamicView>
  )
}

export default WithLang(ChangeNumber)

ChangeNumber.propTypes = {
  lang: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired
}
