import EWF_LOGIN_1 from "../EWF_LOGIN_1";
import EWF_LOGIN_2 from "../EWF_LOGIN_2";
import EWF_LOGIN_3 from "../EWF_LOGIN_3";
import EWF_LOGIN_4 from "../EWF_LOGIN_4";
import EWF_LOGIN_5 from "../EWF_LOGIN_5";
import EWF_LOGIN_OTP_METHOD from "../EWF_LOGIN_OTP_METHOD";
import EWF_LOGIN_OTP from "../EWF_LOGIN_OTP";
import EWF_PROFILE from "../EWF_PROFILE";

const tokens = jest.fn()

describe('EWF_LOGIN_1', () => {
  test('Should have a value', () => {
    expect(EWF_LOGIN_1('en', tokens)).toBeTruthy()
  })
})

describe('EWF_LOGIN_2', () => {
  test('Should have a value', () => {
    expect(EWF_LOGIN_2('en', tokens)).toBeTruthy()
  })
})

describe('EWF_LOGIN_3', () => {
  test('Should have a value', () => {
    expect(EWF_LOGIN_3('en', tokens)).toBeTruthy()
  })
})

describe('EWF_LOGIN_4', () => {
  test('Should have a value', () => {
    expect(EWF_LOGIN_4('en', tokens)).toBeTruthy()
  })
})

describe('EWF_LOGIN_5', () => {
  test('Should have a value', () => {
    expect(EWF_LOGIN_5('en', tokens)).toBeTruthy()
  })
})

describe('EWF_LOGIN_OTP_METHOD', () => {
  test('Should have a value', () => {
    expect(EWF_LOGIN_OTP_METHOD('en', tokens)).toBeTruthy()
  })
})

describe('EWF_LOGIN_OTP', () => {
  test('Should have a value', () => {
    expect(EWF_LOGIN_OTP('en', tokens)).toBeTruthy()
  })
})

describe('EWF_PROFILE', () => {
  test('Should have a value', () => {
    expect(EWF_PROFILE('en', tokens)).toBeTruthy()
  })
})