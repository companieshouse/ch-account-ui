import PropTypes from 'prop-types'
import React, { useMemo, useRef } from 'react'
import HeadingCount from '../../../../services/HeadingCount'
import { FORGEROCK_TREE_CHANGE_PREFS } from '../../../../services/environment'
import { useRouter } from 'next/router'
import FeatureDynamicView from '../../../../components/views/FeatureDynamicView'
import componentMap from '../../../../services/componentMap'
import Dynamic from '../../../../components/Dynamic'
import { generateQueryUrl } from '../../../../services/queryString'
import WithLang from '../../../../services/lang/WithLang'
import useFRFlow from '../../../../services/useFRFlow'
import WithQueryParams from '../../../../components/providers/WithQueryParams'

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

const ChangePreferences = ({ lang, queryParams }) => {
  const router = useRouter()
  const formRef = useRef()
  const headingCount = useMemo(() => new HeadingCount(), [])
  const { push, replace } = router
  const { pageStep, action } = queryParams

  React.useEffect(() => {
    headingCount.reset()
  })

  React.useEffect(() => {
    if (pageStep === '_restart') {
      replace('/account/manage/change-preferences/_start/')
    }
  }, [pageStep, replace])

  const FRFlowConfig = {
    journeyName: FORGEROCK_TREE_CHANGE_PREFS,
    journeyNamespace: 'CHANGE_CONSENT_UPDATES',
    defaultErrorStage: 'CHANGE_CONSENT_UPDATES',
    lang,
    formRef,
    stepQuery: {
      ForceAuth: true,
      action
    },
    handleSuccess: () => {
      push('/account/home/')
    }
  }

  const { uiFeatures, uiElements, uiStage, stepPageProps, flowHandlers, loading } = useFRFlow(FRFlowConfig)

  stepPageProps.changeSuccessPath = generateQueryUrl('/account/manage/', {
    notifyToken: 'changePreferencesSuccess'
  })

  const { onSubmit, ...restHandlers } = flowHandlers
  const { errors = [], ...restPageProps } = stepPageProps

  return (
    <FeatureDynamicView
      width='two-thirds'
      titleLinkHref="/account/home"
      onSubmit={onSubmit}
      hasAccountLinks
      formRef={formRef}
      accountLinksItem={6}
    >
      <Dynamic
        {...restPageProps}
        {...queryParams}
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

export default WithQueryParams(WithLang(ChangePreferences))

ChangePreferences.propTypes = {
  lang: PropTypes.string.isRequired
}
