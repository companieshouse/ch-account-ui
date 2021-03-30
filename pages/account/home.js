import PropTypes from 'prop-types'
import React from 'react'
import HeadingCount from '../../services/HeadingCount'
import { useRouter } from 'next/router'
import UiFeatures from '../../components/general-ui/UiFeatures'
import withLang from '../../services/lang/withLang'
import FeatureDynamicView from '../../components/views/FeatureDynamicView'
import { getStageFeatures } from '../../services/translate'
import { errorsPropType } from '../../services/propTypes'

const Home = ({ errors, lang }) => {
  const uiStage = 'HOME_OVERVIEW'
  const headingCount = new HeadingCount()

  const [customPageProps, setCustomPageProps] = React.useState({})
  const [uiFeatures, setUiFeatures] = React.useState(getStageFeatures(lang, uiStage))
  const [uiElements, setUiElements] = React.useState([])
  const [userDetails, setUserDetails] = React.useState({
    fullName: 'Test User',
    emailAddress: 'test@user.com'
  })

  const [companies, setCompanies] = React.useState([{
    name: 'Test Company',
    number: '0123456789',
    address: '2nd Floor\nRed House\n17 London Road\nLondon\nSA73 8PH',
    personsAuthorisedToFile: [{
      name: 'Test User',
      emailAddress: 'test@user.com',
      permissions: ['FILE_ACCOUNTS', 'FILE_CONFIRMATION_STATEMENTS', 'MAKE_CHANGES_TO_THE_COMPANY'],
      canAuthOthers: true,
      status: 'Confirmed'
    }]
  }])

  const router = useRouter()
  const { notifyType, notifyHeading, notifyTitle, notifyChildren } = router.query

  React.useEffect(() => {
    headingCount.reset()
  }, [notifyType, notifyHeading, notifyTitle, notifyChildren])

  const renderFeatures = (props) => {
    return <UiFeatures {...props} />
  }

  return (
    <FeatureDynamicView
      width="full"
      hasBackLink={false}
      hasLanguageSwitcher={true}
      renderFeatures={renderFeatures}
      errors={errors}
      headingCount={headingCount}
      uiFeatures={uiFeatures}
      uiElements={uiElements}
      uiStage={uiStage}
      notifyType={notifyType}
      notifyHeading={notifyHeading}
      notifyTitle={notifyTitle}
      notifyChildren={notifyChildren}
      {...customPageProps}
    />
  )
}

export default withLang(Home)

Home.propTypes = {
  companies: PropTypes.array,
  errors: errorsPropType,
  headingCount: PropTypes.instanceOf(HeadingCount),
  userDetails: PropTypes.object
}

Home.defaultProps = {
  companies: [],
  errors: [],
  userDetails: {}
}
