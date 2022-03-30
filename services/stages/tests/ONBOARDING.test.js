import ONBOARDING_ERROR from "../ONBOARDING_ERROR";
import ONBOARDING_PROFILE from "../ONBOARDING_PROFILE";
import ONBOARDING_PWD from "../ONBOARDING_PWD";

const tokens = jest.fn()

describe('ONBOARDING_ERROR', () => {
  test('Should have a value', () => {
    expect(ONBOARDING_ERROR('en', tokens)).toBeTruthy()
  })
})

describe('ONBOARDING_PROFILE', () => {
  test('Should have a value', () => {
    expect(ONBOARDING_PROFILE('en', tokens)).toBeTruthy()
  })
})

describe('ONBOARDING_PWD', () => {
  test('Should have a value', () => {
    expect(ONBOARDING_PWD('en', tokens)).toBeTruthy()
  })
})