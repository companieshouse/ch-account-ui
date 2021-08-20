import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import HeadingCount from '../../services/HeadingCount'
import { useRouter } from 'next/router'
import WithLang from '../../services/lang/WithLang'
import FeatureDynamicView from '../../components/views/FeatureDynamicView'
import { getStageFeatures } from '../../services/translate'
import { errorsPropType } from '../../services/propTypes'
import Dynamic from '../../components/Dynamic'
import componentMap from '../../services/componentMap'
import useFRAuth from '../../services/useFRAuth'
import { CH_EWF_AUTHENTICATED_ENTRY_URL } from '../../services/environment'
import Loading from '../../components/application-specific/Loading'

const Home = ({ errors, lang }) => {
  const { profile, companyData, loading } = useFRAuth({ fetchCompanyData: true })
  const uiStage = 'HOME_OVERVIEW'
  const headingCount = useMemo(() => new HeadingCount(), [])
  const content = getStageFeatures(lang, uiStage)
  const router = useRouter()

  const confirmedCompanies = companyData.companies.filter((company) => company.membershipStatus === 'confirmed')
  const pendingCompanies = companyData.companies.filter((company) => company.membershipStatus === 'pending')

  React.useEffect(() => {
    headingCount.reset()
  })

  return (
    <FeatureDynamicView
      width="full"
      titleLinkHref="/account/home"
      hasBackLink={false}
      hasLanguageSwitcher={true}
      hasLogoutLink={true}
      hasAccountLinks={true}
      accountLinksItem={1}
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
        companyData={{ count: confirmedCompanies.length, pendingCount: pendingCompanies.length }}
        links={{ ewfAuthenticatedEntry: CH_EWF_AUTHENTICATED_ENTRY_URL }}
        {...router.query}
      />}
    </FeatureDynamicView>
  )
}

export { Home }

export default WithLang(Home)

Home.propTypes = {
  companies: PropTypes.array,
  errors: errorsPropType,
  headingCount: PropTypes.instanceOf(HeadingCount),
  profile: PropTypes.object,
  accessToken: PropTypes.string,
  lang: PropTypes.string
}

Home.defaultProps = {
  companies: [],
  errors: [],
  profile: {}
}
