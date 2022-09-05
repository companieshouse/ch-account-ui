import PropTypes from 'prop-types'
import React from 'react'
import CookieBanners from '../components/general-ui/interaction/CookieBanners'

import '../css/global.scss'
import Script from 'next/script'
import { ANALYTICS_SITE_ID, ANALYTICS_TRACKER_URL } from '../services/environment'

import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react'
import log from '../services/log'

function MyApp ({ Component, pageProps }) {
  const BASE_PATH = process.env.BASE_PATH || ''

  React.useEffect(() => {
    document.body.className = document.body.className ? document.body.className.replace('js-disabled', '') : ''
    document.body.className = document.body.className ? document.body.className + ' js-enabled' : 'js-enabled'
  })

  let instance = createInstance({
    urlBase: ANALYTICS_TRACKER_URL.includes('http') ? ANALYTICS_TRACKER_URL : `https://${ANALYTICS_TRACKER_URL}`,
    siteId: ANALYTICS_SITE_ID
  })

  log.debug(instance, ANALYTICS_TRACKER_URL, ANALYTICS_SITE_ID)

  return (
    <>
      <Script src={`${BASE_PATH}/js/govuk-3.13.0.min.js`} strategy="beforeInteractive" onLoad={() => { window.GOVUKFrontend.initAll() }} />
      <Script src={`${BASE_PATH}/js/cookie-consent-1.0.0.js`} strategy="beforeInteractive" />

      <CookieBanners />
      
      <MatomoProvider value={instance}>
        <Component {...pageProps} />
      </MatomoProvider>
    </>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
}
