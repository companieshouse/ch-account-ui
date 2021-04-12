import PropTypes from 'prop-types'
import React from 'react'
import Router from 'next/router'
import { logoutFlow } from '../../services/forgerock'
import HeadingCount from '../../services/HeadingCount'
import Main from '../../components/general-ui/layout/Main'
import Row from '../../components/general-ui/layout/Row'
import Column from '../../components/general-ui/layout/Column'
import PageHeading from '../../components/general-ui/typeography/PageHeading'
import BodyText from '../../components/general-ui/typeography/BodyText'
import LinkText from '../../components/general-ui/interaction/LinkText'
import WidthContainer from '../../components/general-ui/layout/WidthContainer'
import withLang from '../../services/lang/withLang'
import { CH_COOKIE_NAME } from '../../services/environment'
import { useCookies } from 'react-cookie'
import { translate } from '../../services/translate'
import Header from '../../components/general-ui/Header'

const Logout = ({ lang }) => {
  const [, , removeCookie] = useCookies()
  const [errors, setErrors] = React.useState([])
  const headingCount = new HeadingCount()

  const doLogout = () => {
    logoutFlow({
      onSuccess: () => {
        removeCookie(CH_COOKIE_NAME, { path: '/' })
        Router.push('/account/login')
      },
      onFailure: (err) => {
        setErrors([{
          label: translate(lang, 'LOGOUT_SERVICE_ERROR')
        }, {
          label: err
        }])
      }
    })
  }

  React.useEffect(() => {
    headingCount.reset()
    doLogout()
  }, [])

  return (
    <>
      <Header/>
      <WidthContainer>
        <Main>
          <Row>
            <Column width='two-thirds'>
              <PageHeading headingCount={headingCount} errors={errors}>Sign out of your Companies House
                account</PageHeading>
              <BodyText>
                <LinkText href={'/account/login'} testId='loginToAccountLink'>Sign in to your account</LinkText>
              </BodyText>
            </Column>
          </Row>
        </Main>
      </WidthContainer>
    </>
  )
}

export default withLang(Logout)

Logout.propTypes = {
  lang: PropTypes.string
}
