import PropTypes from 'prop-types'
import React, { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
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
import Loading from '../../../components/application-specific/Loading'
import Pagination from '../../../components/general-ui/interaction/Pagination'

function createSearchParams (page, search) {
  const searchParams = new URLSearchParams({ page, ...(search && { search }) })
  return searchParams.toString()
}

const YourCompanies = ({ lang, queryParams }) => {
  const currentPage = Number(queryParams?.page) || 1
  const companySearch = queryParams?.search || null

  const { profile, pagination, errors, loading, companyData } = useFRAuth({
    fetchCompanyData: true,
    companySearch,
    refresh: true,
    currentPage
  })

  const uiStage = 'HOME_YOUR_COMPANIES'
  const headingCount = useMemo(() => new HeadingCount(), [])
  const { push } = useRouter()
  const content = getStageFeatures(lang, uiStage)
  const [companies, setCompanies] = useState([])

  const clickNext = async () => {
    if (currentPage < pagination.totalPages) {
      push(`/account/your-companies?${createSearchParams(currentPage + 1, companySearch)}`)
    }
  }

  const clickPrevious = async () => {
    if (currentPage > 1) {
      push(`/account/your-companies?${createSearchParams(currentPage - 1, companySearch)}`)
    }
  }

  const clickToSelectPage = async (e) => {
    const selectedPage = Number.parseInt(e.currentTarget.getAttribute('value'))
    push(`/account/your-companies?${createSearchParams(selectedPage, companySearch)}`)
  }

  useEffect(() => {
    headingCount.reset()
  })

  useEffect(() => {
    if (companyData.length > 0) {
      setCompanies(companyData.filter((company) => company.membershipStatus === 'confirmed'))
    }
  }, [companyData])

  const onSearch = (search) => {
    push(`/account/your-companies?search=${search}`)
  }

  const pendingCompanies = companies?.filter(
    (company) => company.membershipStatus === 'pending'
  )
  const showCount = loading ? false : !!companySearch
  const paginationComponent = (
    <Pagination
      pages={pagination.pages}
      currentPage={currentPage}
      startPage={pagination.startPage}
      displayPrev={true}
      displayNext={true}
      display={pagination.totalPages > 1}
      clickNext={() => clickNext()}
      clickPrevious={() => clickPrevious()}
      clickToSelectPage={(e) => clickToSelectPage(e)}
    />
  )

  const pager = pagination.totalPages && pagination.startPage && pagination.totalPages > 1 ? paginationComponent : null

  const dynamicComponent = (
    <Dynamic
      companies={companies}
      componentMap={componentMap}
      content={content}
      errors={translateErrors(errors, lang)}
      handlers={{ onSearch }}
      headingCount={headingCount}
      loading={loading}
      noCompanies={!companySearch && companies?.length === 0}
      profile={profile}
      searchCount={companies ? pagination?.totalItems : null}
      showCount={showCount}
      uiElements={[]}
      uiStage={uiStage}
      lang={lang}
      {...queryParams}
    />
  )

  return (
    <>
      <FeatureDynamicView
        width='full'
        titleLinkHref='/account/home'
        hasBackLink={false}
        hasLogoutLink={true}
        hasAccountLinks
        accountLinksItem={2}
        messages={pendingCompanies.length}
        pagination={pager}
      >
        {loading ? <Loading /> : dynamicComponent}
      </FeatureDynamicView>
    </>
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
