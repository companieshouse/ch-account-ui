import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import WithLang from '../services/lang/WithLang'
import { getStageFeatures } from '../services/translate'
import FeatureDynamicView from '../components/views/FeatureDynamicView'
import Dynamic from '../components/Dynamic'
import componentMap from '../services/componentMap'
import HeadingCount from '../services/HeadingCount'
import { CH_EWF_LEGACY_AUTH_URL } from '../services/environment'

const Generic404 = ({ lang }) => {
  const headingCount = useMemo(() => new HeadingCount(), [])
  const uiStage = 'GENERIC_404'
  const content = getStageFeatures(lang, uiStage)

  return (
    <FeatureDynamicView hasBackLink={false}>
      <Dynamic
        componentMap={componentMap}
        headingCount={headingCount}
        content={content}
        errors={[]}
        uiElements={[]}
        uiStage={uiStage}
        links={{ legacyAuthURL: CH_EWF_LEGACY_AUTH_URL }}
      />
    </FeatureDynamicView>
  )
}

export default WithLang(Generic404)

Generic404.propTypes = {
  lang: PropTypes.string.isRequired
}
