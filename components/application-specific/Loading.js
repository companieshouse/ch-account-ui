import React, { useEffect, useState } from 'react'
import BodyText from '../general-ui/typeography/BodyText'

const Loading = () => {
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDisplay(true)
    }, 600)

    return () => clearTimeout(timeOut)
  })

  return display ? <BodyText>Page loading<div className="loading-spinner"><div></div><div></div><div></div><div></div></div></BodyText> : null
}

export default Loading
