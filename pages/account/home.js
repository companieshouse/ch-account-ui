import PropTypes from 'prop-types'
import React from 'react'
import HeadingCount from '../../services/HeadingCount'
import { useRouter } from 'next/router'
import UiFeatures from '../../components/general-ui/UiFeatures'
import withLang from '../../services/lang/withLang'
import FeatureDynamicView from '../../components/views/FeatureDynamicView'
import { getStageFeatures } from '../../services/translate'
import { errorsPropType } from '../../services/propTypes'

const Home = ({ errors, lang }) => {
  const uiStage = 'HOME_OVERVIEW'
  const headingCount = new HeadingCount()

  const uiFeatures = getStageFeatures(lang, uiStage)

  const router = useRouter()
  const { notifyType, notifyHeading, notifyTitle, notifyChildren } = router.query

  React.useEffect(() => {
    headingCount.reset()
  }, [notifyType, notifyHeading, notifyTitle, notifyChildren])

  const renderFeatures = (props) => {
    return <UiFeatures {...props} />
  }

  return (
    <FeatureDynamicView
      width="full"
      hasBackLink={false}
      hasLanguageSwitcher={true}
      renderFeatures={renderFeatures}
      errors={errors}
      headingCount={headingCount}
      uiFeatures={uiFeatures}
      uiElements={[]}
      uiStage={uiStage}
      notifyType={notifyType}
      notifyHeading={notifyHeading}
      notifyTitle={notifyTitle}
      notifyChildren={notifyChildren}
    />
  )
}

export default withLang(Home)

Home.propTypes = {
  companies: PropTypes.array,
  errors: errorsPropType,
  headingCount: PropTypes.instanceOf(HeadingCount),
  userDetails: PropTypes.object,
  lang: PropTypes.string
}

Home.defaultProps = {
  companies: [],
  errors: [],
  userDetails: {}
}
