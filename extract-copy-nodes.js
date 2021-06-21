const features = require('./services/lang/en/features.js')

Object.keys(features).forEach((key) => {
  const stage = features[key]
  const pageHeading = stage.find((node) => {
    // console.log(node)
    return node.component === 'PageHeading'
  })
  console.log(`${key}, ${pageHeading?.props?.children}`)
})
