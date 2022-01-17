import PropTypes from 'prop-types'
import React, { useMemo, useRef } from 'react'
import HeadingCount from '../../../../services/HeadingCount'
import { FORGEROCK_TREE_CHANGE_EMAIL_ADDRESS } from '../../../../services/environment'
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

const ChangeEmail = ({ lang }) => {
  const formRef = useRef()
  const router = useRouter()
  const headingCount = useMemo(() => new HeadingCount(), [])
  const { replace, query, push } = router
  const { pageStep = '' } = query

  React.useEffect(() => {
    headingCount.reset()
  })

  React.useEffect(() => {
    if (pageStep === '_restart') {
      replace('/account/manage/change-email/_start/')
    }
  }, [pageStep, replace])

  const FRFlowConfig = {
    journeyName: FORGEROCK_TREE_CHANGE_EMAIL_ADDRESS,
    journeyNamespace: 'CHANGE_EMAIL',
    defaultErrorStage: 'CHANGE_EMAIL_1',
    lang,
    formRef,
    pageStep,
    stepQuery: {
      ForceAuth: true
    },
    handleSuccess: () => {
      const successPath = generateQueryUrl('/account/manage/', {
        notifyToken: 'changeEmailSuccess'
      })
      push(successPath)
    }
  }

  const { uiFeatures, uiElements, uiStage, stepPageProps, flowHandlers, loading } = useFRFlow(FRFlowConfig)

  const { onSubmit, ...restHandlers } = flowHandlers

  const { errors = [], ...restPageProps } = stepPageProps

  const links = { resumePath: '/account/manage/change-email/_restart/' }

  return (
    <FeatureDynamicView
      formRef={formRef}
      width='two-thirds'
      titleLinkHref="/account/home"
      hasAccountLinks
      accountLinksItem={6}
      hasLogoutLink={true}
      onSubmit={onSubmit}
    >
      {uiStage
        ? <Dynamic
        {...query}
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
        : null}
    </FeatureDynamicView>
  )
}

export default WithLang(ChangeEmail)

ChangeEmail.propTypes = {
  lang: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired
}
