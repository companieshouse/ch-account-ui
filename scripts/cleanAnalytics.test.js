const { cleanAnalytics, matomoHelper } = require('./cleanAnalytics')

// test data
const matomo = ['trackEvent', 'category text', 'action text']

describe('matomoHelper', () => {
  test('should return an object with the values passed in and mapped to predefined keys', () => {
    expect( matomoHelper(matomo) ).toStrictEqual(
      {
        type: 'trackEvent',
        category: 'category text',
        action: 'action text'
      }
    )
  })
})

// test data 
const customerInfo = ['trackEvent', 'companyNumber=123231231', 'action text']

describe('cleanAnalytics', () => {
  test('should return a cleaned string that omits a customers data', () => {
    expect( cleanAnalytics(customerInfo) ).toStrictEqual(
      ['trackEvent', '<companyNumber>', 'action text']
    )
  })
})