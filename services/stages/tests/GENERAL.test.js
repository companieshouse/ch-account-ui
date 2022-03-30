// use this to gather the single tests

import EMAIL_CONSENT from "../EMAIL_CONSENT";
import ERROR_SIGNED_OUT from "../ERROR_SIGNED_OUT";

import GENERIC_404 from "../GENERIC_404";
import GENERIC_ERROR from "../GENERIC_ERROR";

import LIMIT_EXCEEDED from "../LIMIT_EXCEEDED";
import LIMIT_EXCEEDED_ERROR from "../LIMIT_EXCEEDED_ERROR";

import LOGIN from "../LOGIN";
import LOGIN_MFA from "../LOGIN_MFA";
import LOGOUT_ERROR from "../LOGOUT_ERROR";

import NO_SESSION from "../NO_SESSION";
import NO_SESSION_ERROR from "../NO_SESSION_ERROR";

import OTP_RESEND from "../OTP_RESEND";
import PHONE_OTP from "../PHONE_OTP";

import REQUEST_AUTH_CODE from "../REQUEST_AUTH_CODE";

import SCRS_ERROR from "../SCRS_ERROR";
import SCRS_EXISTING_USER from "../SCRS_EXISTING_USER";

import SUCCESS_SIGNED_OUT from "../SUCCESS_SIGNED_OUT";

import UNAUTHORISED_CHANGE_EMAIL from "../UNAUTHORISED_CHANGE_EMAIL";
import UNAUTHORISED_CHANGE_PASSWORD from "../UNAUTHORISED_CHANGE_PASSWORD";

import WEBFILING from "../WEBFILING";

const tokens = jest.fn()

describe('EMAIL_CONSENT', () => {
  test('Should have a value', () => {
    expect(EMAIL_CONSENT('en', tokens)).toBeTruthy()
  })
})

describe('ERROR_SIGNED_OUT', () => {
  test('Should have a value', () => {
    expect(ERROR_SIGNED_OUT('en', tokens)).toBeTruthy()
  })
})

describe('GENERIC_404', () => {
  test('Should have a value', () => {
    expect(GENERIC_404('en', tokens)).toBeTruthy()
  })
})

describe('GENERIC_ERROR', () => {
  test('Should have a value', () => {
    expect(GENERIC_ERROR('en', tokens)).toBeTruthy()
  })
})

describe('LIMIT_EXCEEDED', () => {
  test('Should have a value', () => {
    expect(LIMIT_EXCEEDED('en', tokens)).toBeTruthy()
  })
})

describe('LIMIT_EXCEEDED_ERROR', () => {
  test('Should have a value', () => {
    expect(LIMIT_EXCEEDED_ERROR('en', tokens)).toBeTruthy()
  })
})

describe('LOGIN', () => {
  test('Should have a value', () => {
    expect(LOGIN('en', tokens)).toBeTruthy()
  })
})

describe('LOGIN_MFA', () => {
  test('Should have a value', () => {
    expect(LOGIN_MFA('en', tokens)).toBeTruthy()
  })
})

describe('LOGOUT_ERROR', () => {
  test('Should have a value', () => {
    expect(LOGOUT_ERROR('en', tokens)).toBeTruthy()
  })
})

describe('NO_SESSION', () => {
  test('Should have a value', () => {
    expect(NO_SESSION('en', tokens)).toBeTruthy()
  })
})

describe('NO_SESSION_ERROR', () => {
  test('Should have a value', () => {
    expect(NO_SESSION_ERROR('en', tokens)).toBeTruthy()
  })
})

describe('OTP_RESEND', () => {
  test('Should have a value', () => {
    expect(OTP_RESEND('en', tokens)).toBeTruthy()
  })
})

describe('PHONE_OTP', () => {
  test('Should have a value', () => {
    expect(PHONE_OTP('en', tokens)).toBeTruthy()
  })
})

describe('REQUEST_AUTH_CODE', () => {
  test('Should have a value', () => {
    expect(REQUEST_AUTH_CODE('en', tokens)).toBeTruthy()
  })
})

describe('SCRS_ERROR', () => {
  test('Should have a value', () => {
    expect(SCRS_ERROR('en', tokens)).toBeTruthy()
  })
})

describe('SCRS_EXISTING_USER', () => {
  test('Should have a value', () => {
    expect(SCRS_EXISTING_USER('en', tokens)).toBeTruthy()
  })
})

describe('SUCCESS_SIGNED_OUT', () => {
  test('Should have a value', () => {
    expect(SUCCESS_SIGNED_OUT('en', tokens)).toBeTruthy()
  })
})

describe('UNAUTHORISED_CHANGE_EMAIL', () => {
  test('Should have a value', () => {
    expect(UNAUTHORISED_CHANGE_EMAIL('en', tokens)).toBeTruthy()
  })
})

describe('UNAUTHORISED_CHANGE_PASSWORD', () => {
  test('Should have a value', () => {
    expect(UNAUTHORISED_CHANGE_PASSWORD('en', tokens)).toBeTruthy()
  })
})

describe('WEBFILING', () => {
  test('Should have a value', () => {
    expect(WEBFILING('en', tokens)).toBeTruthy()
  })
})
