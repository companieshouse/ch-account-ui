import CHANGE_CONSENT_MARKETING from '../CHANGE_CONSENT_MARKETING'
import CHANGE_CONSENT_UPDATES from '../CHANGE_CONSENT_UPDATES'
import UPDATE_EMAIL_MARKETING_CONSENT_CONFIRMATION from '../UPDATE_EMAIL_MARKETING_CONSENT_CONFIRMATION'
import UPDATE_EMAIL_UPDATES_CONSENT_CONFIRMATION from '../UPDATE_EMAIL_UPDATES_CONSENT_CONFIRMATION'

const tokens = jest.fn()

describe('CHANGE_CONSENT_MARKETING', () => {
  test('Should have a value', () => {
    expect(CHANGE_CONSENT_MARKETING('en', tokens)).toBeTruthy()
  })
})

describe('CHANGE_CONSENT_UPDATES', () => {
  test('Should have a value', () => {
    expect(CHANGE_CONSENT_UPDATES('en', tokens)).toBeTruthy()
  })
})

describe('UPDATE_EMAIL_MARKETING_CONSENT_CONFIRMATION', () => {
  test('Should have a value', () => {
    expect(UPDATE_EMAIL_MARKETING_CONSENT_CONFIRMATION('en', tokens)).toBeTruthy()
  })
})

describe('UPDATE_EMAIL_UPDATES_CONSENT_CONFIRMATION', () => {
  test('Should have a value', () => {
    expect(UPDATE_EMAIL_UPDATES_CONSENT_CONFIRMATION('en', tokens)).toBeTruthy()
  })
})
