import PropTypes from 'prop-types'
import React, { useState } from 'react'

import HeadingCount from '../../services/HeadingCount'
import WithLang from '../../services/lang/WithLang'
import { getStageFeatures } from '../../services/translate'
import FeatureDynamicView from '../../components/views/FeatureDynamicView'
import Dynamic from '../../components/Dynamic'
import componentMap from '../../services/componentMap'
import { useRouter } from 'next/router'
import { convertStageName } from '../../scripts/convert-stage-name'

import log from '../../services/log'

const ErrorGeneral = ({ lang }) => {
  const [errors] = useState([])
  const headingCount = new HeadingCount()
  const router = useRouter()
  const [uiStage, setUiStage] = useState('NO_SESSIONSSSSS')
  const [content, setContent] = useState({})

  React.useEffect(() => {
    if (router.query.pageStep) {
      log.debug('PS ERROR GENERAL: STATE STAGE: ', uiStage)
      log.debug('PS ERROR GENERAL: STAGE: ', convertStageName(router.query.pageStep))
      setUiStage(convertStageName(router.query.pageStep))
      setContent(getStageFeatures(lang, convertStageName(router.query.pageStep)))
    }
  }, [router.query.pageStep, lang])

  return (
    <FeatureDynamicView
      width="full"
      titleLinkHref="/account/home"
      hasBackLink={false}
      hasLanguageSwitcher={true}
    >
      <Dynamic
        componentMap={componentMap}
        headingCount={headingCount}
        content={content}
        errors={errors}
        uiElements={[]}
        uiStage={uiStage}
        fromError={true}
      />
    </FeatureDynamicView>
  )
}
export { ErrorGeneral }
export default WithLang(ErrorGeneral)

ErrorGeneral.propTypes = {
  lang: PropTypes.string
}
