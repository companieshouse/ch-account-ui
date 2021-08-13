import queryString from 'querystring'
import React from 'react'

/**
 * A HOC for injecting the query parameters of the current browser URL
 * to an object with key/vals matching the params. The receiving component
 * can access the params as the prop named "queryParams".
 * @param {function(*): *} WrappedComponent
 * @returns {function(*): *}
 */
const WithQueryParams = (WrappedComponent) => function WithQueryParams (props) {
  const queryParams = typeof window !== 'undefined' ? queryString.parse(window.location.search.slice(1)) : {}
  return <WrappedComponent {...props} queryParams={queryParams} />
}

export default WithQueryParams
