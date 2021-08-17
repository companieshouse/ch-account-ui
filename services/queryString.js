export const serialize = (obj) => {
  const str = Object.entries(obj).reduce((strParts, [key, val]) => {
    if (val) {
      strParts.push(encodeURIComponent(key) + '=' + encodeURIComponent(val))
    }
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

/**
 * Generates a URL from a path and queryData object that has
 * serialised queryData into the path's query params.
 * @param {String} browserPath The path to add query data to.
 * @param {Object} queryData The query data to add to the path.
 * @returns {String} The final query url.
 */
export const generateQueryUrl = (browserPath, queryData) => {
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
