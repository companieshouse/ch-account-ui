import PropTypes from 'prop-types'
import React, { useEffect, useMemo, useState } from 'react'
import HeadingCount from '../../../services/HeadingCount'
import WithLang from '../../../services/lang/WithLang'
import FeatureDynamicView from '../../../components/views/FeatureDynamicView'
import { getStageFeatures } from '../../../services/translate'
import { errorsPropType } from '../../../services/propTypes'
import Dynamic from '../../../components/Dynamic'
import componentMap from '../../../services/componentMap'
import WithQueryParams from '../../../components/providers/WithQueryParams'
import useFRAuth from '../../../services/useFRAuth'
import { translateErrors } from '../../../services/errors'
import { formatNumber } from '../../../services/formatting'

const YourCompanies = ({ lang, queryParams }) => {
  const [search, setSearch] = useState()
  const { profile, companyData, loading, errors } = useFRAuth({ fetchCompanyData: true, companyStatus: 'confirmed', companySearch: search })
  const uiStage = 'HOME_YOUR_COMPANIES'
  const headingCount = useMemo(() => new HeadingCount(), [])
  const content = getStageFeatures(lang, uiStage)

  useEffect(() => {
    headingCount.reset()
  })

  const onSearch = (search) => {
    setSearch(search)
  }

  const showCount = loading ? false : !!search

  return (
    <FeatureDynamicView
      width="full"
      titleLinkHref="/account/home"
      hasBackLink={false}
      hasLogoutLink={true}
      hasAccountLinks
      accountLinksItem={2}
    >
      <Dynamic
        companies={companyData}
        componentMap={componentMap}
        content={content}
        errors={translateErrors(errors, lang)}
        handlers={{ onSearch }}
        headingCount={headingCount}
        loading={loading}
        noCompanies={!search && companyData.length === 0}
        profile={profile}
        searchCount={companyData ? formatNumber(companyData.length) : null}
        showCount={showCount}
        uiElements={[]}
        uiStage={uiStage}
        lang={lang}
        {...queryParams}
      />

    </FeatureDynamicView>
  )
}

export { YourCompanies }

export default WithQueryParams(WithLang(YourCompanies))

YourCompanies.propTypes = {
  companies: PropTypes.array,
  errors: errorsPropType,
  headingCount: PropTypes.instanceOf(HeadingCount),
  profile: PropTypes.object,
  lang: PropTypes.string,
  accessToken: PropTypes.string,
  queryParams: PropTypes.object
}

YourCompanies.defaultProps = {
  companies: [],
  profile: {}
}
