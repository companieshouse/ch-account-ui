import React from 'react'
import { useCookies } from 'react-cookie'

const WithLang = (WrappedComponent, options = { withSetter: false }) => function WithLang (props) {
  const [cookies, setCookie] = useCookies(['lang'])
  const { lang = 'en' } = cookies

  const setLang = (newLang) => {
    setCookie('lang', newLang, { path: '/' })
  }

  const langProps = {
    lang
  }

  if (options && options.withSetter) {
    langProps.setLang = setLang
  }

  return <WrappedComponent {...props} {...langProps} />
}

export default WithLang
