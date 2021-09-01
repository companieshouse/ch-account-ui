import PropTypes from 'prop-types'
import React, { useEffect, useMemo, useRef } from 'react'
import HeadingCount from '../../../services/HeadingCount'
import { FORGEROCK_TREE_REGISTER } from '../../../services/environment'
import { useRouter } from 'next/router'
import FeatureDynamicView from '../../../components/views/FeatureDynamicView'
import WithLang from '../../../services/lang/WithLang'
import Dynamic from '../../../components/Dynamic'
import componentMap from '../../../services/componentMap'
import useFRFlow from '../../../services/useFRFlow'

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { pageStep: '_start' } },
      { params: { pageStep: '_restart' } },
      { params: { pageStep: 'verify' } }
    ],
    fallback: false
  }
}

export const getStaticProps = async () => {
  return { props: {} }
}

const Register = ({ lang }) => {
  const router = useRouter()
  const formRef = useRef()
  const headingCount = useMemo(() => new HeadingCount(), [])
  const { push, replace, query } = router
  const { pageStep = '', service = '', token, goto } = query

  useEffect(() => {
    headingCount.reset()
  })

  React.useEffect(() => {
    if (pageStep === '_restart') {
      replace('/account/register/_start/')
    }
  }, [pageStep, replace])

  const FRFlowConfig = {
    journeyName: pageStep === 'verify' && service && token ? service : FORGEROCK_TREE_REGISTER,
    journeyNamespace: 'REGISTRATION',
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
  const { errors = [], ...restPageProps } = stepPageProps

  return (
    <FeatureDynamicView
      errors={errors}
      formRef={formRef}
      headingCount={headingCount}
      onSubmit={onSubmit}
    >
      <Dynamic
        {...query}
        {...restPageProps}
        componentMap={componentMap}
        content={uiFeatures}
        errors={errors}
        handlers={restHandlers}
        headingCount={headingCount}
        lang={lang}
        loading={loading}
        uiElements={uiElements}
        uiStage={uiStage}
      />
    </FeatureDynamicView>
  )
}

export { Register }

export default WithLang(Register)

Register.propTypes = {
  lang: PropTypes.string
}
