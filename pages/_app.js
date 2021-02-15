import React from 'react'
import '../styles/global.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp ({ Component, pageProps }) {
  React.useEffect(() => {
    import('govuk-frontend').then(({ initAll }) => {
      console.log('Init govuk frontend')
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
