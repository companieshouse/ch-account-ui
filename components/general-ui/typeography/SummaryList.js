import PropTypes from 'prop-types'
import React from 'react'

const SummaryList = (props) => {
  const { children, className = '', renderFeatures, listItems = [] } = props
  const classes = [className]

  const finalClassName = classes.join(' ').trim()

  return (
    <dl className={`govuk-summary-list ${finalClassName}`}>
      {listItems.map((listItem, index) => <div key={`${listItem.label}_${index}`} className="govuk-summary-list__row">
        <dt className="govuk-summary-list__key">
          {listItem.label}
        </dt>
        <dd className="govuk-summary-list__value">
          {listItem.value}
        </dd>
        {listItem.action && <dd className="govuk-summary-list__actions">
          <a className="govuk-link" href={`${listItem.action.href}`}>
            {listItem.action.label}<span className="govuk-visually-hidden"> {listItem.action.desc || ''}</span>
          </a>
        </dd>}
      </div>)}
      {children}
      {renderFeatures(props)}
    </dl>
  )
}

export default SummaryList

SummaryList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  renderFeatures: PropTypes.func,
  listItems: PropTypes.array
}

SummaryList.defaultProps = {
  className: '',
  renderFeatures: () => { return null },
  listItems: []
}
