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
import List from '../../../components/typeography/List'
import ListItem from '../../../components/typeography/ListItem'
import Details from '../../../components/interaction/Details'
import LinkText from '../../../components/interaction/LinkText'
import HeadingCount from '../../../services/HeadingCount'

const RegisterEmailVerification = ({ formAction = '/api/v1.0/register', onSubmit, errors = [], userDetails = { fullName: '', emailAddress: 'test@user.com' } }) => {
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
            <form action={formAction} onSubmit={onSubmit} method="post">
              <input type="hidden" name="step" value="2" />
              {errors.length === 0 && <HeadingText headingCount={headingCount}>Verify your email address</HeadingText>}
              {errors.length > 0 && <>
                <ErrorSummary headingCount={headingCount} title="There is a problem" errors={errors}/>
                <HeadingText headingCount={headingCount}>Verify your email address</HeadingText>
              </>}

              <BodyText>
                We&apos;ve sent an email to {emailAddress} that contains a verification link.
              </BodyText>

              <List type='number'>
                <ListItem>Open the email.</ListItem>
                <ListItem>Select the verification link in the email.</ListItem>
              </List>

              <BodyText weight="bold">
                This page will update automatically when you select the link.
              </BodyText>

              <Details label='I have not received an email'>
                <p>The email may take a few minutes to arrive. Its subject line is &apos;Verify your email address - Companies House&apos;.</p>
                <p>Check your junk folder. If it still has not arrived, <LinkText>you can ask us to send you another email</LinkText>.</p>
                <p>If you have given us the wrong email address you <LinkText href='/register/provide-contact-details'>can give us a different email address</LinkText>.</p>
              </Details>
            </form>
          </Column>
        </Row>
      </Main>
    </WidthContainer>
  )
}

export default RegisterEmailVerification
