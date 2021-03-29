import PropTypes from 'prop-types'
import React from 'react'
import HeadingCount from '../../services/HeadingCount'
import { useRouter } from 'next/router'
import UiFeatures from '../../components/general-ui/UiFeatures'
import withLang from '../../services/lang/withLang'

const Home = ({ errors, lang }) => {
  const uiStage = 'HOME_OVERVIEW'
  const headingCount = new HeadingCount()

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

  return (
    <WidthContainer>
      <AccountLinks userDetails={userDetails} />
      <Main>
        <Row>
          <Column width='full'>
            {errors.length === 0 && <HeadingText headingCount={headingCount} size="l" caption={translate(lang, 'LABEL_HOME')}>{userDetails.fullName}</HeadingText>}
            {errors.length > 0 && <>
              <ErrorSummary headingCount={headingCount} title="There is a problem" errors={errors}/>
              <HeadingText headingCount={headingCount} size="l" caption='Home'>{userDetails.fullName}</HeadingText>
            </>}

            <HeadingText headingCount={headingCount} size="s">Your companies</HeadingText>
            <SectionBreak />

            {companies.length === 0 && <>
              <HeadingText headingCount={headingCount} size="m">You have not added any companies to this account</HeadingText>
              <BodyText>
                To file online for a company, you must add it to your account.
              </BodyText>
              <BodyText>
                You&apos;ll need:
              </BodyText>
              <List>
                <ListItem>the company number</ListItem>
                <ListItem>the company <LinkText href="https://www.gov.uk/guidance/company-authentication-codes-for-online-filing" testId="authenticationCodeLink">authentication code</LinkText></ListItem>
              </List>
            </>}
            {companies.map((company) => <CompanySummary key={company} company={company} headingCount={headingCount} />)}
            <SectionBreak />
            <Button type="link" className="govuk-button" data-module="govuk-button" testId="addAnotherCompanyButton">
              Add another company
            </Button>
          </Column>
        </Row>
      </Main>
    </WidthContainer>
  )
}

export default withLang(Home)

Home.propTypes = {
  companies: PropTypes.array,
  errors: PropTypes.array,
  headingCount: PropTypes.instanceOf(HeadingCount),
  userDetails: PropTypes.object
}

Home.defaultProps = {
  companies: [],
  errors: [],
  userDetails: {}
}
