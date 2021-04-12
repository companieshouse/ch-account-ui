import React from 'react'
import NlToBr from '../layout/NlToBr'

const SummaryListItem = (props) => {
  const { children, renderFeatures, label, value, action } = props

  return (
    <div className="govuk-summary-list__row">
      <dt className="govuk-summary-list__key">
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
