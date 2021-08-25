import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import HeadingCount from '../../../services/HeadingCount'
import WithLang from '../../../services/lang/WithLang'
import FeatureDynamicView from '../../../components/views/FeatureDynamicView'
import { getStageFeatures } from '../../../services/translate'
import { errorsPropType } from '../../../services/propTypes'
import Dynamic from '../../../components/Dynamic'
import componentMap from '../../../services/componentMap'
import { generateQueryUrl } from '../../../services/queryString'
import useFRAuth from '../../../services/useFRAuth'
import WithQueryParams from '../../../components/providers/WithQueryParams'
import Loading from '../../../components/application-specific/Loading'

const AuthorisedPerson = ({ errors, lang, queryParams }) => {
  const { companyNumber, userId } = queryParams
  const { companyData, loading } = useFRAuth({ fetchCompanyData: true, companySearch: companyNumber })
  const uiStage = 'HOME_AUTHORISED_PERSON'
  const headingCount = useMemo(() => new HeadingCount(), [])
  const content = getStageFeatures(lang, uiStage)

  const company = companyData.companies[0]
  const user = company?.members?.filter((member) => (userId === member._id))[0]

  if (!loading && company) {
    company.resendPath = generateQueryUrl('/account/authorise/_start/', { companyNumber: company.number, companyName: company.name })
    company.removeAuthorisedPath = generateQueryUrl('/account/your-companies/remove-authorised-person/', { companyNumber: company.number, userId })
    company.removePendingdPath = generateQueryUrl('/account/your-companies/remove-authorised-person/', { companyNumber: company.number, userId, pending: true })
  }

  return (
    <FeatureDynamicView
      titleLinkHref="/account/home"
      hasLogoutLink={true}
      hasAccountLinks
      accountLinksItem={2}
    >
      {loading
        ? <Loading/>
        : <Dynamic
          componentMap={componentMap}
          headingCount={headingCount}
          content={content}
          errors={errors}
          company={company}
          user={user}
        />
      }
    </FeatureDynamicView>
  )
}

export { AuthorisedPerson }

export default WithQueryParams(WithLang(AuthorisedPerson))

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
