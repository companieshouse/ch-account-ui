import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import { matomoHelper } from '../../../scripts/cleanAnalytics'

const Details = (props) => {
  const detailsRef = useRef()
  const { trackEvent, pushInstruction } = useMatomo()
  const { className = '', children, summary = '', renderFeatures, matomo } = props
  const classes = [className]

  const finalClassName = classes.join(' ').trim()

  useEffect(() => {
    const Details = window.GOVUKFrontend.Details
    new Details(detailsRef.current).init()
  }, [])

  const onClick = (evt) => {
    if (matomo) {
      const cleanData = matomoHelper(matomo)
      cleanData.href = '' // ensure the href is blank

      if (cleanData.type === 'trackEvent') {
        trackEvent(cleanData)
      } else if (cleanData.type === 'trackGoal') {
        pushInstruction('trackGoal', [matomo[1]])
      }
    }
  }

  return (
    <details ref={detailsRef} className={`govuk-details ${finalClassName}`} data-module="govuk-details">
      <summary className="govuk-details__summary">
        <span className="govuk-details__summary-text" onClick={(e) => onClick(e)}>
          {summary}
        </span>
      </summary>
      <div className="govuk-details__text">
        {children}
        {renderFeatures(props)}
      </div>
    </details>
  )
}

export default Details

Details.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  summary: PropTypes.string,
  renderFeatures: PropTypes.func
}

Details.defaultProps = {
  className: '',
  summary: '',
  renderFeatures: () => { return null }
}
