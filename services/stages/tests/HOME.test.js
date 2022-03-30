import HOME_AUTHORISED_PERSON from "../HOME_AUTHORISED_PERSON";
import HOME_MANAGE_ACCOUNT from "../HOME_MANAGE_ACCOUNT";
import HOME_NOTIFICATIONS from "../HOME_NOTIFICATIONS";
import HOME_OVERVIEW from "../HOME_OVERVIEW";
import HOME_YOUR_COMPANIES from "../HOME_YOUR_COMPANIES";

const tokens = jest.fn()

describe('HOME_AUTHORISED_PERSON', () => {
  test('Should have a value', () => {
    expect(HOME_AUTHORISED_PERSON('en', tokens)).toBeTruthy()
  })
})

describe('HOME_MANAGE_ACCOUNT', () => {
  test('Should have a value', () => {
    expect(HOME_MANAGE_ACCOUNT('en', tokens)).toBeTruthy()
  })
})

describe('HOME_NOTIFICATIONS', () => {
  test('Should have a value', () => {
    expect(HOME_NOTIFICATIONS('en', tokens)).toBeTruthy()
  })
})

describe('HOME_OVERVIEW', () => {
  test('Should have a value', () => {
    expect(HOME_OVERVIEW('en', tokens)).toBeTruthy()
  })
})

describe('HOME_YOUR_COMPANIES', () => {
  test('Should have a value', () => {
    expect(HOME_YOUR_COMPANIES('en', tokens)).toBeTruthy()
  })
})