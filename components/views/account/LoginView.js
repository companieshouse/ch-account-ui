import PropTypes from 'prop-types'
import React from 'react'
import WidthContainer from '../../general-ui/layout/WidthContainer'
import BackLink from '../../general-ui/interaction/BackLink'
import Main from '../../general-ui/layout/Main'
import Column from '../../general-ui/layout/Column'
import Row from '../../general-ui/layout/Row'
import ErrorSummary from '../../general-ui/typeography/ErrorSummary'
import HeadingText from '../../general-ui/typeography/HeadingText'
import BodyText from '../../general-ui/typeography/BodyText'
import Button from '../../general-ui/interaction/Button'
import LinkText from '../../general-ui/interaction/LinkText'
import NameCallback from '../../forgerock-ui/NameCallback'
import PasswordCallback from '../../forgerock-ui/PasswordCallback'
import HeadingCount from '../../../services/HeadingCount'

const LoginView = ({ formAction = '/api/v1.0/login', onSubmit, errors = [], uiElements = [], headingCount }) => {
  return (
    <WidthContainer>
      <BackLink testId="backLink">Back</BackLink>
      <Main>
        <Row>
          <Column width='two-thirds'>
            <form action={formAction} onSubmit={onSubmit} method="post">
              {errors.length === 0 &&
              <HeadingText headingCount={headingCount}>Sign in to your Companies House account</HeadingText>}
              {errors.length > 0 && <>
                <ErrorSummary headingCount={headingCount} title="There is a problem" errors={errors}/>
                <HeadingText headingCount={headingCount}>Sign in to your Companies House account</HeadingText>
              </>}

              {uiElements.map((uiElementPayload, index) => {
                const uiElement = uiElementPayload.payload
                console.log('Processing ui element', uiElement)
                switch (uiElement.type) {
                  case 'NameCallback':
                    return <NameCallback key={index} uiElement={uiElement} errors={errors} />

                  case 'PasswordCallback':
                    return <PasswordCallback key={index} uiElement={uiElement} errors={errors} />

                  default:
                    return null
                }
              })}

              <Button type="submit" className="govuk-button" data-module="govuk-button" testId="signInButton">
                Sign in
              </Button>

              <BodyText>
                <LinkText href="/register/provide-contact-details" testId="registerNewAccountLink">Register a new account</LinkText>
              </BodyText>

              <BodyText>
                <LinkText href="/password-recovery/request" testId="forgottenMyPasswordLink">I&apos;ve forgotten my password</LinkText>
              </BodyText>
            </form>
          </Column>
        </Row>
      </Main>
    </WidthContainer>
  )
}

export default LoginView

LoginView.propTypes = {
  errors: PropTypes.array,
  formAction: PropTypes.string,
  onSubmit: PropTypes.func,
  uiElements: PropTypes.array,
  headingCount: PropTypes.instanceOf(HeadingCount)
}

LoginView.defaultProps = {
  errors: [],
  formAction: '/api/v1.0/login',
  uiElements: []
}
