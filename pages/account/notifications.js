import PropTypes from 'prop-types'
import React, { useMemo, useState } from 'react'
import HeadingCount from '../../services/HeadingCount'
import { useRouter } from 'next/router'
import FeatureDynamicView from '../../components/views/FeatureDynamicView'
import { getStageFeatures } from '../../services/translate'
import { errorsPropType } from '../../services/propTypes'
import Dynamic from '../../components/Dynamic'
import componentMap from '../../services/componentMap'
import { getCompaniesAssociatedWithUser } from '../../services/forgerock'
import { generateQueryUrl } from '../../services/queryString'
import useFRAuth from '../../services/useFRAuth'
import WithQueryParams from '../../components/providers/WithQueryParams'
import WithLang from '../../services/lang/WithLang'

export const extendCompaniesData = (companiesData, sub) => {
  return companiesData.map((company) => {
    const acceptPath = generateQueryUrl('/account/authorise/_start/', { companyNumber: company.number, companyName: company.name, action: 'accept' })
    const declinePath = generateQueryUrl('/account/authorise/_start/', { companyNumber: company.number, companyName: company.name, action: 'decline' })
    const inviter = company.users.filter((user) => user._refResourceId === company._refProperties.inviterId)[0]
    return { ...company, acceptPath, declinePath, inviter }
  })
}

const Notifications = ({ errors, lang, queryParams }) => {
  const { profile, accessToken } = useFRAuth()
  const [associationData, setAssociationData] = useState({ count: '0' })
  const [pageNotification, setPageNotification] = useState()
  const uiStage = 'HOME_NOTIFICATIONS'
  const headingCount = useMemo(() => new HeadingCount(), [])
  const content = getStageFeatures(lang, uiStage)
  const router = useRouter()
  const sub = profile?.sub
  const { companies, pendingCompanies } = associationData
  const { companyNumber } = queryParams

  React.useEffect(() => {
    headingCount.reset()

    if (accessToken && sub) {
      getCompaniesAssociatedWithUser(accessToken, sub).then((response) => {
        setAssociationData({
          count: response.pendingCount,
          companies: response.companies,
          pendingCompanies: extendCompaniesData(response.pendingCompanies, sub)
        })
      })
    }
  }, [sub, accessToken, headingCount])

  // Handle companyNumber query
  React.useEffect(() => {
    if (companyNumber && pendingCompanies) {
      const anchorCompany = pendingCompanies.find((company) => company.number === companyNumber)
      if (anchorCompany) {
        window.location.hash = anchorCompany.number
        return
      }

      const confirmedCompany = companies.find((company) => company.number === companyNumber)
      if (confirmedCompany) {
        setPageNotification('companyAlreadyAuthorised')
      } else {
        setPageNotification('noCompanyMatch')
      }
    }
  }, [companyNumber, companies, pendingCompanies])

  return (
    <FeatureDynamicView
      width="full"
      titleLinkHref="/account/home"
      hasBackLink={false}
      hasLogoutLink={true}
      hasAccountLinks
      accountLinksItem={5}
    >
      <Dynamic
        componentMap={componentMap}
        headingCount={headingCount}
        content={content}
        errors={errors}
        uiElements={[]}
        uiStage={uiStage}
        profile={profile}
        companies={associationData.pendingCompanies}
        notifyToken={pageNotification}
        {...router.query}
      />
    </FeatureDynamicView>
  )
}

export default WithQueryParams(WithLang(Notifications))

Notifications.propTypes = {
  errors: errorsPropType,
  lang: PropTypes.string,
  queryParams: PropTypes.object
}

Notifications.defaultProps = {
  errors: []
}
