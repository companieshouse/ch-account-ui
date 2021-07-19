import PropTypes from 'prop-types'
import React from 'react'

const SummaryList = (props) => {
  const { children, className, customLayout, renderFeatures, listItems, hasActions } = props
  const classes = [className]
  if (customLayout) classes.push('summary-list')

  const finalClassName = classes.join(' ').trim()

  return (
    <dl className={`govuk-summary-list ${finalClassName}`}>
      {listItems.map((listItem, index) => <div key={`${listItem.label}_${index}`} className="govuk-summary-list__row">
        <dt className={`govuk-summary-list__key${customLayout ? ' summary-list__key' : ''}`}>
          {listItem.label}
          {listItem.hint && <span className="govuk-body govuk-hint">{listItem.hint}</span>}
        </dt>
        <dd className={`govuk-summary-list__value${customLayout ? ' summary-list__value' : ''}`}>
          {listItem.value}
        </dd>
        {hasActions && !listItem.action &&
        <span className={`govuk-summary-list__actions${customLayout ? ' summary-list__actions' : ''}`}/>
        }
        {hasActions && listItem.action &&
        <dd className={`govuk-summary-list__actions${customLayout ? ' summary-list__actions' : ''}`}>
          {listItem.action}
        </dd>
        }
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
  hasActions: PropTypes.bool,
  renderFeatures: PropTypes.func,
  listItems: PropTypes.array
}

SummaryList.defaultProps = {
  className: '',
  renderFeatures: () => { return null },
  listItems: []
}
