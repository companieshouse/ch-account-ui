import React from 'react'
import Button from '../components/interaction/Button'
import HeadingText from '../components/typeography/HeadingText'
import BodyText from '../components/typeography/BodyText'
import List from '../components/typeography/List'
import ListItem from '../components/typeography/ListItem'
import InsetText from '../components/typeography/InsetText'
import Row from '../components/layout/Row'
import Column from '../components/layout/Column'
import Main from '../components/layout/Main'
import WidthContainer from '../components/layout/WidthContainer'

const Home = () => {
  return (
    <WidthContainer>
      <Main>
        <Row>
          <Column type='two-thirds'>
            <HeadingText type="h1" size="xl">Companies House account</HeadingText>
            <BodyText>A Companies House account allows you to:</BodyText>
            <List type="bullet">
              <ListItem>find and update company information and file for your company online</ListItem>
              <ListItem>authorise people who can update information and file documents for your company</ListItem>
            </List>

            <InsetText>You&apos;ll need to provide an email address and verify that you have access to it to create a Companies House account.</InsetText>

            <BodyText>Registering takes around 5 minutes</BodyText>

            <Row>
              <Column type='one-half'>
                <HeadingText type="h2" size="s">I do not have a Companies House account</HeadingText>
                <BodyText>To file for your company online and update the company information you&apos;ll need to set up an online account.</BodyText>
                <Button renderAs="link" href="/register/provide-contact-details" label="Create an account" hasStartIcon={true} />
              </Column>
              <Column type='one-half'>
                <HeadingText type="h2" size="s">I already have a Companies House account</HeadingText>
                <BodyText>View, update and file for a company online byu signing in to your existing account.</BodyText>
                <Button renderAs="link" href="/login" label="Sign in" hasStartIcon={true} />
              </Column>
            </Row>
          </Column>
        </Row>
      </Main>
    </WidthContainer>
  )
}

export default Home
