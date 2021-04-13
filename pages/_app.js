import PropTypes from 'prop-types'
import React from 'react'
import Footer from '../components/general-ui/Footer'
import CookieBanners from '../components/general-ui/interaction/CookieBanners'
import { CookiesProvider } from 'react-cookie'

function MyApp ({ Component, pageProps }) {
  React.useEffect(() => {
    import('govuk-frontend').then(({ initAll }) => {
      document.body.className = document.body.className ? document.body.className.replace('js-disabled', '') : ''
      document.body.className = document.body.className ? document.body.className + ' js-enabled' : 'js-enabled'
      initAll()
    })
  }, [])

  return (<CookiesProvider>
    <CookieBanners />
    <Component {...pageProps} />
    <Footer />
  </CookiesProvider>)
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
}
