import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'fast-text-encoding'

// eslint-disable-next-line no-undef
if (typeof Element !== 'undefined' && !Element.prototype.remove) {
  // eslint-disable-next-line no-undef
  Element.prototype.remove = function () {
    this.parentElement.removeChild(this)
  }
}

if (typeof window !== 'undefined' && !window.crypto && window.msCrypto) {
  // Cache the legacy `digest` API from `msCrypto`
  const legacyDigest = window.msCrypto.subtle.digest
  // Delete the property to prevent a circular reference
  delete window.msCrypto.subtle.digest

  // Wrap the cached digest method in a Promise
  const modernDigest = (type, array) => {
    return new Promise((resolve, reject) => {
      const cryptoObj = legacyDigest.call(window.msCrypto.subtle, type, array)
      cryptoObj.onerror = (err) => {
        // Crypto operation `digest` failed.
        reject(new Error(err))
      }
      cryptoObj.oncomplete = (evt) => {
        const result = evt.target.result
        resolve(result)
      }
    })
  }

  // Have the modern `window.crypto` point to the `msCrypto` library
  window.crypto = window.msCrypto
  // Assign the newly wrapped `digest` method to the original `digest` property
  window.crypto.subtle.digest = modernDigest
}
