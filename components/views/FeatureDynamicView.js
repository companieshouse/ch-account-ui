import PropTypes from 'prop-types'
import React from 'react'
import WidthContainer from '../general-ui/layout/WidthContainer'
import BackLink from '../general-ui/interaction/BackLink'
import Main from '../general-ui/layout/Main'
import Column from '../general-ui/layout/Column'
import Row from '../general-ui/layout/Row'
import HeadingCount from '../../services/HeadingCount'
import { errorsPropType } from '../../services/propTypes'

const FeatureDynamicView = (props) => {
  const {
    hasBackLink = true,
    width = 'two-thirds',
    formAction = '',
    onSubmit,
    renderFeatures
  } = props

  return (
    <WidthContainer>
      {hasBackLink === true && <BackLink testId="backLink">Back</BackLink>}
      <Main>
        <Row>
          <Column width={width}>
            {Boolean(formAction || onSubmit) === true && <form action={formAction} onSubmit={onSubmit} method="post" noValidate={true}>
              {renderFeatures(props)}
            </form>}
            {Boolean(formAction || onSubmit) === false && <>
              {renderFeatures(props)}
            </>}
          </Column>
        </Row>
      </Main>
    </WidthContainer>
  )
}

export default FeatureDynamicView

FeatureDynamicView.propTypes = {
  errors: errorsPropType,
  formAction: PropTypes.string,
  headingCount: PropTypes.instanceOf(HeadingCount),
  onSubmit: PropTypes.func,
  renderFeatures: PropTypes.func.isRequired,
  uiElements: PropTypes.array,
  uiFeatures: PropTypes.array,
  width: PropTypes.string,
  hasBackLink: PropTypes.bool
}

FeatureDynamicView.defaultProps = {
  errors: [],
  formAction: '',
  uiElements: [],
  uiFeatures: [],
  width: 'two-thirds',
  hasBackLink: true
}
