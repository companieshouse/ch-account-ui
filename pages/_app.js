import React from 'react'
import Header from '../components/general-ui/Header'
import Footer from '../components/general-ui/Footer'
import CookieBanners from '../components/general-ui/interaction/CookieBanners'

function MyApp ({ Component, pageProps }) {
  React.useEffect(() => {
    import('govuk-frontend').then(({ initAll }) => {
      document.body.className = document.body.className ? document.body.className.replace('js-disabled', '') : ''
      document.body.className = document.body.className ? document.body.className + ' js-enabled' : 'js-enabled'
      initAll()
    })
  }, [])

  return (<>
    <CookieBanners />
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>)
}

export default MyApp
