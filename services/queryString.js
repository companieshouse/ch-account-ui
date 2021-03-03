export const serialize = (obj) => {
  const str = Object.entries(obj).reduce((strParts, [key, val]) => {
    strParts.push(encodeURIComponent(key) + '=' + encodeURIComponent(val))
    return strParts
  }, [])

  return str.join('&')
}

export const urlToQueryObj = (url = '') => {
  const finalObj = {}
  const queryIndex = url.indexOf('?')

  if (queryIndex === -1) {
    return finalObj
  }

  const queryString = url.substr(queryIndex + 1)
  const queryKeyVals = queryString.split('&')

  queryKeyVals.forEach((keyVal) => {
    const keyValArr = keyVal.split('=')
    finalObj[keyValArr[0]] = decodeURIComponent(keyValArr[1])
  })

  return finalObj
}

export const generateQueryUrl = (browserPath = '', queryData) => {
  let finalBrowserPath = browserPath

  if (queryData) {
    if (finalBrowserPath.indexOf('?') !== -1) {
      finalBrowserPath += '&' + serialize(queryData)
    } else {
      finalBrowserPath += '?' + serialize(queryData)
    }
  }

  return finalBrowserPath
}
