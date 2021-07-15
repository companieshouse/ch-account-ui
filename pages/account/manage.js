import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import HeadingCount from '../../services/HeadingCount'
import { useRouter } from 'next/router'
import FeatureDynamicView from '../../components/views/FeatureDynamicView'
import { getStageFeatures } from '../../services/translate'
import { errorsPropType } from '../../services/propTypes'
import Dynamic from '../../components/Dynamic'
import componentMap from '../../services/componentMap'
import WithLang from '../../services/lang/WithLang'
import useFRAuth from '../../services/useFRAuth'

const ManageAccount = ({ errors, lang }) => {
  const { profile } = useFRAuth()
  const uiStage = 'HOME_MANAGE_ACCOUNT'
  const headingCount = useMemo(() => new HeadingCount(), [])

  const content = getStageFeatures(lang, uiStage)

  const router = useRouter()
  const { notifyType, notifyHeading, notifyTitle, notifyChildren } = router.query

  React.useEffect(() => {
    headingCount.reset()
  }, [notifyType, notifyHeading, notifyTitle, notifyChildren, headingCount])

  return (
    <FeatureDynamicView
      width="two-thirds"
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
        {...router.query}
      />
    </FeatureDynamicView>
  )
}

export default (WithLang(ManageAccount))

ManageAccount.propTypes = {
  companies: PropTypes.array,
  errors: errorsPropType,
  headingCount: PropTypes.instanceOf(HeadingCount),
  profile: PropTypes.object,
  lang: PropTypes.string
}

ManageAccount.defaultProps = {
  companies: [],
  errors: [],
  profile: {}
}
