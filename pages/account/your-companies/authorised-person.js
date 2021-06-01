import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import HeadingCount from '../../../services/HeadingCount'
import { useRouter } from 'next/router'
import WithLang from '../../../services/lang/WithLang'
import FeatureDynamicView from '../../../components/views/FeatureDynamicView'
import { getStageFeatures } from '../../../services/translate'
import { errorsPropType } from '../../../services/propTypes'
import Dynamic from '../../../components/Dynamic'
import componentMap from '../../../services/componentMap'
import { getCompaniesAssociatedWithUser } from '../../../services/forgerock'
import WithAccessToken from '../../../components/providers/WithAccessToken'
import WithProfile from '../../../components/providers/WithProfile'
import { generateQueryUrl } from '../../../services/queryString'

const AuthorisedPerson = ({ errors, lang, profile, accessToken }) => {
  const router = useRouter()
  const [associationData, setAssociationData] = React.useState({ count: '0', companies: [] })
  const uiStage = 'HOME_AUTHORISED_PERSON'
  const headingCount = useMemo(() => new HeadingCount(), [])
  const content = getStageFeatures(lang, uiStage)
  const { sub } = profile
  const { companyNumber, userId } = router.query

  React.useEffect(() => {
    headingCount.reset()

    getCompaniesAssociatedWithUser(accessToken, sub, companyNumber).then((response) => {
      const company = response.companies[0]
      company.resendLink = generateQueryUrl('/account/authorise/_start/', { companyNumber: company.number, companyName: company.name })
      setAssociationData({
        count: response.count,
        company,
        user: company.users.filter((user) => (userId === user._refResourceId))[0]
      })
    })
  }, [accessToken, headingCount, sub, companyNumber, userId])

  return (
    <FeatureDynamicView
      titleLinkHref="/account/home"
      hasLogoutLink={true}
      hasAccountLinks={true}
    >
      <Dynamic
        componentMap={componentMap}
        headingCount={headingCount}
        content={content}
        errors={errors}
        company={associationData.company}
        user={associationData.user}
      />
    </FeatureDynamicView>
  )
}

export { AuthorisedPerson }

export default WithAccessToken(WithProfile(WithLang(AuthorisedPerson)))

AuthorisedPerson.propTypes = {
  companies: PropTypes.array,
  companyNumber: PropTypes.string,
  errors: errorsPropType,
  headingCount: PropTypes.instanceOf(HeadingCount),
  profile: PropTypes.object,
  lang: PropTypes.string,
  accessToken: PropTypes.string,
  queryParams: PropTypes.object
}

AuthorisedPerson.defaultProps = {
  companies: [],
  errors: [],
  profile: {}
}
