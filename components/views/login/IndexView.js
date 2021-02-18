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
import LinkText from '../../../components/general-ui/interaction/LinkText'
import NameCallback from '../../forgerock-ui/NameCallback'
import PasswordCallback from '../../forgerock-ui/PasswordCallback'
import HeadingCount from '../../../services/HeadingCount'

const LoginIndexView = ({ formAction = '/api/v1.0/login', onSubmit, errors = [], uiElements = [], headingCount }) => {
  return (
    <WidthContainer>
      <BackLink>Back</BackLink>
      <Main>
        <Row>
          <Column type='two-thirds'>
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

export default LoginIndexView

LoginIndexView.propTypes = {
  errors: PropTypes.array,
  formAction: PropTypes.string,
  onSubmit: PropTypes.func,
  uiElements: PropTypes.array,
  headingCount: PropTypes.instanceOf(HeadingCount)
}

LoginIndexView.defaultProps = {
  errors: [],
  formAction: '/api/v1.0/login',
  uiElements: []
}
