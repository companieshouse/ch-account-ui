import PropTypes from 'prop-types'
import React from 'react'
import NlToBr from '../layout/NlToBr'

const SummaryListItem = (props) => {
  const { renderFeatures, label, value, action } = props

  return (
    <div className="govuk-summary-list__row">
      <dt className="summary-list__key">
        <NlToBr content={label} />
      </dt>
      <dd className="govuk-summary-list__value">
        <NlToBr content={value} />
      </dd>
      {Boolean(action) === true && <dd className="govuk-summary-list__actions">
        <a className="govuk-link" href={`${action.href}`}>
          <NlToBr content={action.label} /><span className="govuk-visually-hidden"> {action.desc || ''}</span>
        </a>
      </dd>}
      {renderFeatures(props)}
    </div>
  )
}

export default SummaryListItem

SummaryListItem.propTypes = {
  action: PropTypes.object,
  label: PropTypes.node,
  renderFeatures: PropTypes.func,
  value: PropTypes.node
}

SummaryListItem.defaultProps = {
  renderFeatures: () => { return null }
}
