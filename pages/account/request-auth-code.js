import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import WithLang from '../../services/lang/WithLang'
import { getStageFeatures } from '../../services/translate'
import FeatureDynamicView from '../../components/views/FeatureDynamicView'
import Dynamic from '../../components/Dynamic'
import componentMap from '../../services/componentMap'
import HeadingCount from '../../services/HeadingCount'
import WithQueryParams from '../../components/providers/WithQueryParams'
import { CH_EWF_REQUEST_AUTH_CODE_HOME_URL, CH_EWF_REQUEST_AUTH_CODE_URL } from '../../services/environment'

const RequestAuthCode = ({ lang, queryParams }) => {
  const headingCount = useMemo(() => new HeadingCount(), [])
  const uiStage = 'REQUEST_AUTH_CODE'
  const content = getStageFeatures(lang, uiStage)

  const links = {
    requestAuthCodeURL: CH_EWF_REQUEST_AUTH_CODE_URL,
    requestAuthCodeHomeURL: CH_EWF_REQUEST_AUTH_CODE_HOME_URL
  }

  return (
    <FeatureDynamicView
      hasBackLink={false}
      hasAccountLinks={true}
      hasLogoutLink={true}
    >
      <Dynamic
        {...queryParams}
        componentMap={componentMap}
        headingCount={headingCount}
        content={content}
        errors={[]}
        uiElements={[]}
        links={links}
        uiStage={uiStage}
      />
    </FeatureDynamicView>
  )
}

export { RequestAuthCode }

export default WithQueryParams(WithLang(RequestAuthCode))

RequestAuthCode.propTypes = {
  lang: PropTypes.string.isRequired,
  queryParams: PropTypes.object.isRequired
}
