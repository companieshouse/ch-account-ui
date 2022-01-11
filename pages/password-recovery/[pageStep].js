import PropTypes from 'prop-types'
import React, { useMemo, useRef } from 'react'
import { useRouter } from 'next/router'
import HeadingCount from '../../services/HeadingCount'
import { FORGEROCK_TREE_FMP } from '../../services/environment'
import FeatureDynamicView from '../../components/views/FeatureDynamicView'
import WithLang from '../../services/lang/WithLang'
import componentMap from '../../services/componentMap'
import Dynamic from '../../components/Dynamic'
import withQueryParams from '../../components/providers/WithQueryParams'
import useFRFlow from '../../services/useFRFlow'
import { generateQueryUrl } from '../../services/queryString'

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { pageStep: '_start' } },
      { params: { pageStep: '_restart' } },
      { params: { pageStep: 'request' } },
      { params: { pageStep: 'verify' } }
    ],
    fallback: false
  }
}

export const getStaticProps = async () => {
  return { props: {} }
}

const ResetPassword = ({ lang, queryParams }) => {
  const formRef = useRef()
  const router = useRouter()
  const headingCount = useMemo(() => new HeadingCount(), [])
  const { replace, query, push } = router

  const {
    goto,
    token
  } = queryParams

  const {
    pageStep = ''
  } = query

  React.useEffect(() => {
    headingCount.reset()
  })

  React.useEffect(() => {
    if (pageStep === '_restart') {
      replace('/password-recovery/request/')
    }
  }, [pageStep, replace])

  const FRFlowConfig = {
    journeyName: FORGEROCK_TREE_FMP,
    journeyNamespace: 'RESET_PASSWORD',
    defaultErrorStage: 'GENERIC_ERROR',
    lang,
    formRef,
    pageStep,
    stepQuery: {
      token
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

  const links = {
    resetSuccessPath: generateQueryUrl('/account/login/', {
      notifyToken: 'resetSuccess'
    })
  }

  const { errors = [], ...restPageProps } = stepPageProps

  return (
    <FeatureDynamicView
      formRef={formRef}
      onSubmit={onSubmit}
      headingCount={headingCount}
      hasAccountLinks={false}
      hasLogoutLink={false}
      hasBackLink={false}
      titleLinkHref="/"
    >
      {uiStage
        ? <Dynamic
        {...router.query}
        {...queryParams}
        {...restPageProps}
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
export { ResetPassword }
export default withQueryParams(WithLang(ResetPassword))

ResetPassword.propTypes = {
  lang: PropTypes.string.isRequired,
  queryParams: PropTypes.object
}
