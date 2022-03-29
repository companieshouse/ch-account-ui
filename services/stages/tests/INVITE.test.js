import INVITE_USER_1 from "../INVITE_USER_1";
import INVITE_USER_2 from "../INVITE_USER_2";
import INVITE_USER_3 from "../INVITE_USER_3";
import INVITE_USER_CONFIRM from "../INVITE_USER_CONFIRM";
import INVITE_USER_ERROR from "../INVITE_USER_ERROR";

const tokens = jest.fn()

describe('INVITE_USER_1', () => {
  test('Should have a value', () => {
    expect(INVITE_USER_1('en', tokens)).toBeTruthy()
  })
})

describe('INVITE_USER_2', () => {
  test('Should have a value', () => {
    expect(INVITE_USER_2('en', tokens)).toBeTruthy()
  })
})

describe('INVITE_USER_3', () => {
  test('Should have a value', () => {
    expect(INVITE_USER_3('en', tokens)).toBeTruthy()
  })
})

describe('INVITE_USER_CONFIRM', () => {
  test('Should have a value', () => {
    expect(INVITE_USER_CONFIRM('en', tokens)).toBeTruthy()
  })
})

describe('INVITE_USER_ERROR', () => {
  test('Should have a value', () => {
    expect(INVITE_USER_ERROR('en', tokens)).toBeTruthy()
  })
})