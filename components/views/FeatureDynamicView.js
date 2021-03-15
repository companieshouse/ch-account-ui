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
    width = 'two-thirds',
    formAction = '',
    onSubmit,
    renderFeatures
  } = props

  return (
    <WidthContainer>
      <BackLink testId="backLink">Back</BackLink>
      <Main>
        <Row>
          <Column width={width}>
            {Boolean(formAction) === true && <form action={formAction} onSubmit={onSubmit} method="post">
              {renderFeatures(props)}
            </form>}
            {Boolean(formAction) === false && <>
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
  errors: PropTypes.array,
  formAction: PropTypes.string,
  headingCount: PropTypes.instanceOf(HeadingCount),
  onSubmit: PropTypes.func,
  renderFeatures: PropTypes.func.isRequired,
  uiElements: PropTypes.array,
  uiFeatures: PropTypes.array,
  width: PropTypes.string
}

FeatureDynamicView.defaultProps = {
  errors: [],
  formAction: '',
  uiElements: [],
  uiFeatures: [],
  width: 'two-thirds'
}
