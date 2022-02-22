import PropTypes from 'prop-types'
import React, { useState } from 'react'

import HeadingCount from '../../services/HeadingCount'
import WithLang from '../../services/lang/WithLang'
import { getStageFeatures } from '../../services/translate'
import FeatureDynamicView from '../../components/views/FeatureDynamicView'
import Dynamic from '../../components/Dynamic'
import componentMap from '../../services/componentMap'
import { useRouter } from 'next/router'

const ErrorWebfiling = ({ lang }) => {
  const [errors] = useState([])
  const headingCount = new HeadingCount()
  const router = useRouter()
  const [uiStage] = useState('WEBFILING')
  const [content] = useState(getStageFeatures(lang, 'WEBFILING'))

  const { query } = router
  const { context, companyNo, authCodeRequest } = query

  const paths = {
    context: context,
    companyNo: companyNo,
    authCodeRequest: authCodeRequest
  }

  return (
    <FeatureDynamicView
      width="full"
      titleLinkHref="/account/home"
      hasAccountLinks
      hasLanguageSwitcher={true}
    >
      <Dynamic
        componentMap={componentMap}
        headingCount={headingCount}
        content={content}
        errors={errors}
        uiElements={[]}
        uiStage={uiStage}
        paths={paths}
      />
    </FeatureDynamicView>
  )
}
export { ErrorWebfiling }
export default WithLang(ErrorWebfiling)

ErrorWebfiling.propTypes = {
  lang: PropTypes.string
}
