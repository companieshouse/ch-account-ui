import PropTypes from 'prop-types'
import React, { useMemo, useEffect } from 'react'
import HeadingCount from '../../services/HeadingCount'
import { useRouter } from 'next/router'
import WithLang from '../../services/lang/WithLang'
import FeatureDynamicView from '../../components/views/FeatureDynamicView'
import { getStageFeatures } from '../../services/translate'
import { errorsPropType } from '../../services/propTypes'
import Dynamic from '../../components/Dynamic'
import componentMap from '../../services/componentMap'
import WithQueryParams from '../../components/providers/WithQueryParams'
import useFRAuth from '../../services/useFRAuth'
import { CH_EWF_AUTHENTICATED_ENTRY_URL } from '../../services/environment'
import Loading from '../../components/application-specific/Loading'

const Home = ({ errors, lang, queryParams }) => {
  const { profile, loading } = useFRAuth({ fetchCompanyData: false })
  const uiStage = 'HOME_OVERVIEW'
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
        links={{ ewfAuthenticatedEntry: CH_EWF_AUTHENTICATED_ENTRY_URL }}
        {...router.query}
      />}
    </FeatureDynamicView>
  )
}

export { Home }

export default WithQueryParams(WithLang(Home))

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
