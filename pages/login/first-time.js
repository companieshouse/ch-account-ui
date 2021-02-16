import React from 'react'
import WidthContainer from '../../components/layout/WidthContainer'
import BackLink from '../../components/interaction/BackLink'
import Main from '../../components/layout/Main'
import Column from '../../components/layout/Column'
import Row from '../../components/layout/Row'
import ErrorSummary from '../../components/typeography/ErrorSummary'
import HeadingText from '../../components/typeography/HeadingText'
import BodyText from '../../components/typeography/BodyText'
import Button from '../../components/interaction/Button'
import InsetText from '../../components/typeography/InsetText'
import HeadingCount from '../../services/HeadingCount'

const LoginFirstTime = ({
  errors = [{ label: 'Foo', anchor: 'bar' }], userDetails = {
    fullName: '',
    emailAddress: 'test@user.com'
  }
}) => {
  const { emailAddress } = userDetails
  const headingCount = new HeadingCount()

  React.useEffect(() => {
    headingCount.reset()
  })

  return (
    <WidthContainer>
      <BackLink>Back</BackLink>
      <Main>
        <Row>
          <Column type='two-thirds'>
            {errors.length === 0 && <HeadingText headingCount={headingCount}>You have create a Companies House account</HeadingText>}
            {errors.length > 0 && <>
              <ErrorSummary headingCount={headingCount} title="There is a problem" errors={errors}/>
              <HeadingText headingCount={headingCount}>You have create a Companies House account</HeadingText>
            </>}

            <InsetText>
              Your Companies House account has been created and {emailAddress} has been verified. We&apos;ve send you
              a confirmation email.
            </InsetText>

            <HeadingText headingCount={headingCount} size="m">Next steps</HeadingText>

            <BodyText>
              Now you&apos;ve created an account, you should add companies you want to update or file for online. You
              can also authorise people to file for a company.
            </BodyText>

            <Button href={'/account/home'} type="link" className="govuk-button" data-module="govuk-button">
              View your account
            </Button>
          </Column>
        </Row>
      </Main>
    </WidthContainer>
  )
}

export default LoginFirstTime
