import PropTypes from 'prop-types'
import React from 'react'
import HeadingCount from '../../services/HeadingCount'
import { useRouter } from 'next/router'
import withLang from '../../services/lang/withLang'
import FeatureDynamicView from '../../components/views/FeatureDynamicView'
import { getStageFeatures } from '../../services/translate'
import { errorsPropType } from '../../services/propTypes'
import withProfile from '../../services/withProfile'
import Dynamic from '../../components/Dynamic'
import componentMap from '../../services/componentMap'
import { getCompaniesAssociatedWithUser } from '../../services/forgerock'
import withAccessToken from '../../services/withAccessToken'
import withQueryParams from '../../services/withQueryParams'
import { generateQueryUrl } from '../../services/queryString'

export const extendCompaniesData = (companiesData) => {
  return companiesData.map((company) => {
    const authorisePath = generateQueryUrl('/account/authorise/_start/', { companyNumber: company.number, companyName: company.name })
    return { ...company, authorisePath }
  })
}

const YourCompanies = ({ errors, lang, profile, accessToken }) => {
  const [associationData, setAssociationData] = React.useState({ count: '0', companies: [] })
  const uiStage = 'HOME_YOUR_COMPANIES'
  const headingCount = new HeadingCount()
  const content = getStageFeatures(lang, uiStage)
  const router = useRouter()
  const { notifyType, notifyHeading, notifyTitle, notifyChildren } = router.query

  React.useEffect(() => {
    headingCount.reset()

    getCompaniesAssociatedWithUser(accessToken, profile.sub).then((response) => {
      console.log('AssociationData', response)
      setAssociationData({
        count: response.count,
        companies: extendCompaniesData(response.companies)
      })
    })
  }, [notifyType, notifyHeading, notifyTitle, notifyChildren])

  return (
    <FeatureDynamicView
      width="full"
      titleLinkHref="/account/home"
      hasBackLink={false}
      hasLanguageSwitcher={false}
      hasLogoutLink={true}
      hasAccountLinks={true}
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

export default withAccessToken(withProfile(withQueryParams(withLang(YourCompanies))))

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
