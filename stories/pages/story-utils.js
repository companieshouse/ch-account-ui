const setCallback = (callbacks, name, value) => {
  Object.keys(callbacks).forEach((key) => {
    const callback = callbacks[key]
    const callbackOutputId = callback.output.find((output) => output.name === 'id')
    console.log(callbackOutputId)
    if (callbackOutputId.value === name) {
      const callbackOutputValue = callback.output.find((output) => output.name === 'value')
      console.log(callbackOutputValue)
      callbackOutputValue.value = value
    }
  })
}

export { setCallback }
