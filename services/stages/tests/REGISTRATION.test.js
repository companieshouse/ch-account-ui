import REGISTRATION_1 from "../REGISTRATION_1";
import REGISTRATION_2 from "../REGISTRATION_2";
import REGISTRATION_3 from "../REGISTRATION_3";
import REGISTRATION_4 from "../REGISTRATION_4";
import REGISTRATION_ERROR from "../REGISTRATION_ERROR";
import REGISTRATION_MFA from "../REGISTRATION_MFA";
import REGISTRATION_RESEND from "../REGISTRATION_RESEND";

const tokens = jest.fn()

describe('REGISTRATION_1', () => {
  test('Should have a value', () => {
    expect(REGISTRATION_1('en', tokens)).toBeTruthy()
  })
})

describe('REGISTRATION_2', () => {
  test('Should have a value', () => {
    expect(REGISTRATION_2('en', tokens)).toBeTruthy()
  })
})

describe('REGISTRATION_3', () => {
  test('Should have a value', () => {
    expect(REGISTRATION_3('en', tokens)).toBeTruthy()
  })
})

describe('REGISTRATION_4', () => {
  test('Should have a value', () => {
    expect(REGISTRATION_4('en', tokens)).toBeTruthy()
  })
})

describe('REGISTRATION_ERROR', () => {
  test('Should have a value', () => {
    expect(REGISTRATION_ERROR('en', tokens)).toBeTruthy()
  })
})

describe('REGISTRATION_MFA', () => {
  test('Should have a value', () => {
    expect(REGISTRATION_MFA('en', tokens)).toBeTruthy()
  })
})

describe('REGISTRATION_RESEND', () => {
  test('Should have a value', () => {
    expect(REGISTRATION_RESEND('en', tokens)).toBeTruthy()
  })
})