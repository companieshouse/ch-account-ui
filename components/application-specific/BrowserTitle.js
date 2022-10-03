import PropTypes from 'prop-types'
import React from 'react'
import { cleanAnalytics } from '../../scripts/cleanAnalytics'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import { CH_BASE_URL, MATOMO_LOGGING } from '../../services/environment'
import log from '../../services/log'

const stripUrlParams = (string) => {
  const pattern = '[/][?].+'
  let striped = string
  const re = new RegExp(pattern)
  if (re.test(string)) {
    striped = typeof string === 'string' ? striped.replace(re, '') : string
    return striped
  }
  return string
}

const BrowserTitle = ({ title, errors, cleanTitle = true }) => {
  const { trackPageView, pushInstruction } = useMatomo()
  const suffix = ' - Companies House WebFiling account - GOV.UK'

  const baseUrl = '*.' + CH_BASE_URL

  pushInstruction('setDomains', [baseUrl])

  /* eslint-disable react-hooks/exhaustive-deps */
  React.useEffect(() => {
    window.document.title = title + suffix

    if (errors.length > 0) {
      window.document.title = 'Error: ' + window.document.title
    }
  }, [title, errors])

  /* eslint-disable react-hooks/exhaustive-deps */
  React.useEffect(() => {
    window.document.title = title + suffix
    const currentTitle = title
    const currentUrl = window.location.href

    MATOMO_LOGGING && log.debug('Matomo - tracking - URL: ', stripUrlParams(cleanAnalytics([currentUrl], false, 'BrowserTitle')[0]))

    const dataSenttoMatomo = {
      documentTitle: cleanAnalytics([currentTitle], cleanTitle, 'BrowserTitle')[0],
      href: cleanAnalytics([currentUrl], false, 'BrowserTitle')[0]
    }
    MATOMO_LOGGING && log.debug('Matomo - Tracking page view', dataSenttoMatomo)
    trackPageView(dataSenttoMatomo)
    const content = document.getElementById('__next')
    pushInstruction('FormAnalytics::scanForForms', [content])
  }, [title])

  return null
}

export default BrowserTitle

BrowserTitle.propTypes = {
  children: PropTypes.node
}
