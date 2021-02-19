import React from 'react'
import WidthContainer from '../../components/general-ui/layout/WidthContainer'
import Column from '../../components/general-ui/layout/Column'
import HeadingText from '../../components/general-ui/typeography/HeadingText'
import ErrorSummary from '../../components/general-ui/typeography/ErrorSummary'
import BodyText from '../../components/general-ui/typeography/BodyText'
import Main from '../../components/general-ui/layout/Main'
import Row from '../../components/general-ui/layout/Row'
import BackLink from '../../components/general-ui/interaction/BackLink'
import List from '../../components/general-ui/typeography/List'
import ListItem from '../../components/general-ui/typeography/ListItem'
import Details from '../../components/general-ui/interaction/Details'
import LinkText from '../../components/general-ui/interaction/LinkText'
import HeadingCount from '../../services/HeadingCount'

const RegisterEmailVerification = ({ formAction = '/api/v1.0/register', onSubmit, errors = [], userDetails = { fullName: '', emailAddress: 'test@user.com' } }) => {
  const { emailAddress } = userDetails
  const headingCount = new HeadingCount()

  React.useEffect(() => {
    headingCount.reset()
  })

  return (
    <WidthContainer>
      <BackLink testId="backLink">Back</BackLink>
      <Main>
        <Row>
          <Column width='two-thirds'>
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
                <p>Check your junk folder. If it still has not arrived, <LinkText href='https://gov.uk' testId="sendAnotherEmailLink">you can ask us to send you another email</LinkText>.</p>
                <p>If you have given us the wrong email address you <LinkText href='/register/provide-contact-details' testId="giveUsDifferentEmailAddressLink">can give us a different email address</LinkText>.</p>
              </Details>
            </form>
          </Column>
        </Row>
      </Main>
    </WidthContainer>
  )
}

export default RegisterEmailVerification
