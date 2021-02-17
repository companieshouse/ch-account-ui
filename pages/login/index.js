import React from 'react'
import WidthContainer from '../../components/general-ui/layout/WidthContainer'
import BackLink from '../../components/general-ui/interaction/BackLink'
import Main from '../../components/general-ui/layout/Main'
import Column from '../../components/general-ui/layout/Column'
import Row from '../../components/general-ui/layout/Row'
import ErrorSummary from '../../components/general-ui/typeography/ErrorSummary'
import HeadingText from '../../components/general-ui/typeography/HeadingText'
import FormGroup from '../../components/general-ui/interaction/FormGroup'
import InputField from '../../components/general-ui/interaction/InputField'
import BodyText from '../../components/general-ui/typeography/BodyText'
import Button from '../../components/general-ui/interaction/Button'
import LinkText from '../../components/general-ui/interaction/LinkText'
import HeadingCount from '../../services/HeadingCount'

const Login = ({ formAction = '/api/v1.0/login', onSubmit, errors = [] }) => {
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
              {errors.length === 0 && <HeadingText headingCount={headingCount}>Sign in to your Companies House account</HeadingText>}
              {errors.length > 0 && <>
                <ErrorSummary headingCount={headingCount} title="There is a problem" errors={errors}/>
                <HeadingText headingCount={headingCount}>Sign in to your Companies House account</HeadingText>
              </>}

              <FormGroup errors={errors} groupIds={['username']}>
                <InputField id="username" type="text" autoComplete="email" label="Email address" errors={errors} />
              </FormGroup>

              <FormGroup errors={errors} groupIds={['password']}>
                <InputField id="password" type="password" label="Password" errors={errors} />
              </FormGroup>

              <Button type="submit" className="govuk-button" data-module="govuk-button">
                Sign in
              </Button>

              <BodyText>
                <LinkText href="/register/provide-contact-details">Register a new account</LinkText>
              </BodyText>

              <BodyText>
                <LinkText href="/password-recovery/request">I&apos;ve forgotten my password</LinkText>
              </BodyText>
            </form>
          </Column>
        </Row>
      </Main>
    </WidthContainer>
  )
}

export default Login
