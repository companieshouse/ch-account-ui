import PropTypes from 'prop-types'
import React, { useMemo, useState } from 'react'
import HeadingCount from '../../services/HeadingCount'
import { useRouter } from 'next/router'
import WithLang from '../../services/lang/WithLang'
import FeatureDynamicView from '../../components/views/FeatureDynamicView'
import { getStageFeatures } from '../../services/translate'
import { errorsPropType } from '../../services/propTypes'
import Dynamic from '../../components/Dynamic'
import componentMap from '../../services/componentMap'
import { getCompaniesAssociatedWithUser } from '../../services/forgerock'
import { generateQueryUrl } from '../../services/queryString'
import useFRAuth from '../../services/useFRAuth'

export const extendCompaniesData = (companiesData, sub) => {
  return companiesData.map((company) => {
    const acceptPath = generateQueryUrl('/account/authorise/_start/', { companyNumber: company.number, companyName: company.name, action: 'accept' })
    const declinePath = generateQueryUrl('/account/authorise/_start/', { companyNumber: company.number, companyName: company.name, action: 'decline' })
    const inviter = company.users.filter((user) => user._refResourceId === company._refProperties.inviterId)[0]
    return { ...company, acceptPath, declinePath, inviter }
  })
}

const Notifications = ({ errors, lang }) => {
  const { profile, accessToken } = useFRAuth()
  const [associationData, setAssociationData] = useState({ count: '0', companies: [] })
  const uiStage = 'HOME_NOTIFICATIONS'
  const headingCount = useMemo(() => new HeadingCount(), [])
  const content = getStageFeatures(lang, uiStage)
  const router = useRouter()
  const sub = profile?.sub

  React.useEffect(() => {
    headingCount.reset()

    if (accessToken && sub) {
      getCompaniesAssociatedWithUser(accessToken, sub).then((response) => {
        setAssociationData({
          count: response.pendingCount,
          companies: extendCompaniesData(response.pendingCompanies, sub)
        })
      })
    }
  }, [sub, accessToken, headingCount])

  return (
    <FeatureDynamicView
      width="full"
      titleLinkHref="/account/home"
      hasBackLink={false}
      hasLogoutLink={true}
      hasAccountLinks
      accountLinksItem={4}
    >
      <Dynamic
        componentMap={componentMap}
        headingCount={headingCount}
        content={content}
        errors={errors}
        uiElements={[]}
        uiStage={uiStage}
        profile={profile}
        companies={associationData.companies}
        {...router.query}
      />
    </FeatureDynamicView>
  )
}

export default WithLang(Notifications)

Notifications.propTypes = {
  companies: PropTypes.array,
  errors: errorsPropType,
  headingCount: PropTypes.instanceOf(HeadingCount),
  profile: PropTypes.object,
  lang: PropTypes.string,
  accessToken: PropTypes.string
}

Notifications.defaultProps = {
  companies: [],
  errors: [],
  profile: {}
}
