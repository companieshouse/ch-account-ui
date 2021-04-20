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
import { getAssociations } from '../../services/forgerock'
import withAccessToken from '../../services/withAccessToken'

const Home = ({ errors, lang, profile, accessToken }) => {
  const uiStage = 'HOME_OVERVIEW'
  const headingCount = new HeadingCount()

  const content = getStageFeatures(lang, uiStage)
  let associationData
  getAssociations(accessToken, profile.sub).then((response) => {
    console.log('AssociationData', response)
  })
  const router = useRouter()
  const { notifyType, notifyHeading, notifyTitle, notifyChildren } = router.query

  React.useEffect(() => {
    headingCount.reset()
  }, [notifyType, notifyHeading, notifyTitle, notifyChildren, associationData])

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

export default withAccessToken(withProfile(withLang(Home)))

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
