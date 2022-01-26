import PropTypes from 'prop-types'
import React from 'react'
import CookieBanners from '../components/general-ui/interaction/CookieBanners'

import '../css/global.scss'
import Script from 'next/script'
import { ANALYTICS_SITE_ID, ANALYTICS_TRACKER_URL } from '../services/environment'

function MyApp ({ Component, pageProps }) {
  const BASE_PATH = process.env.BASE_PATH || ''

  React.useEffect(() => {
    document.body.className = document.body.className ? document.body.className.replace('js-disabled', '') : ''
    document.body.className = document.body.className ? document.body.className + ' js-enabled' : 'js-enabled'
  })

  return (
    <>
      <Script src={`${BASE_PATH}/js/govuk-3.13.0.min.js`} strategy="beforeInteractive" onLoad={() => { window.GOVUKFrontend.initAll() }} />
      <Script src={`${BASE_PATH}/js/cookie-consent-1.0.0.js`} strategy="beforeInteractive" />
      {/* Analytics tracking code initialisation see BrowserTitle.js for SPA tracking implementation */}
      <Script id="analytics-tag">
       {` 
          if(!_paq){ 
            var _paq = window._paq = window._paq || []; 
            _paq.push(['enableLinkTracking']); 
            (function() { 
              var u="//${ANALYTICS_TRACKER_URL}/"; 
              _paq.push(['setTrackerUrl', u+'matomo.php']); 
              _paq.push(['setSiteId', ${ANALYTICS_SITE_ID}]); 
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0]; 
              g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s); 
            })(); 
          } 
        `}
      </Script>
      <CookieBanners />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
}
