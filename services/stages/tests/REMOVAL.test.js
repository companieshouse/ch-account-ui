import REMOVAL_CONFIRMATION from "../REMOVAL_CONFIRMATION";
import REMOVE_AUTHZ_USER_ERROR from "../REMOVE_AUTHZ_USER_ERROR";
import REMOVE_USER_CONFIRM from "../REMOVE_USER_CONFIRM";

const tokens = jest.fn()

describe('REMOVAL_CONFIRMATION', () => {
  test('Should have a value', () => {
    expect(REMOVAL_CONFIRMATION('en', tokens)).toBeTruthy()
  })
})

describe('REMOVE_AUTHZ_USER_ERROR', () => {
  test('Should have a value', () => {
    expect(REMOVE_AUTHZ_USER_ERROR('en', tokens)).toBeTruthy()
  })
})

describe('REMOVE_USER_CONFIRM', () => {
  test('Should have a value', () => {
    expect(REMOVE_USER_CONFIRM('en', tokens)).toBeTruthy()
  })
})