import PropTypes from 'prop-types'
import React from 'react'
import HeadingCount from '../../services/HeadingCount'
import AccountLinks from '../../components/application-specific/AccountLinks'
import Main from '../../components/general-ui/layout/Main'
import Row from '../../components/general-ui/layout/Row'
import Column from '../../components/general-ui/layout/Column'
import HeadingText from '../../components/general-ui/typeography/HeadingText'
import ErrorSummary from '../../components/general-ui/typeography/ErrorSummary'
import SectionBreak from '../../components/general-ui/typeography/SectionBreak'
import BodyText from '../../components/general-ui/typeography/BodyText'
import List from '../../components/general-ui/typeography/List'
import ListItem from '../../components/general-ui/typeography/ListItem'
import LinkText from '../../components/general-ui/interaction/LinkText'
import CompanySummary from '../../components/application-specific/CompanySummary'
import Button from '../../components/general-ui/interaction/Button'
import WidthContainer from '../../components/general-ui/layout/WidthContainer'

const Home = ({ errors, companies, userDetails }) => {
  const headingCount = new HeadingCount()

  React.useEffect(() => {
    headingCount.reset()
  }, [])

  return (
    <WidthContainer>
      <AccountLinks userDetails={userDetails} />
      <Main>
        <Row>
          <Column width='full'>
            {errors.length === 0 && <HeadingText headingCount={headingCount} size="l" caption='Home'>{userDetails.fullName}</HeadingText>}
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

Home.getInitialProps = async (context) => {
  return {

    errors: [],
    userDetails: {
      fullName: 'Test User',
      emailAddress: 'test@user.com'
    },
    companies: [{
      name: 'Test Company',
      number: '0123456789',
      address: '2nd Floor Red House, 17 London Road, London, SA73 8PH',
      personsAuthorisedToFile: [{
        name: 'Test User',
        emailAddress: 'test@user.com',
        permissions: ['FILE_ACCOUNTS', 'FILE_CONFIRMATION_STATEMENTS', 'MAKE_CHANGES_TO_THE_COMPANY'],
        canAuthOthers: true,
        status: 'Confirmed'
      }]
    }]
  }
}

export default Home

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
