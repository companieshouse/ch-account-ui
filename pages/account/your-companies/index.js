import PropTypes from 'prop-types'
import React, { useEffect, useMemo } from 'react'
import HeadingCount from '../../../services/HeadingCount'
import { useRouter } from 'next/router'
import WithLang from '../../../services/lang/WithLang'
import FeatureDynamicView from '../../../components/views/FeatureDynamicView'
import { getStageFeatures } from '../../../services/translate'
import { errorsPropType } from '../../../services/propTypes'
import Dynamic from '../../../components/Dynamic'
import componentMap from '../../../services/componentMap'
import WithQueryParams from '../../../components/providers/WithQueryParams'
import useFRAuth from '../../../services/useFRAuth'
import Loading from '../../../components/application-specific/Loading'

const YourCompanies = ({ errors, lang }) => {
  const { profile, companyData, loading } = useFRAuth({ fetchCompanyData: true, companyStatus: 'confirmed' })
  const uiStage = 'HOME_YOUR_COMPANIES'
  const headingCount = useMemo(() => new HeadingCount(), [])
  const content = getStageFeatures(lang, uiStage)
  const router = useRouter()

  useEffect(() => {
    headingCount.reset()
  })

  return (
    <FeatureDynamicView
      width="full"
      titleLinkHref="/account/home"
      hasBackLink={false}
      hasLogoutLink={true}
      hasAccountLinks
      accountLinksItem={2}
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
        companies={companyData.companies}
        {...router.query}
      />
      }
    </FeatureDynamicView>
  )
}

export { YourCompanies }

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
