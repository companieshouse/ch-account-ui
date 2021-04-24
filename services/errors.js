import { translate } from './translate'
import { parseTemplateString } from './template'
import { setImmutable as pathSetImmutable } from '@irrelon/path'
/**
 * @typedef {object} ErrorData
 * @property {string} label The error description to
 * display to the user.
 * @property {string} [anchor] Optional link to an anchor
 * on the page, helping the user find the field with the
 * error. This must match an element id on the page.
 * @property {string} [fieldName] Optional. Name of field for
 * defining error token specificity.
 * @property {string} [token] Optional. The token to use when
 * outputting the error to the screen in the user's selected
 * language.
 */

/**
 * Gets the error associated with a field if it exists.
 * @param {ErrorData[]} errors An array
 * of errors.
 * @param {string} fieldId The name of the field to get
 * error for.
 * @returns {ErrorData|undefined} Either
 * the error object or undefined if no error for the field
 * exists.
 */
export const getFieldError = (errors, fieldId) => {
  return errors.find((error) => error.anchor === fieldId)
}

/**
 * Sets the error `label` field by checking the `token` field and replacing the `label`
 * with the human-readable text matching the `token` from tokens.json.
 * @param {Array} errors The array of error objects to work with.
 * @param {String} lang The language to use when replacing token with text.
 * @returns {Array} The processed errors array.
 */
export const translateErrors = (errors, lang) => {
  // Resolve errors with tokens to labels
  errors.forEach((error) => {
    // Check if the error has already been processed / translated
    if (error.processed) return

    // Check if we don't have a token (so nothing to resolve)
    if (!error.token) return

    // Try to resolve using most specific error to least specific
    const tokensToTry = [
      `${error.token}(${error.fieldName})`,
      `${error.token}(${error.anchor})`,
      error.token,
      `${error.tokenNoNamespace}(${error.fieldName})`,
      `${error.tokenNoNamespace}(${error.anchor})`,
      error.tokenNoNamespace
    ]

    error.label = tokensToTry.reduce((label, token) => {
      if (label) return label
      label = translate(lang, token, '')

      return label
    }, '')

    if (!error.label) {
      error.label = `No token data for lang "${lang}" and tokens ${JSON.stringify(tokensToTry)}. Please check /services/lang/${lang}/tokens.json to ensure you have defined a token with one of these names!`
    }

    error.processed = true
  })

  return errors
}

/**
 * Loops the `errors` array and replaces any `error.label` template markers
 * with corresponding data from `data`. This function returns a new errors array
 * and any error objects that were modified are also returned new (immutable update).
 * @param {Array} errors The array of error objects to work on.
 * @param {Object|Array} data The data to use when replacing template markers.
 * @returns {Array} The new array of errors.
 */
export const processErrorMessageTemplateStrings = (errors, data) => {
  let newErrors = errors

  errors.forEach((error, index) => {
    const updatePath = `${index}.label`
    const newLabel = parseTemplateString(data, error.label, true, false)

    if (error.label === newLabel) return

    newErrors = pathSetImmutable(errors, updatePath, newLabel)
  })

  return newErrors
}
