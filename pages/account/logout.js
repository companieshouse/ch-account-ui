import PropTypes from 'prop-types'
import React from 'react'
import Router from 'next/router'
import { logoutFlow } from '../../services/forgerock'
import HeadingCount from '../../services/HeadingCount'
import WithLang from '../../services/lang/WithLang'
import { getStageFeatures, translate } from '../../services/translate'
import FeatureDynamicView from '../../components/views/FeatureDynamicView'
import Dynamic from '../../components/Dynamic'
import componentMap from '../../services/componentMap'

const Logout = ({ lang }) => {
  const [errors, setErrors] = React.useState([])
  const headingCount = new HeadingCount()
  const uiStage = 'LOGOUT_ERROR'
  const content = getStageFeatures(lang, uiStage)

  const doLogout = () => {
    logoutFlow({
      onSuccess: () => {
        Router.push('/account/login')
      },
      onFailure: (err) => {
        setErrors([{
          label: translate(lang, 'LOGOUT_SERVICE_ERROR')
        }, {
          label: err
        }])
      }
    })
  }

  React.useEffect(() => {
    headingCount.reset()
    doLogout()
  })

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
      />
    </FeatureDynamicView>
  )
}
export { Logout }
export default WithLang(Logout)

Logout.propTypes = {
  lang: PropTypes.string
}
