import PropTypes from 'prop-types'
import React from 'react'
import HeadingCount from '../../services/HeadingCount'
import { useRouter } from 'next/router'
import withLang from '../../services/lang/withLang'
import FeatureDynamicView from '../../components/views/FeatureDynamicView'
import { getStageFeatures } from '../../services/translate'
import { errorsPropType } from '../../services/propTypes'
import Dynamic from '../../components/Dynamic'
import componentMap from '../../services/componentMap'

const ManageAccount = ({ errors, lang }) => {
  const uiStage = 'HOME_MANAGE_ACCOUNT'
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
      errors={errors}
      headingCount={headingCount}
      uiStage={uiStage}
      notifyType={notifyType}
      notifyHeading={notifyHeading}
      notifyTitle={notifyTitle}
      notifyChildren={notifyChildren}
    >
      <Dynamic
        componentMap={componentMap}
        headingCount={headingCount}
        content={content}
        errors={errors}
        uiElements={[]}
        uiStage={uiStage}
        notifyType={notifyType}
        notifyHeading={notifyHeading}
        notifyTitle={notifyTitle}
        notifyChildren={notifyChildren}
      />
    </FeatureDynamicView>
  )
}

export default withLang(ManageAccount)

ManageAccount.propTypes = {
  companies: PropTypes.array,
  errors: errorsPropType,
  headingCount: PropTypes.instanceOf(HeadingCount),
  userDetails: PropTypes.object,
  lang: PropTypes.string
}

ManageAccount.defaultProps = {
  companies: [],
  errors: [],
  userDetails: {}
}
