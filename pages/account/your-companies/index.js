import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import HeadingCount from '../../../services/HeadingCount'
import { useRouter } from 'next/router'
import WithLang from '../../../services/lang/WithLang'
import FeatureDynamicView from '../../../components/views/FeatureDynamicView'
import { getStageFeatures } from '../../../services/translate'
import { errorsPropType } from '../../../services/propTypes'
import Dynamic from '../../../components/Dynamic'
import componentMap from '../../../services/componentMap'
import { getCompaniesAssociatedWithUser } from '../../../services/forgerock'
import WithQueryParams from '../../../components/providers/WithQueryParams'
import { generateQueryUrl } from '../../../services/queryString'
import useFRAuth from '../../../services/useFRAuth'
import { CH_EWF_AUTHENTICATED_ENTRY_URL } from '../../../services/environment'

export const extendCompaniesData = (companiesData) => {
  return companiesData.map((company) => {
    const authorisePath = generateQueryUrl('/account/authorise/_start/', { companyNumber: company.number, companyName: company.name })
    const filePath = generateQueryUrl(CH_EWF_AUTHENTICATED_ENTRY_URL, { companyNo: company.number, jurisdiction: company.jurisdiction })

    company.users.forEach((user) => {
      user.detailsPath = generateQueryUrl('/account/your-companies/authorised-person', { companyNumber: company.number, userId: user._refResourceId })
    })

    return { ...company, authorisePath, filePath }
  })
}

const YourCompanies = ({ errors, lang }) => {
  const { profile, accessToken } = useFRAuth()
  const [associationData, setAssociationData] = React.useState({ count: '0', companies: [] })
  const uiStage = 'HOME_YOUR_COMPANIES'
  const headingCount = useMemo(() => new HeadingCount(), [])
  const content = getStageFeatures(lang, uiStage)
  const router = useRouter()
  const { notifyType, notifyHeading, notifyTitle, notifyChildren } = router.query
  const sub = profile?.sub

  React.useEffect(() => {
    headingCount.reset()
    if (sub && accessToken) {
      getCompaniesAssociatedWithUser(accessToken, sub).then((response) => {
        setAssociationData({
          count: response.confirmedCount,
          companies: extendCompaniesData(response.confirmedCompanies)
        })
      })
    }
  }, [notifyType, notifyHeading, notifyTitle, notifyChildren, accessToken, headingCount, sub])

  return (
    <FeatureDynamicView
      width="full"
      titleLinkHref="/account/home"
      hasBackLink={false}
      hasLogoutLink={true}
      hasAccountLinks
      accountLinksItem={2}
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

export default WithQueryParams(WithLang(YourCompanies))

YourCompanies.propTypes = {
  companies: PropTypes.array,
  errors: errorsPropType,
  headingCount: PropTypes.instanceOf(HeadingCount),
  profile: PropTypes.object,
  lang: PropTypes.string,
  accessToken: PropTypes.string
}

YourCompanies.defaultProps = {
  companies: [],
  errors: [],
  profile: {}
}
