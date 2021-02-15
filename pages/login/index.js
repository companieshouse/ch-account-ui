import React from 'react'
import WidthContainer from '../../components/layout/WidthContainer'
import BackLink from '../../components/interaction/BackLink'
import Main from '../../components/layout/Main'
import Column from '../../components/layout/Column'
import Row from '../../components/layout/Row'
import ErrorSummary from '../../components/typeography/ErrorSummary'
import HeadingText from '../../components/typeography/HeadingText'
import FormGroup from '../../components/interaction/FormGroup'
import InputField from '../../components/interaction/InputField'
import BodyText from '../../components/typeography/BodyText'
import Button from '../../components/interaction/Button'
import LinkText from '../../components/interaction/LinkText'

const Login = ({ formAction = '/loin', onSubmit, errors = [{ label: 'Enter your email address', anchor: 'username' }] }) => {
  return (
    <WidthContainer>
      <BackLink href="/">Back</BackLink>
      <Main>
        <Row>
          <Column type='two-thirds'>
            <form action={formAction} onSubmit={onSubmit} method="post">
              {errors.length === 0 && <HeadingText type="h1">Sign in to your Companies House account</HeadingText>}
              {errors.length > 0 && <>
                <ErrorSummary type="h1" title="There is a problem" errors={errors}/>
                <HeadingText type="h2">Sign in to your Companies House account</HeadingText>
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
