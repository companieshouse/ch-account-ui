import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import HeadingCount from '../../services/HeadingCount'
import { useRouter } from 'next/router'
import WithLang from '../../services/lang/WithLang'
import FeatureDynamicView from '../../components/views/FeatureDynamicView'
import { getStageFeatures } from '../../services/translate'
import { errorsPropType } from '../../services/propTypes'
import WithProfile from '../../components/providers/WithProfile'
import Dynamic from '../../components/Dynamic'
import componentMap from '../../services/componentMap'
import { getCompaniesAssociatedWithUser } from '../../services/forgerock'
import WithAccessToken from '../../components/providers/WithAccessToken'

const Home = ({ errors, lang, profile, accessToken }) => {
  const [associationData, setAssociationData] = React.useState({ count: '0', companies: [] })
  const uiStage = 'HOME_OVERVIEW'
  const headingCount = useMemo(() => new HeadingCount(), [])
  const content = getStageFeatures(lang, uiStage)
  const router = useRouter()
  const { notifyType, notifyHeading, notifyTitle, notifyChildren } = router.query
  const { sub } = profile

  React.useEffect(() => {
    headingCount.reset()

    getCompaniesAssociatedWithUser(accessToken, sub).then((response) => {
      console.log('AssociationData', response)
      setAssociationData({
        count: response.count,
        companies: response.companies
      })
    })
  }, [sub, accessToken, headingCount, notifyType, notifyHeading, notifyTitle, notifyChildren])

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
        associationData={associationData}
        {...router.query}
      />
    </FeatureDynamicView>
  )
}

export default WithAccessToken(WithProfile(WithLang(Home)))

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
