import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import InputField from './InputField'
import FormGroup from './FormGroup'
import { translate } from '../../../services/translate'

import Button from './Button'
import log from '../../../services/log'
import ButtonGroup from './ButtonGroup'
import LinkText from './LinkText'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import { matomoHelper } from '../../../scripts/cleanAnalytics'
import { MATOMO_LOGGING } from '../../../services/environment'

const Search = ({ label, hint, handlers, lang, loading, id, matomo }) => {
  const [search, setSearch] = useState()
  const onSearch = handlers?.onSearch
  const inputRef = useRef()
  const { trackEvent, pushInstruction } = useMatomo()

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (!onSearch) {
      log.error('No onSearch handler defined')
      return
    }
    onSearch(search)

    if (matomo) {
      matomo.push(search)
      const cleanData = matomoHelper(matomo, true, 'Search.js')
      cleanData.href = 'http://' // ensure the href is blank
      cleanData.url = '' // ensure url is blank
      if (cleanData.type === 'trackEvent') {
        MATOMO_LOGGING && log.debug('Matomo - Tracking - Event - Search: ', cleanData)
        trackEvent(cleanData)
      } else if (cleanData.type === 'trackGoal') {
        MATOMO_LOGGING && log.debug('Matomo - Tracking - Goal - Search: ', matomo[1])
        pushInstruction('trackGoal', [matomo[1]])
      }
    }
  }

  const handleClear = (evt) => {
    evt.preventDefault()
    onSearch('')
    setSearch('')
    if (matomo) {
      matomo.push('clear search')
      const cleanData = matomoHelper(matomo)

      if (cleanData.type === 'trackEvent') {
        MATOMO_LOGGING && log.debug('Matomo - Tracking - Event - Search: ', cleanData)
        trackEvent(cleanData)
      } else if (cleanData.type === 'trackGoal') {
        MATOMO_LOGGING && log.debug('Matomo - Tracking - Goal - Search: ', matomo[1])
        pushInstruction('trackGoal', [matomo[1]])
      }
    }
  }

  return (
    <div className="search grid-row">
      <FormGroup className="govuk-!-margin-bottom-0">
        <form onSubmit={handleSubmit}>
        <div className="govuk-grid-column-two-thirds govuk-!-padding-left-0">
            <InputField label={label} hint={hint} labelSize="m" ref={inputRef} onChange={(evt) => { setSearch(evt.target.value) }} value={search} id={id}>
              <div className="search__inputs">
                <ButtonGroup>
                <Button testId="searchButton" secondary label={translate(lang, 'SEARCH')} className="govuk-!-margin-left-1" loading={loading} />
                <LinkText testId="" href="" onClick={handleClear}>{translate(lang, 'CLEAR_SEARCH')}</LinkText>
              </ButtonGroup>
              </div>
            </InputField>
        </div>
        </form>
      </FormGroup>
    </div>
  )
}

Search.propTypes = {
  handlers: PropTypes.object,
  label: PropTypes.string.isRequired,
  hint: PropTypes.string,
  loading: PropTypes.bool,
  lang: PropTypes.string.isRequired
}
export default Search
