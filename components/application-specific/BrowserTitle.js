/* global _paq */
import PropTypes from 'prop-types'
import React from 'react'
import { cleanAnalytics } from '../../scripts/cleanAnalytics'

const BrowserTitle = ({ title, errors }) => {
  const suffix = ' - Companies House WebFiling account - GOV.UK'

  React.useEffect(() => {
    // _paq.push(['trackPageView'])
    window.document.title = title + suffix

    if (errors.length > 0) {
      window.document.title = 'Error: ' + window.document.title
    }
  }, [title, errors])

  /* eslint-disable react-hooks/exhaustive-deps */
  React.useEffect(() => {
    const currentUrl = window.location.href
    _paq.push(['setCustomUrl', cleanAnalytics([currentUrl])[0]])
    _paq.push(['setDocumentTitle', title + suffix])
    _paq.push(['trackPageView', title])
    const content = document.getElementById('__next')
    _paq.push(['FormAnalytics::scanForForms', content])
    _paq.push(['enableLinkTracking'])
    console.log(title)
  }, [title])

  return null
}

export default BrowserTitle

BrowserTitle.propTypes = {
  children: PropTypes.node
}
