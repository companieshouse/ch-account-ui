import React from 'react'
import Header from '../components/general-ui/Header'
import Footer from '../components/general-ui/Footer'

function MyApp ({ Component, pageProps }) {
  React.useEffect(() => {
    import('govuk-frontend').then(({ initAll }) => {
      document.body.className = document.body.className ? document.body.className.replace('js-disabled', '') : ''
      document.body.className = document.body.className ? document.body.className + ' js-enabled' : 'js-enabled'
      initAll()
    })
  })

  return (<>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>)
}

export default MyApp
