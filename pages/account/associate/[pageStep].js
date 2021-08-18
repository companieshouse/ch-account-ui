import PropTypes from 'prop-types'
import React, { useMemo, useRef } from 'react'
import HeadingCount from '../../../services/HeadingCount'
import {
  CH_EWF_REQUEST_AUTH_CODE_URL,
  FORGEROCK_TREE_COMPANY_ASSOCIATION
} from '../../../services/environment'
import { useRouter } from 'next/router'
import FeatureDynamicView from '../../../components/views/FeatureDynamicView'
import WithLang from '../../../services/lang/WithLang'
import Dynamic from '../../../components/Dynamic'
import componentMap from '../../../services/componentMap'
import { generateQueryUrl } from '../../../services/queryString'
import useFRFlow from '../../../services/useFRFlow'

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

const AssociateUserAndCompany = ({ lang }) => {
  const router = useRouter()
  const formRef = useRef()
  const headingCount = useMemo(() => new HeadingCount(), [])

  const { replace, query } = router
  const { pageStep = '' } = query

  React.useEffect(() => {
    headingCount.reset()
  })

  React.useEffect(() => {
    if (pageStep === '_restart') {
      replace('/account/associate/_start/')
    }
  }, [pageStep, replace])

  const FRFlowConfig = {
    journeyName: FORGEROCK_TREE_COMPANY_ASSOCIATION,
    journeyNamespace: 'COMPANY_ASSOCIATION',
    defaultErrorStage: 'GENERIC_ERROR',
    lang,
    formRef,
    pageStep
  }

  const { uiFeatures, uiElements, uiStage, stepPageProps, flowHandlers, loading } = useFRFlow(FRFlowConfig)

  const { onSubmit, ...restHandlers } = flowHandlers

  const links = {
    requestAuthCodePath: CH_EWF_REQUEST_AUTH_CODE_URL,
    associateSuccessPath: generateQueryUrl('/account/your-companies/', {
      notifyToken: 'associateSuccess',
      companyName: stepPageProps.company?.name
    })
  }

  const { errors = [], ...restPageProps } = stepPageProps

  return (
    <FeatureDynamicView
      accountLinksItem={2}
      formRef={formRef}
      hasAccountLinks={true}
      hasBackLink={true}
      hasLogoutLink={true}
      onSubmit={onSubmit}
      titleLinkHref="/account/home"
      width='two-thirds'
    >
      {uiStage
        ? <Dynamic
        {...restPageProps}
        {...router.query}
        componentMap={componentMap}
        content={uiFeatures}
        errors={errors}
        handlers={restHandlers}
        headingCount={headingCount}
        links={links}
        loading={loading}
        uiElements={uiElements}
        uiStage={uiStage}
      />
        : null }
    </FeatureDynamicView>
  )
}

export { AssociateUserAndCompany }

export default WithLang(AssociateUserAndCompany)

AssociateUserAndCompany.propTypes = {
  lang: PropTypes.string.isRequired
}
