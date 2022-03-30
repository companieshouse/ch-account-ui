import emailOtp from "../shared/emailOtp";
import errorSignedOut from "../shared/errorSignedOut";
import genericError from "../shared/genericError";
import otpResend from "../shared/otpResend";
import otpResendEmail from "../shared/otpResendEmail";
import otpResendPhone from "../shared/otpResendPhone";
import pageNotFoundError from "../shared/pageNotFoundError";
import phoneOtp from "../shared/phoneOtp";

const tokens = jest.fn()

describe('emailOtp', () => {
  test('Should have a value', () => {
    expect(emailOtp('en', tokens)).toBeTruthy()
  })
})

describe('errorSignedOut', () => {
  test('Should have a value', () => {
    expect(errorSignedOut('en', tokens)).toBeTruthy()
  })
})

describe('genericError', () => {
  test('Should have a value', () => {
    expect(genericError('en', tokens)).toBeTruthy()
  })
})

describe('otpResend', () => {
  test('Should have a value', () => {
    expect(otpResend('en', tokens)).toBeTruthy()
  })
})

describe('otpResendEmail', () => {
  test('Should have a value', () => {
    expect(otpResendEmail('en', tokens)).toBeTruthy()
  })
})

describe('otpResendPhone', () => {
  test('Should have a value', () => {
    expect(otpResendPhone('en', tokens)).toBeTruthy()
  })
})

describe('pageNotFoundError', () => {
  test('Should have a value', () => {
    expect(pageNotFoundError('en', tokens)).toBeTruthy()
  })
})

describe('phoneOtp', () => {
  test('Should have a value', () => {
    expect(phoneOtp('en', tokens)).toBeTruthy()
  })
})