import React from 'react'
import { processErrorMessageTemplateStrings } from '../../services/errors'

/**
 * A HOC for injecting the query parameters of the current browser URL
 * to an object with key/vals matching the params. The receiving component
 * can access the params as the prop named "queryParams".
 * @param {function(*): *} WrappedComponent
 * @returns {function(*): *}
 */
const WithTransformedErrors = (WrappedComponent) => function WithTransformedErrors (props) {
  // eslint-disable-next-line react/prop-types
  const errors = processErrorMessageTemplateStrings(props.errors, props)

  return <WrappedComponent {...props} errors={errors} />
}

export default WithTransformedErrors
