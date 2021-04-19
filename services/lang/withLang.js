import React from 'react'
import { useCookies } from 'react-cookie'

const withLang = (WrappedComponent, options = { withSetter: false }) => function withLang (props) {
  const [cookies, setCookie] = useCookies(['lang'])
  const { lang = 'en' } = cookies

  const setLang = (newLang) => setCookie('lang', newLang)

  const langProps = {
    lang
  }

  if (options && options.withSetter) {
    langProps.setLang = setLang
  }

  return <WrappedComponent {...props} {...langProps} />
}

export default withLang
