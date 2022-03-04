import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'

const WithLang = (WrappedComponent, options = { withSetter: false }) => function WithLang (props) {
  const [cookies, setCookie] = useCookies(['lang'])
  const { lang = 'en' } = cookies
  const router = useRouter()
  const query = router?.query
  const [override, setOverride] = useState(false)

  /* eslint-disable react-hooks/exhaustive-deps */
  React.useEffect(() => {
    if (!override) {
      const queryLang = query?.lang || props?.queryParams?.lang
      if (queryLang !== undefined) {
        setCookie('lang', queryLang, { path: '/' })
      } else {
        setCookie('lang', lang, { path: '/' })
      }
    }
  }, [override, query])

  const setLang = (newLang) => {
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
