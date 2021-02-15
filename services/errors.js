/**
 * @typedef {object} ErrorData
 * @property {string} label The error description to
 * display to the user.
 * @property {string} [anchor] Optional link to an anchor
 * on the page, helping the user find the field with the
 * error. This must match an element id on the page.
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
