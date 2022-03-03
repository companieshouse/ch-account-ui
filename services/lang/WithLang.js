import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'

const WithLang = (WrappedComponent, options = { withSetter: false }) => function WithLang (props) {
  const [cookies, setCookie] = useCookies(['lang'])
  const { lang = 'en' } = cookies
  const router = useRouter()
  const query = router?.query
  const [override, setOverride] = useState(false)
  const [currentLang = 'en', setCurrentLang] = useState(cookies)

  /* eslint-disable react-hooks/exhaustive-deps */
  React.useEffect(() => {
    if (!override) {
      if (query?.lang !== undefined) {
        setCookie('lang', query?.lang, { path: '/' })
        setCurrentLang(query.lang)
      } else {
        setCurrentLang(lang)
      }
    }
    console.log(currentLang)
  }, [override])

  const setLang = (newLang) => {
    setCurrentLang(newLang)
    setCookie('lang', newLang, { path: '/' })
    setOverride(true)
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
