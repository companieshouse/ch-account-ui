import RESET_PASSWORD_1 from "../RESET_PASSWORD_1";
import RESET_PASSWORD_2 from "../RESET_PASSWORD_2";
import RESET_PASSWORD_3 from "../RESET_PASSWORD_3";
import RESET_PASSWORD_4 from "../RESET_PASSWORD_4";
import RESET_PASSWORD_5 from "../RESET_PASSWORD_5";
import RESET_PASSWORD_6 from "../RESET_PASSWORD_6";
import RESET_PASSWORD_ERROR from "../RESET_PASSWORD_ERROR";

const tokens = jest.fn()

describe('RESET_PASSWORD_1', () => {
  test('Should have a value', () => {
    expect(RESET_PASSWORD_1('en', tokens)).toBeTruthy()
  })
})

describe('RESET_PASSWORD_2', () => {
  test('Should have a value', () => {
    expect(RESET_PASSWORD_2('en', tokens)).toBeTruthy()
  })
})

describe('RESET_PASSWORD_3', () => {
  test('Should have a value', () => {
    expect(RESET_PASSWORD_3('en', tokens)).toBeTruthy()
  })
})

describe('RESET_PASSWORD_4', () => {
  test('Should have a value', () => {
    expect(RESET_PASSWORD_4('en', tokens)).toBeTruthy()
  })
})

describe('RESET_PASSWORD_5', () => {
  test('Should have a value', () => {
    expect(RESET_PASSWORD_5('en', tokens)).toBeTruthy()
  })
})

describe('RESET_PASSWORD_6', () => {
  test('Should have a value', () => {
    expect(RESET_PASSWORD_6('en', tokens)).toBeTruthy()
  })
})

describe('RESET_PASSWORD_ERROR', () => {
  test('Should have a value', () => {
    expect(RESET_PASSWORD_ERROR('en', tokens)).toBeTruthy()
  })
})