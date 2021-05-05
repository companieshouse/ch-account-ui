import PropTypes from 'prop-types'
import React from 'react'
import WidthContainer from '../general-ui/layout/WidthContainer'
import BackLink from '../general-ui/interaction/BackLink'
import Main from '../general-ui/layout/Main'
import Column from '../general-ui/layout/Column'
import Row from '../general-ui/layout/Row'
import HeadingCount from '../../services/HeadingCount'
import LanguageSwitcher from '../application-specific/LanguageSwitcher'
import { errorsPropType } from '../../services/propTypes'
import Header from '../general-ui/Header'
import AccountLinks from '../application-specific/AccountLinks'

const FeatureDynamicView = (props) => {
  const {
    hasBackLink = true,
    hasLanguageSwitcher = false,
    hasLogoutLink = false,
    hasAccountLinks = false,
    titleLinkHref,
    width = 'two-thirds',
    formAction = '',
    onSubmit,
    renderFeatures,
    children
  } = props

  return (
    <>
      <Header hasLogoutLink={hasLogoutLink} titleLinkHref={titleLinkHref} />
      <WidthContainer style={{ paddingTop: '20px' }}>
        {hasAccountLinks === true && <AccountLinks />}
        {(hasBackLink === true || hasLanguageSwitcher === true) && <>
            <Column width='two-thirds'>
              {hasBackLink === false && <span>&nbsp;</span>}
            </Column>
            {hasLanguageSwitcher === true && <Column width='one-third' className="alignRight">
              <Row>
                <LanguageSwitcher />
              </Row>
            </Column>}
          </>}
      </WidthContainer>
      <WidthContainer>
        {hasBackLink === true && <BackLink testId="backLink">Back</BackLink>}
        <Main className="govuk-main-wrapper--auto-spacing">
          <WidthContainer>
            <Row>
              <Column width={width}>
                {Boolean(formAction || onSubmit) === true &&
                <form action={formAction} onSubmit={onSubmit} method="post" noValidate={true}>
                  {renderFeatures(props)}
                  {children}
                </form>}
                {Boolean(formAction || onSubmit) === false && <>
                  {renderFeatures(props)}
                  {children}
                </>}
              </Column>
            </Row>
          </WidthContainer>
        </Main>
      </WidthContainer>
    </>
  )
}

export default FeatureDynamicView

FeatureDynamicView.propTypes = {
  errors: errorsPropType,
  formAction: PropTypes.string,
  headingCount: PropTypes.instanceOf(HeadingCount),
  onSubmit: PropTypes.func,
  renderFeatures: PropTypes.func,
  uiElements: PropTypes.array,
  uiFeatures: PropTypes.array,
  width: PropTypes.string,
  hasBackLink: PropTypes.bool,
  hasLanguageSwitcher: PropTypes.bool,
  children: PropTypes.node,
  hasLogoutLink: PropTypes.bool,
  hasAccountLinks: PropTypes.bool,
  titleLinkHref: PropTypes.string
}

FeatureDynamicView.defaultProps = {
  errors: [],
  formAction: '',
  uiElements: [],
  uiFeatures: [],
  width: 'two-thirds',
  hasBackLink: true,
  hasLanguageSwitcher: false,
  hasLogoutLink: false,
  hasAccountLinks: false,
  renderFeatures: () => { return null }
}
