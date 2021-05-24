import React from 'react'
import { useRouter } from 'next/router'

const Redirect = (props) => {
  const { url, as, options, type = 'push' } = props
  const router = useRouter()

  React.useEffect(() => {
    if (type === 'push') {
      router.push(url, as, options)
      return
    }

    router.replace(url, as, options)
  })

  if (!url) return null

  return null
}

export default Redirect
