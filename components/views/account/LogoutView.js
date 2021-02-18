import PropTypes from 'prop-types'
import React from 'react'
import WidthContainer from '../../general-ui/layout/WidthContainer'
import Main from '../../general-ui/layout/Main'
import Column from '../../general-ui/layout/Column'
import Row from '../../general-ui/layout/Row'
import ErrorSummary from '../../general-ui/typeography/ErrorSummary'
import HeadingText from '../../general-ui/typeography/HeadingText'
import BodyText from '../../general-ui/typeography/BodyText'
import HeadingCount from '../../../services/HeadingCount'

const LogoutView = ({ errors = [], headingCount }) => {
  return (
    <WidthContainer>
      <Main>
        <Row>
          <Column width='two-thirds'>
              {errors.length === 0 &&
              <HeadingText headingCount={headingCount}>Sign in to your Companies House account</HeadingText>}
              {errors.length > 0 && <>
                <ErrorSummary headingCount={headingCount} title="There is a problem" errors={errors}/>
                <HeadingText headingCount={headingCount}>Sign in to your Companies House account</HeadingText>
              </>}

              <BodyText>Signing you out...</BodyText>
          </Column>
        </Row>
      </Main>
    </WidthContainer>
  )
}

export default LogoutView

LogoutView.propTypes = {
  errors: PropTypes.array,
  headingCount: PropTypes.instanceOf(HeadingCount)
}

LogoutView.defaultProps = {
  errors: []
}
