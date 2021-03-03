import PropTypes from 'prop-types'
import React from 'react'
import WidthContainer from '../general-ui/layout/WidthContainer'
import BackLink from '../general-ui/interaction/BackLink'
import Main from '../general-ui/layout/Main'
import Column from '../general-ui/layout/Column'
import Row from '../general-ui/layout/Row'
import HeadingCount from '../../services/HeadingCount'

const FeatureDynamicView = (props) => {
  const {
    formAction = '',
    onSubmit,
    renderFeatures
  } = props

  return (
    <WidthContainer>
      <BackLink testId="backLink">Back</BackLink>
      <Main>
        <Row>
          <Column width='two-thirds'>
            <form action={formAction} onSubmit={onSubmit} method="post">
              {renderFeatures(props)}
            </form>
          </Column>
        </Row>
      </Main>
    </WidthContainer>
  )
}

export default FeatureDynamicView

FeatureDynamicView.propTypes = {
  errors: PropTypes.array,
  formAction: PropTypes.string,
  onSubmit: PropTypes.func,
  renderFeatures: PropTypes.func.isRequired,
  uiElements: PropTypes.array,
  uiFeatures: PropTypes.array,
  headingCount: PropTypes.instanceOf(HeadingCount)
}

FeatureDynamicView.defaultProps = {
  errors: [],
  formAction: '',
  uiElements: [],
  uiFeatures: []
}
