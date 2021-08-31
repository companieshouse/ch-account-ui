import PropTypes from 'prop-types'
import React, { useEffect, useMemo, useRef } from 'react'
import { useRouter } from 'next/router'
import HeadingCount from '../../../services/HeadingCount'
import FeatureDynamicView from '../../../components/views/FeatureDynamicView'
import WithLang from '../../../services/lang/WithLang'
import componentMap from '../../../services/componentMap'
import Dynamic from '../.././../components/Dynamic'
import withQueryParams from '../../../components/providers/WithQueryParams'
import { FORGEROCK_TREE_REMOVE_AUTHORISED_USER } from '../../../services/environment'
import { generateQueryUrl } from '../../../services/queryString'
import useFRFlow from '../../../services/useFRFlow'

const RemoveAuthorisedPerson = ({ lang, queryParams }) => {
  const router = useRouter()
  const formRef = useRef()
  const { push } = router
  const headingCount = useMemo(() => new HeadingCount(), [])
  const { companyNumber, userId, pending } = queryParams

  useEffect(() => {
    headingCount.reset()
  })

  const FRFlowConfig = {
    journeyName: FORGEROCK_TREE_REMOVE_AUTHORISED_USER,
    journeyNamespace: 'REMOVE_USER',
    defaultErrorStage: 'REMOVE_USER_CONFIRM',
    lang,
    formRef,
    stepQuery: {
      companyNumber,
      userId,
      pending,
      ForceAuth: true
    },
    handleSuccess: () => {
      push('/account/your-companies/')
    }
  }

  const { uiFeatures, uiElements, uiStage, stepPageProps, flowHandlers, loading, notificationId } = useFRFlow(FRFlowConfig)

  stepPageProps.displayName = stepPageProps.invitedUser?.displayName
  stepPageProps.links = {
    removeUserSuccess: generateQueryUrl('/account/your-companies/', {
      notifyToken: pending ? 'removePendingUserSuccess' : 'removeAuthorisedUserSuccess',
      notifyId: notificationId,
      userName: stepPageProps.user,
      companyName: stepPageProps.company

    })
  }

  const { onSubmit, ...restHandlers } = flowHandlers
  const { errors = [], ...restPageProps } = stepPageProps

  return (
    <FeatureDynamicView
      accountLinksItem={2}
      formRef={formRef}
      hasAccountLinks
      hasBackLink={false}
      onSubmit={onSubmit}
    >
      <Dynamic
        {...restPageProps}
        {...queryParams}
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

export { RemoveAuthorisedPerson }

export default withQueryParams(WithLang(RemoveAuthorisedPerson))

RemoveAuthorisedPerson.propTypes = {
  lang: PropTypes.string,
  queryParams: PropTypes.object
}
