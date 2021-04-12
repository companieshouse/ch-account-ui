import React from 'react'
import { useCookies } from 'react-cookie'

const withLang = (WrappedComponent) => function withLang (props) {
  const [cookies, setCookie] = useCookies(['lang'])
  const { lang = 'en' } = cookies

  return <WrappedComponent {...props} lang={lang} setLang={(newLang) => setCookie('lang', newLang)} />
}

export default withLang
