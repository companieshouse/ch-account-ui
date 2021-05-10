const serializeForm = (elements) => {
  // Convert UI element values to JSON key/value pairs
  return Object.entries(elements).reduce((obj, [key, element]) => {
    obj[element.name] = element.value
    return obj
  }, {})
}

export { serializeForm }
