import PropTypes from 'prop-types'
import React, { useEffect, useMemo, useState } from 'react'
import HeadingCount from '../../services/HeadingCount'
import { useRouter } from 'next/router'
import FeatureDynamicView from '../../components/views/FeatureDynamicView'
import { getStageFeatures } from '../../services/translate'
import { errorsPropType } from '../../services/propTypes'
import Dynamic from '../../components/Dynamic'
import componentMap from '../../services/componentMap'
import useFRAuth from '../../services/useFRAuth'
import WithQueryParams from '../../components/providers/WithQueryParams'
import WithLang from '../../services/lang/WithLang'
import Loading from '../../components/application-specific/Loading'

const Notifications = ({ errors, lang, queryParams }) => {
  const { profile, companyData, loading } = useFRAuth({ fetchCompanyData: true })
  const [pageNotification, setPageNotification] = useState()
  const uiStage = 'HOME_NOTIFICATIONS'
  const headingCount = useMemo(() => new HeadingCount(), [])
  const content = getStageFeatures(lang, uiStage)
  const router = useRouter()
  const { companies } = companyData
  const { companyNumber } = queryParams

  const pendingCompanies = companies.filter((company) => company.membershipStatus === 'pending')

  useEffect(() => {
    headingCount.reset()
  })

  // Handle companyNumber URL query
  React.useEffect(() => {
    if (companyNumber && companies.length) {
      const anchorCompany = pendingCompanies.find((company) => company.number === companyNumber)

      // Set hash for scroll behaviour
      if (anchorCompany) {
        window.location.hash = anchorCompany.number
        return
      }

      // Handle error notifications
      const confirmedCompany = companies.find((company) => company.number === companyNumber)
      if (confirmedCompany) {
        setPageNotification('companyAlreadyAuthorised')
      } else {
        setPageNotification('noCompanyMatch')
      }
    }
  }, [companyNumber, companies, pendingCompanies, companyData])

  return (
    <FeatureDynamicView
      width="full"
      titleLinkHref="/account/home"
      hasBackLink={false}
      hasLogoutLink={true}
      hasAccountLinks
      accountLinksItem={5}
      messages={pendingCompanies.length}
    >
      {loading
        ? <Loading/>
        : <Dynamic
          componentMap={componentMap}
          headingCount={headingCount}
          content={content}
          errors={errors}
          uiElements={[]}
          uiStage={uiStage}
          profile={profile}
          companies={pendingCompanies}
          notifyToken={pageNotification}
          {...router.query}
        />
      }
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
