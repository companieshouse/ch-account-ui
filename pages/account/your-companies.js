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

const YourCompanies = ({ errors, lang, profile }) => {
  const uiStage = 'HOME_YOUR_COMPANIES'
  const headingCount = new HeadingCount()
  const content = getStageFeatures(lang, uiStage)
  const router = useRouter()
  const { notifyType, notifyHeading, notifyTitle, notifyChildren } = router.query

  React.useEffect(() => {
    headingCount.reset()
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
        {...router.query}
      />
    </FeatureDynamicView>
  )
}

export default withProfile(withLang(YourCompanies))

YourCompanies.propTypes = {
  companies: PropTypes.array,
  errors: errorsPropType,
  headingCount: PropTypes.instanceOf(HeadingCount),
  profile: PropTypes.object,
  lang: PropTypes.string
}

YourCompanies.defaultProps = {
  companies: [],
  errors: [],
  profile: {}
}