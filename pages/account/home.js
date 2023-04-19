import PropTypes from 'prop-types'
import React, { useMemo, useState,useEffect } from 'react'
import HeadingCount from '../../services/HeadingCount'
import { useRouter } from 'next/router'
import WithLang from '../../services/lang/WithLang'
import FeatureDynamicView from '../../components/views/FeatureDynamicView'
import { getStageFeatures } from '../../services/translate'
import { errorsPropType } from '../../services/propTypes'
import Dynamic from '../../components/Dynamic'
import componentMap from '../../services/componentMap'
import WithQueryParams from '../../components/providers/WithQueryParams'
import { CH_EWF_AUTHENTICATED_ENTRY_URL } from '../../services/environment'
import Loading from '../../components/application-specific/Loading'
import { mapCompanyData } from '../../services/mappings'

const Home = ({ errors, lang, queryParams }) => {
  const uiStage = 'HOME_OVERVIEW'
  const { companyNo } = queryParams
  const headingCount = useMemo(() => new HeadingCount(), [])
  const content = getStageFeatures(lang, uiStage)
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState({})
  const [companyData, setCompanyData] = useState([])
  const [pendingCompanies, setPendingCompanies] = useState([])
  const [confirmedCompanies, setConfirmedCompanies] = useState([])
  const [company, setCompany] = useState([])

  const setCompanyDataAndProfile = () => {
    if (sessionStorage) {
      const storageCompanyData = JSON.parse(sessionStorage?.getItem('companyData'))
      if (storageCompanyData) {
        setCompanyData(storageCompanyData)
      }

      const storageProfile = JSON.parse(sessionStorage?.getItem('profile'))
      if (storageProfile) {
        setProfile(storageProfile)
      }

      const filteredConfirmedCompanies = companyData.filter(
        (company) => company.membershipStatus === 'confirmed'
      )
      setConfirmedCompanies(filteredConfirmedCompanies)

      const filterPendingCompanies = companyData.filter(
        (company) => company.membershipStatus === 'pending'
      )
      setPendingCompanies(filterPendingCompanies)

      const companyMatch = companyData.filter((company) =>
        company.number === companyNo ? company : false
      )
      const filteredCompany = companyMatch[0] || []
      setCompany(filteredCompany)
    }
  }

  useEffect(() => {
    headingCount.reset()
  })

  useEffect(() => {
    setCompanyDataAndProfile()
    setLoading(false)
  }, [])

  return (
    <FeatureDynamicView
      width='full'
      titleLinkHref='/account/home'
      hasBackLink={false}
      hasLanguageSwitcher={true}
      hasLogoutLink={true}
      hasAccountLinks={true}
      accountLinksItem={1}
      messages={pendingCompanies ? pendingCompanies.length : ''}
    >
      {loading
        ? (<Loading />)
        : (
        <Dynamic
          componentMap={componentMap}
          headingCount={headingCount}
          content={content}
          errors={errors}
          uiElements={[]}
          uiStage={uiStage}
          profile={profile}
          companyData={{
            count: confirmedCompanies ? confirmedCompanies.length : 0,
            pendingCount: pendingCompanies ? pendingCompanies.length : 0
          }}
          company={company ? mapCompanyData(company) : null}
          links={{ ewfAuthenticatedEntry: CH_EWF_AUTHENTICATED_ENTRY_URL }}
          {...router.query}
        />
          )}
    </FeatureDynamicView>
  )
}

export { Home }

export default WithQueryParams(WithLang(Home))

Home.propTypes = {
  companies: PropTypes.array,
  errors: errorsPropType,
  headingCount: PropTypes.instanceOf(HeadingCount),
  profile: PropTypes.object,
  accessToken: PropTypes.string,
  lang: PropTypes.string
}

Home.defaultProps = {
  companies: [],
  errors: [],
  profile: {}
}
