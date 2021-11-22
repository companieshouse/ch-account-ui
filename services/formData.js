/*!
 * Serialize all form data into an object of key/value pairs
 * (c) 2020 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   form The form to serialize
 * @return {Object}      The serialized form data
 */
const serializeForm = (formEl) => {
  const obj = {}
  const convertBool = (value) => {
    if (value === 'true') {
      return true
    }
    if (value === 'false') {
      return false
    }
    return value
  }
  const radioOptions = []
  Array.prototype.slice.call(formEl.elements).forEach(function (field) {
    if (!field.name || field.disabled || ['file', 'reset', 'submit', 'button'].indexOf(field.type) > -1) return
    if (field.type === 'select-multiple') {
      const options = []
      Array.prototype.slice.call(field.options).forEach(function (option) {
        if (!option.selected) return
        options.push(convertBool(option.value))
      })
      if (options.length) {
        obj[field.name] = options
      }
      return
    }
    if (['radio'].indexOf(field.type) > -1) {
      radioOptions.push(field.checked)
      if (radioOptions.length > 1) {
        if (radioOptions.indexOf(true) > -1) { obj[field.name] = radioOptions.indexOf(true); return }
        obj[field.name] = ''
        return
      }
    }
    if (['checkbox'].indexOf(field.type) > -1 && !field.checked) return
    obj[field.name] = convertBool(field.value)
  })

  return obj
}

const validateField = (value, field, customValidationRules) => {
  const results = []
  const rules = {
    required: (value) => { return value !== '' ? '' : 'Enter your details' }
  }

  customValidationRules.forEach((rule) => {
    const result = rules[rule.name](value)
    if (result.length) {
      results.push({ token: rule.token, fieldName: field, anchor: field, label: result })
    }
  })

  return results
}

const customValidation = (formData, id, validationProps) => {
  const value = formData[id]
  // check the field exists in the form data
  if (typeof value !== 'undefined') {
    return validateField(value, id, validationProps)
  }
}

export { serializeForm, customValidation }
