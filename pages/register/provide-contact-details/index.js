import React from 'react'
import WidthContainer from '../../../components/layout/WidthContainer'
import Column from '../../../components/layout/Column'
import HeadingText from '../../../components/typeography/HeadingText'
import ErrorSummary from '../../../components/typeography/ErrorSummary'
import InsetText from '../../../components/typeography/InsetText'
import BodyText from '../../../components/typeography/BodyText'
import Main from '../../../components/layout/Main'
import Row from '../../../components/layout/Row'
import InputField from '../../../components/interaction/InputField'
import FormGroup from '../../../components/interaction/FormGroup'
import BackLink from '../../../components/interaction/BackLink'
import Button from '../../../components/interaction/Button'
import HeadingCount from '../../../services/HeadingCount'

const RegisterContactDetails = ({ formAction = '/api/v1.0/register', onSubmit, errors = [] }) => {
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
            <form action={formAction} onSubmit={onSubmit} method="post">
              <input type="hidden" name="step" value="1" />
              {errors.length === 0 && <HeadingText headingCount={headingCount}>What are your contact details?</HeadingText>}
              {errors.length > 0 && <>
                <ErrorSummary headingCount={headingCount} title="There is a problem" errors={errors}/>
                <HeadingText headingCount={headingCount}>What are your contact details?</HeadingText>
              </>}

              <BodyText>
                We will send you an email that contains a verification link. This will verify that
                you have access to the email address you give us and will make your account more secure.
              </BodyText>

              <InsetText>
                For your security, we may ask you to verify your details again when you
                sign back in to your Companies House account.
              </InsetText>

              <FormGroup errors={errors} groupIds={['fullName']}>
                <InputField id="fullName" type="text" label="Full name" errors={errors} />
              </FormGroup>

              <FormGroup errors={errors} groupIds={['username']}>
                <InputField id="email" type="text" autoComplete="email" label="Email address" errors={errors} />
              </FormGroup>

              <Button type="submit" className="govuk-button" data-module="govuk-button">
                Continue
              </Button>
            </form>
          </Column>
        </Row>
      </Main>
    </WidthContainer>
  )
}

export default RegisterContactDetails
