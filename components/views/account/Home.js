import PropTypes from 'prop-types'
import React from 'react'
import WidthContainer from '../../../components/general-ui/layout/WidthContainer'
import BackLink from '../../../components/general-ui/interaction/BackLink'
import Main from '../../../components/general-ui/layout/Main'
import Column from '../../../components/general-ui/layout/Column'
import Row from '../../../components/general-ui/layout/Row'
import ErrorSummary from '../../../components/general-ui/typeography/ErrorSummary'
import HeadingText from '../../../components/general-ui/typeography/HeadingText'
import BodyText from '../../../components/general-ui/typeography/BodyText'
import Button from '../../../components/general-ui/interaction/Button'
import List from '../../../components/general-ui/typeography/List'
import ListItem from '../../../components/general-ui/typeography/ListItem'
import LinkText from '../../../components/general-ui/interaction/LinkText'
import CompanySummary from '../../../components/application-specific/CompanySummary'
import HeadingCount from '../../../services/HeadingCount'

const AccountHome = ({ headingCount, errors = [], userDetails = {}, companies = [] }) => {
  const { fullName } = userDetails

  return (
    <WidthContainer>
      <BackLink>Back</BackLink>
      <Main>
        <Row>
          <Column type='full'>
            {errors.length === 0 && <HeadingText headingCount={headingCount} size="l" caption='Home'>{fullName}</HeadingText>}
            {errors.length > 0 && <>
              <ErrorSummary headingCount={headingCount} title="There is a problem" errors={errors}/>
              <HeadingText headingCount={headingCount} size="l" caption='Home'>{fullName}</HeadingText>
            </>}

            <HeadingText headingCount={headingCount} size="s">Your companies</HeadingText>
            <hr className="govuk-section-break govuk-section-break--m govuk-section-break--visible" />

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
                <ListItem>the company <LinkText href="https://www.gov.uk/guidance/company-authentication-codes-for-online-filing">authentication code</LinkText></ListItem>
              </List>
            </>}
            {companies.map((company) => <CompanySummary key={company} company={company} headingCount={headingCount} />)}

            <Button type="link" className="govuk-button" data-module="govuk-button">
              Add a company
            </Button>
          </Column>
        </Row>
      </Main>
    </WidthContainer>
  )
}

export default AccountHome

AccountHome.propTypes = {
  companies: PropTypes.array,
  errors: PropTypes.array,
  headingCount: PropTypes.instanceOf(HeadingCount),
  userDetails: PropTypes.object
}

AccountHome.defaultProps = {
  companies: [],
  errors: [],
  userDetails: {}
}
