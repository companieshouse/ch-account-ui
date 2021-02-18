import React from 'react'
import WidthContainer from '../../../components/general-ui/layout/WidthContainer'
import Column from '../../../components/general-ui/layout/Column'
import HeadingText from '../../../components/general-ui/typeography/HeadingText'
import ErrorSummary from '../../../components/general-ui/typeography/ErrorSummary'
import InsetText from '../../../components/general-ui/typeography/InsetText'
import Main from '../../../components/general-ui/layout/Main'
import Row from '../../../components/general-ui/layout/Row'
import InputField from '../../../components/general-ui/interaction/InputField'
import FormGroup from '../../../components/general-ui/interaction/FormGroup'
import BackLink from '../../../components/general-ui/interaction/BackLink'
import Button from '../../../components/general-ui/interaction/Button'
import SpanText from '../../../components/general-ui/typeography/SpanText'
import HeadingCount from '../../../services/HeadingCount'

const RegisterCreatePassword = ({ formAction = '/api/v1.0/register', onSubmit, errors = [], userDetails = { fullName: '', emailAddress: 'test@user.com' } }) => {
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
          <Column width='two-thirds'>
            <form action={formAction} onSubmit={onSubmit} method="post">
              <input type="hidden" name="step" value="1" />
              {errors.length === 0 && <HeadingText headingCount={headingCount}>Create a password for your Companies House account</HeadingText>}
              {errors.length > 0 && <>
                <ErrorSummary headingCount={headingCount} title="There is a problem" errors={errors}/>
                <HeadingText headingCount={headingCount}>Create a password for your Companies House account</HeadingText>
              </>}

              <InsetText>
                Create a password for <SpanText weight="bold">{emailAddress}</SpanText>
              </InsetText>

              <FormGroup errors={errors} groupIds={['password']}>
                <InputField fixedWidth={10} id="password" type="password" label="Enter password" errors={errors} hint="This must be at least 8 characters long" />
              </FormGroup>

              <FormGroup errors={errors} groupIds={['confirmPassword']}>
                <InputField fixedWidth={10} id="confirmPassword" type="password" label="Confirm password" errors={errors} hint="This must be at least 8 characters long" />
              </FormGroup>

              <Button type="submit" className="govuk-button" data-module="govuk-button">
                Create and continue
              </Button>
            </form>
          </Column>
        </Row>
      </Main>
    </WidthContainer>
  )
}

export default RegisterCreatePassword
