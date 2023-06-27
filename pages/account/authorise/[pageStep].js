import PropTypes from 'prop-types'
import React, { useMemo, useEffect, useRef } from 'react'
import { FORGEROCK_TREE_INVITE_USER } from '../../../services/environment'
import Router, { useRouter } from 'next/router'
import FeatureDynamicView from '../../../components/views/FeatureDynamicView'
import Dynamic from '../../../components/Dynamic'
import componentMap from '../../../services/componentMap'
import WithLang from '../../../services/lang/WithLang'
import HeadingCount from '../../../services/HeadingCount'
import { generateQueryUrl } from '../../../services/queryString'
import useFRFlow from '../../../services/useFRFlow'
import WithQueryParams from '../../../components/providers/WithQueryParams'

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

const InviteUser = ({ lang, queryParams }) => {
  const router = useRouter()
  const formRef = useRef()
  const headingCount = useMemo(() => new HeadingCount(), [])
  const { pageStep, token, companyNumber, action, userId } = queryParams
  const currentPage = Number(queryParams?.page) || 1

  useEffect(() => {
    headingCount.reset()
  })

  const FRFlowConfig = {
    journeyName: FORGEROCK_TREE_INVITE_USER,
    journeyNamespace: 'INVITE_USER',
    defaultErrorStage: 'GENERIC_ERROR',
    lang,
    formRef,
    pageStep,
    stepQuery: {
      companyNumber,
      token,
      action,
      userId
    },
    handleSuccess: () => {
      Router.push('/account/your-companies')
    }
  }

  const { uiFeatures, uiElements, uiStage, stepPageProps, flowHandlers, loading, notificationId } = useFRFlow(FRFlowConfig)

  const { errors = [], ...restPageProps } = stepPageProps
  const { onSubmit, ...restHandlers } = flowHandlers

  // Setup success URL for step 2 redirect
  if (uiStage === 'INVITE_USER_2') {
    if (userId) {
      stepPageProps.authoriseSuccessPath = generateQueryUrl('/account/your-companies/authorised-person/', {
        notifyToken: 'resendSuccess',
        notifyId: notificationId,
        companyNumber,
        userId,
        page: currentPage
      })
    } else {
      stepPageProps.authoriseSuccessPath = generateQueryUrl('/account/your-companies/', {
        notifyToken: 'authSuccess',
        notifyId: notificationId,
        invitedUser: stepPageProps.invitedUser,
        companyName: stepPageProps.company.name,
        page: currentPage
      })
    }
  }

  // Setup success URL for step 3 (accept) redirect
  if (uiStage === 'INVITE_USER_3') {
    stepPageProps.acceptSuccessPath = generateQueryUrl('/account/your-companies/', {
      notifyToken: `${action}Success`,
      companyName: stepPageProps.company.name,
      page: currentPage
    })
  }

  return (
    <FeatureDynamicView
      formRef={formRef}
      width='two-thirds'
      onSubmit={onSubmit}
      hasBackLink={false}
      hasAccountLinks={true}
      accountLinksItem={2}
      hasLogoutLink={true}
      titleLinkHref="/account/home"
    >
      {uiStage
        ? <Dynamic
        {...router.query}
        {...restPageProps}
        componentMap={componentMap}
        handlers={restHandlers}
        loading={loading}
        headingCount={headingCount}
        content={uiFeatures}
        uiElements={uiElements}
        uiStage={uiStage}
        errors={errors}
      />
        : null }
    </FeatureDynamicView>
  )
}

InviteUser.propTypes = {
  lang: PropTypes.string
}

export default WithQueryParams(WithLang(InviteUser))
