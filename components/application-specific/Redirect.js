import React from 'react'
import { useRouter } from 'next/router'

const Redirect = (props) => {
  const { url, as, options, type = 'push' } = props
  const router = useRouter()

  if (!url) return null

  React.useEffect(() => {
    if (type === 'push') {
      router.push(url, as, options)
      return
    }

    router.replace(url, as, options)
  }, [])

  return null
}

export default Redirect
