import PropTypes from 'prop-types'
import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import { matomoHelper } from '../../../scripts/cleanAnalytics'

import log from '../../../services/log'
import { MATOMO_LOGGING } from '../../../services/environment'

const SummaryList = (props) => {
  const { children, className, customLayout, renderFeatures, listItems, hasActions, matomo } = props
  const classes = [className]
  const { trackEvent, pushInstruction } = useMatomo()

  if (customLayout) classes.push('summary-list')

  const onClick = () => {
    if (matomo) {
      const cleanData = matomoHelper(matomo)
      cleanData.href = '' // ensure the href is blank

      if (cleanData.type === 'trackEvent') {
        MATOMO_LOGGING && log.debug('Matomo - Tracking - Event - SummaryList: ', cleanData)
        trackEvent(cleanData)
      } else if (cleanData.type === 'trackGoal') {
        pushInstruction('trackGoal', [matomo[1]])
      }
    }
  }

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
        {hasActions && listItem.action &&
        <dd className={`govuk-summary-list__actions${customLayout ? ' summary-list__actions' : ''}`}>
          {listItem.action}
        </dd>
        }
        {listItem.action?.href && <dd className="govuk-summary-list__actions">
          {listItem.action.label && <a className="govuk-link" href={`${listItem.action.href}`} onClick={onClick}>
            {listItem.action.label}<span className="govuk-visually-hidden"> {listItem.action.desc || ''}</span>
          </a>}
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
  customLayout: PropTypes.bool,
  hasActions: PropTypes.bool,
  renderFeatures: PropTypes.func,
  listItems: PropTypes.array
}

SummaryList.defaultProps = {
  className: '',
  renderFeatures: () => { return null },
  listItems: []
}
